import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import RedirectButton from './RedirectButton';
import TooltipIcon from './TooltipIcon/TooltipIcon';
import MissionCard from './MissionCard';

const MissionsData = () => {
  const [issues, setIssues] = useState([]);
  const [repoIssues, setRepoIssues] = useState([])
  const [error, setError] = useState(null);
  const [filterState, setFilterState] = useState("all");
  const [filterLabel, setFilterLabel] = useState("all");

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/Marcaraph/Missions/main/Issues.json'
    const owner = 'Marcaraph'
    const repo = 'Missions'

    // Fetch sur fichier JSON
       const fetchIssues = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data)
        setIssues(response.data);
      } catch (err) {
        setError('Error fetching the data');
        console.error(err);
      }
    };

    // Fetch sur repo Github
    const fetchRepoIssues = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
          headers: {
            'Accept' : 'application/vnd.github.v3+json'
          }
      });
      console.log('Github', response.data)
      setRepoIssues(response.data);
    } catch (err) {
      setError('Error fetching the repository issues');
      console.error(err)
    }
  };

    fetchIssues();
    fetchRepoIssues();
  }, []);

  // const filteredIssues = issues.filter(issue => {
  //   if (filterState === 'all') return true;
  //   return issue.state === filterState;
  // });

  const filteredIssues = issues.filter(issue => {
    const matchesState = filterState === 'all' || issue.state === filterState;
    const issueLabels = Array.isArray(issue.labels) ? issue.labels.map(label => typeof label === 'string' ? label : label.name) : [];
    console.log('Filter Label', filterLabel)
    console.log('Issue Labels', issueLabels)
    const matchesLabel = filterLabel === 'all' || issue.labels.includes(filterLabel);
    return matchesState && matchesLabel;
  })



  return (
    <>
    <div className='flex justify-end'>
    <RedirectButton url="https://github.com/Marcaraph/Missions/issues/new" text="Créer une mission via Github" />
    </div>

    <div className='flex flex-row gap-3 items-center'>    
      <h1 className='font-bold text-black text-3xl ml-5'>MISSIONS</h1>
      <TooltipIcon text="Explications d'une mission à completer" />
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
      onChange={(e) => setFilterState(e.target.value)}>
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
      onChange={(e) => setFilterLabel(e.target.value)}>
        <option value='all'>All</option>
        <option value='good first issue'>Good First Issue</option>
        <option value='help wanted'>Help Wanted</option>
        <option value='documentation'>Documentation</option>
        <option value='bug'>Bug</option>
        <option value='enhancement'>Enhancement</option>
        <option value='question'>Question</option>
        <option value='wontfix'>Wontfix</option>
        <option value='duplicate'>Duplicate</option>
        <option value='invalid'>Invalid</option>
      </select>
    </div>

    <div className='flex flex-row'>
      <div>
        <h1>Missions JSON</h1>
        {filteredIssues.map(issue => (
          <MissionCard
            key={issue.id}
            id={issue.id}
            date={new Date(issue.date).toLocaleDateString()}
            title={issue.title}
            assignees={issue.assignees.map(assignee => assignee.login).join(', ') || "None"}
            assigneesCount={issue.assignees.length}
            description={issue.description || "No description"}
            html_url={issue.html_url}
            creator={issue.user.login}
            state={issue.state}
            labels={issue.labels.map(label => label.name).join(', ') || "None"}
          />
        ))}
      </div>
      <div>
        <h1>Missions Repo</h1>
        {repoIssues.map(issue => (
          <MissionCard
            key={issue.id} 
            id={issue.id}
            date={new Date(issue.created_at).toLocaleDateString()}
            title={issue.title}
            assignees={issue.assignees.map(assignee => assignee.login).join(', ') || "None"}
            assigneesCount={issue.assignees.length}
            description={issue.body || "No description"}
            html_url={issue.html_url}
            creator={issue.user.login}
            state={issue.state}
            labels={issue.labels.map(label => label.name).join(', ') || "None"}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default MissionsData;