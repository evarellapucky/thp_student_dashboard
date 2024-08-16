import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RedirectButton from '../RedirectButton';
import TooltipIcon from '../TooltipIcon/TooltipIcon';
import MissionCard from './MissionCard';
import Pagination from './Pagination';

const MissionsData = () => {
  const [issues, setIssues] = useState([]);
  const [repoIssues, setRepoIssues] = useState([]);
  const [error, setError] = useState(null);
  const [filterState, setFilterState] = useState("all");
  const [filterLabel, setFilterLabel] = useState("all");
  const [filterAssignees, setFilterAssignees] = useState("all");
  const [uniqueLabels, setUniqueLabels] = useState([]);
  const [labelColors, setLabelColors] = useState({});
  const [currentPage, setCurrentpage] = useState(1);
  const [issuesPerPage, setIssuesPerPage] = useState(20);

  const getUniqueLabels = (issues) => {
    const allLabels = issues.flatMap(issue => issue.labels.map(label => label.name.trim().toLowerCase()));
    return Array.from(new Set(allLabels));
  };

  const getLabelColors = (issues) => {
    const labels = issues.flatMap(issue => issue.labels);
    const labelColors = {};
    labels.forEach(label => {
      labelColors[label.name.trim().toLowerCase()] = label.color;
    });
    return labelColors;
  };

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/Marcaraph/Missions/main/Issues.json';
    // const owner = 'Marcaraph';
    // const repo = 'Missions';
    const owner = 'ethereum-optimism';
    const repo = 'ecosystem-contributions';

    // const fetchIssues = async () => {
    //   try {
    //     const response = await axios.get(url);
    //     console.log('JSON', response.data)
    //     setIssues(response.data);
    //     setUniqueLabels(getUniqueLabels(response.data));
    //     setLabelColors(getLabelColors(response.data));
    //   } catch (err) {
    //     setError('Error fetching the data');
    //     console.error(err);
    //   }
    // };

    const fetchRepoIssues = async () => {
      const allIssues = [];
      let page = 1;
      const perPage = 100;
      let hasMoreIssues = true;

      try {
        do {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          },
          params: {
            per_page: perPage,
            page: page,
          }
        });

        const issues = response.data;

        const filteredIssues = issues.filter(issue => !issue.pull_request)

        if (filteredIssues.length === 0) {
          hasMoreIssues = false;
        } else {
          allIssues.push(...filteredIssues);
          page++;
        }
      } while (hasMoreIssues);

      allIssues.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        console.log('Issues', allIssues)
        setRepoIssues(allIssues);
        setUniqueLabels(prevLabels => [...new Set([...prevLabels, ...getUniqueLabels(allIssues)])]);
        setLabelColors(prevColors => ({ ...prevColors, ...getLabelColors(allIssues) }));
      } catch (err) {
        setError('Error fetching the repository issues');
        console.error(err);
      }
    };

    // fetchIssues();
    fetchRepoIssues();
  }, []);

  // const for JSON file
  // const filteredIssues = issues.filter(issue => {
  //   const matchesState = filterState === 'all' || issue.state === filterState;

  //   const issueLabels = Array.isArray(issue.labels)
  //     ? issue.labels.map(label => label.name.trim().toLowerCase())
  //     : [];

  //   const normalizedFilterLabel = filterLabel.trim().toLowerCase();
    
  //   const matchesLabel = filterLabel === 'all' || issueLabels.includes(normalizedFilterLabel);

  //   const matchesAssignees = filterAssignees === 'all' || (filterAssignees === 'unassigned' && issue.assignees.length === 0);

  //   return matchesState && matchesLabel && matchesAssignees;
  // });

  const filteredRepoIssues = repoIssues.filter(issue => {
    const matchesState = filterState === 'all' || issue.state === filterState;

    const issueLabels = Array.isArray(issue.labels)
      ? issue.labels.map(label => label.name.trim().toLowerCase())
      : [];

    const normalizedFilterLabel = filterLabel.trim().toLowerCase();

    const matchesLabel = filterLabel === 'all' || issueLabels.includes(normalizedFilterLabel);

    const matchesAssignees = filterAssignees === 'all' || (filterAssignees === 'unassigned' && issue.assignees.length === 0);

    return matchesState && matchesLabel && matchesAssignees;
  });

    const indexOfLastIssue = currentPage * issuesPerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
    const currentRepoIssues = filteredRepoIssues.slice(indexOfFirstIssue, indexOfLastIssue);
    const totalPages = Math.ceil(filteredRepoIssues.length / issuesPerPage);

    const handleIssuesPerPageChange = (e) => {
      setIssuesPerPage(Number(e.target.value));
      setCurrentpage(1);
    }

    const tutorialText = `
    1. Cliquez le bouton 'Créer une mission sur Github' pour accéder à la création d'une issue.

    2. Remplissez le formulaire: Ajoutez un titre, une description (le markdown est supporté) et assignez les labels et les personnes concernées.

    3. Soumettez l'issue: Cliquez sur 'Submit new issue' pour enregistrer et publier votre mission.
    `

  return (
    <>
      <div className='flex justify-end'>
        <RedirectButton url="https://github.com/Marcaraph/Missions/issues/new" text="Créer une mission via Github" />
      </div>

      <div className='flex flex-row gap-3 items-center'>    
        <h1 className='font-bold text-black text-3xl ml-5'>MISSIONS</h1>
        <TooltipIcon text={tutorialText} />
      </div>

      <div className='flex justify-end gap-2 items-center'>
        <h1>Filter issues by State</h1>
        <select 
          className='
            px-3 
            py-2 
            border 
            border-gray-300 
            rounded-md 
            shadow-sm 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-blue-500 
            text-sm
            bg-white 
            text-gray-700' 
          value={filterState} 
          onChange={(e) => setFilterState(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='open'>Open</option>
          <option value='closed'>Closed</option>
        </select>

        <h1>Filter issues by Labels</h1>
        <select 
          className='
            px-3 
            py-2 
            border 
            border-gray-300 
            rounded-md 
            shadow-sm 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-blue-500 
            text-sm
            bg-white 
            text-gray-700' 
          value={filterLabel} 
          onChange={(e) => setFilterLabel(e.target.value.trim().toLowerCase())}
        >
          <option value='all'>All</option>
          {uniqueLabels.map(label => (
            <option key={label} value={label}>{label.charAt(0).toUpperCase() + label.slice(1)}</option>
          ))}
        </select>

        <h1>Filter issues by Assignees</h1>
        <select 
          className='
            px-3 
            py-2 
            border 
            border-gray-300 
            rounded-md 
            shadow-sm 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-blue-500 
            text-sm
            bg-white 
            text-gray-700' 
          value={filterAssignees} 
          onChange={(e) => setFilterAssignees(e.target.value)}
        >
          <option value='all'>All</option>
          <option value='unassigned'>No Assignees</option>
        </select>

        <h1>Issues per Page</h1>
        <select 
          className='
            px-3 
            py-2 
            border 
            border-gray-300 
            rounded-md 
            shadow-sm 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-blue-500 
            text-sm
            bg-white 
            text-gray-700' 
          value={issuesPerPage} 
          onChange={handleIssuesPerPageChange}
        >
          <option value={6}>6</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className=''>
        {/* <div>
          <h1>Missions JSON</h1>
          {filteredIssues.map(issue => (
            <MissionCard
              key={issue.id}
              number={issue.number}
              update={new Date(issue.updated_at).toLocaleDateString()}
              title={issue.title}
              assignees={issue.assignees.map(assignee => assignee.login).join(', ') || "None"}
              assigneesCount={issue.assignees.length}
              description={issue.description || "No description"}
              html_url={issue.html_url}
              creator={issue.user.login}
              state={issue.state}
              labels={issue.labels.map(label => label.name.trim().toLowerCase()).join(', ') || "None"}
              labelColors={labelColors}
              commentsCount={issue.comments}
            />
          ))}
        </div> */}
        <div className='flex justify-center my-4'>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentpage} 
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          {currentRepoIssues.map(issue => (
            <MissionCard
              key={issue.id}
              number={issue.number}
              update={new Date(issue.updated_at).toLocaleDateString()}
              title={issue.title}
              assignees={issue.assignees.map(assignee => assignee.login).join(', ') || "None"}
              assigneesCount={issue.assignees.length}
              description={issue.body || "No description"}
              html_url={issue.html_url}
              creator={issue.user.login}
              state={issue.state}
              labels={issue.labels.map(label => label.name.trim().toLowerCase()).join(', ') || "None"}
              labelColors={labelColors}
              commentsCount={issue.comments}
            />
          ))}
        </div>

        <div className='flex justify-center my-4'>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentpage} 
          />
        </div>
      </div>
    </>
  );
};

export default MissionsData;