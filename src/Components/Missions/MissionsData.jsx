import { useEffect, useState } from "react";
import RedirectButton from "../RedirectButton";
import TooltipIcon from "../TooltipIcon/TooltipIcon";
import MissionCard from "./MissionCard";
import Pagination from "./Pagination";
import { useAtom } from "jotai";
import { issuesAtom, tokenAtom } from "../Atom/atoms";
import DefaultButton from "../DefaultButton";

const MissionsData = () => {
  const [issues] = useAtom(issuesAtom);
  const [filterState, setFilterState] = useState("all");
  const [filterLabel, setFilterLabel] = useState("all");
  const [filterAssignees, setFilterAssignees] = useState("all");
  const [uniqueLabels, setUniqueLabels] = useState([]);
  const [labelColors, setLabelColors] = useState({});
  const [currentPage, setCurrentpage] = useState(1);
  const [issuesPerPage, setIssuesPerPage] = useState(20);
  const [inputValue, setInputValue] = useState("");
  const [token, setToken] = useAtom(tokenAtom);
  const [tokenCreationDate, setTokenCreationDate] = useState(null);

  useEffect(() => {
    if (issues.length > 0) {
      setUniqueLabels(getUniqueLabels(issues));
      setLabelColors(getLabelColors(issues));
    }

    const savedTokenCreationDate = localStorage.getItem("tokenCreationDate");
    if (savedTokenCreationDate) {
      setTokenCreationDate(new Date(savedTokenCreationDate));
    }
  }, [issues]);

  const getUniqueLabels = (issues) => {
    const allLabels = issues.flatMap((issue) =>
      issue.labels.map((label) => label.name.trim().toLowerCase())
    );
    return Array.from(new Set(allLabels));
  };

  const getLabelColors = (issues) => {
    const labels = issues.flatMap((issue) => issue.labels);
    const labelColors = {};
    labels.forEach((label) => {
      labelColors[label.name.trim().toLowerCase()] = label.color;
    });
    return labelColors;
  };

  const filteredRepoIssues = issues.filter((issue) => {
    const matchesState = filterState === "all" || issue.state === filterState;

    const issueLabels = Array.isArray(issue.labels)
      ? issue.labels.map((label) => label.name.trim().toLowerCase())
      : [];

    const normalizedFilterLabel = filterLabel.trim().toLowerCase();

    const matchesLabel =
      filterLabel === "all" || issueLabels.includes(normalizedFilterLabel);

    const matchesAssignees =
      filterAssignees === "all" ||
      (filterAssignees === "unassigned" && issue.assignees.length === 0);

    return matchesState && matchesLabel && matchesAssignees;
  });

  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentRepoIssues = filteredRepoIssues.slice(
    indexOfFirstIssue,
    indexOfLastIssue
  );
  const totalPages = Math.ceil(filteredRepoIssues.length / issuesPerPage);

  const handleIssuesPerPageChange = (e) => {
    setIssuesPerPage(Number(e.target.value));
    setCurrentpage(1);
  };

  const tutorialText = `
    1. Cliquez le bouton 'Créer une mission sur Github' pour accéder à la création d'une issue.

    2. Remplissez le formulaire: Ajoutez un titre, une description (le markdown est supporté) et assignez les labels et les personnes concernées.

    3. Soumettez l'issue: Cliquez sur 'Submit new issue' pour enregistrer et publier votre mission.
    `;

  const refreshPage = () => {
    window.location.reload();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePat = () => {
    const now = new Date();
    setToken(inputValue);
    setTokenCreationDate(now);
    localStorage.setItem("tokenCreationDate", now.toISOString());
    refreshPage();
  };

  const getDaysSinceTokenCreate = () => {
    if (!tokenCreationDate) return null;
    const now = new Date();
    const timeDifference = now - tokenCreationDate;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <>
      <div className="flex justify-center items-center lg:justify-start gap-4 mb-4">
        <h1>MISSIONS</h1>
        <TooltipIcon text={tutorialText} />
      </div>

      <div className="flex justify-center mb-4 lg:justify-end">
        <RedirectButton
          url="https://github.com/Marcaraph/Missions/issues/new"
          text="Créer une mission via Github"
        />
      </div>

      <div className="flex flex-col justify-center md:flex-row gap-4 mb-4">
        <div className="flex items-center gap-2">
          <label htmlFor="filterState">
            Filter issues by State:
          </label>
          <select
            className="
              px-3 
              py-2 
              border 
              border-gray-medium 
              rounded-md 
              shadow-sm 
              focus:outline-none 
              focus:ring-2 
              focus:ring-secondary 
              focus:border-secondary 
              text-sm
              bg-white 
              text-gray-darker"
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
          >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="filterLabel">
            Filter issue by Labels:
          </label>
          <select
            className="
              px-3 
              py-2 
              border 
              border-gray-medium 
              rounded-md 
              shadow-sm 
              focus:outline-none 
              focus:ring-2 
              focus:ring-secondary 
              focus:border-secondary 
              text-sm
              bg-white 
              text-gray-darker"
            value={filterLabel}
            onChange={(e) =>
              setFilterLabel(e.target.value.trim().toLowerCase())
            }
          >
            <option value="all">All</option>
            {uniqueLabels.map((label) => (
              <option key={label} value={label}>
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="filterAssignees">Filter issues by Assignees:</label>
          <select
            className="
              px-3 
              py-2 
              border 
              border-gray-medium 
              rounded-md 
              shadow-sm 
              focus:outline-none 
              focus:ring-2 
              focus:ring-secondary 
              focus:border-secondary 
              text-sm
              bg-white 
              text-gray-darker"
            value={filterAssignees}
            onChange={(e) => setFilterAssignees(e.target.value)}
          >
            <option value="all">All</option>
            <option value="unassigned">No Assignees</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="issuesPerPage">
            Issues per Page:
          </label>
          <select
            className="
              px-3 
              py-2 
              border 
              border-gray-medium 
              rounded-md 
              shadow-sm 
              focus:outline-none 
              focus:ring-2 
              focus:ring-secondary 
              focus:border-secondary 
              text-sm
              bg-white 
              text-gray-darker"
            value={issuesPerPage}
            onChange={handleIssuesPerPageChange}
          >
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentpage}
        />
      </div>

      <div className="flex justify-center items-center sm:justify-end">
        <DefaultButton onClick={refreshPage}>{"Refresh la page"}</DefaultButton>
      </div>

      {tokenCreationDate && getDaysSinceTokenCreate() > 28 && (
        <div className="flex flex-col items-center mt-5 gap-3">
          <div>
            <RedirectButton
              url="https://github.com/settings/tokens/new"
              text="Générer un nouveau token"
            />
          </div>
          <div className="flex gap-5">
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={inputValue}
                onChange={handleInputChange}
              />
            </label>
            <DefaultButton name="Valider" onClick={handlePat}/>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {currentRepoIssues.map((issue) => (
          <MissionCard
            key={issue.id}
            number={issue.number}
            update={new Date(issue.updated_at).toLocaleDateString()}
            title={issue.title}
            assignees={
              issue.assignees.map((assignee) => assignee.login).join(", ") ||
              "None"
            }
            assigneesCount={issue.assignees.length}
            description={issue.body || "No description"}
            html_url={issue.html_url}
            creator={issue.user.login}
            state={issue.state}
            labels={
              issue.labels
                .map((label) => label.name.trim().toLowerCase())
                .join(", ") || "None"
            }
            labelColors={labelColors}
            commentsCount={issue.comments}
          />
        ))}
      </div>

      <div className="flex justify-center my-4">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentpage}
        />
      </div>
    </>
  );
};

export default MissionsData;
