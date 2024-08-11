import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import RedirectButton from './RedirectButton';

const MissionsData = () => {
  const [issues, setIssues] = useState([]);
  const [repoIssues, setRepoIssues] = useState([])
  const [error, setError] = useState(null);
  const [filterState, setFilterState] = useState("all");

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/Marcaraph/Missions/main/Issues.json'
    const owner = 'Marcaraph'
    const repo = 'Missions'

    // Fetch sur fichier JSON
       const fetchIssues = async () => {
      try {
        const response = await axios.get(url);
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
      setRepoIssues(response.data);
    } catch (err) {
      setError('Error fetching the repository issues');
      console.error(err)
    }
  };

    fetchIssues();
    fetchRepoIssues();
  }, []);

  const filteredIssues = issues.filter(issue => {
    if (filterState === 'all') return true;
    return issue.state === filterState;
  });


  return (
    <>
    <div>
      <h1>Filter issues by State</h1>
      <select value={filterState} onChange={(e) => setFilterState(e.target.value)}>
        <option value='all'>All</option>
        <option value='open'>Open</option>
        <option value='closed'>Closed</option>
      </select>
    </div>

    <div className='flex flex-row'>
      <div>
        <h1>Missions JSON</h1>
        {filteredIssues.map(issue => (
          <div key={issue.id}>
            <p>ID: {issue.id}</p>
            <p>Title: {issue.title}</p>
            <p>Creator: {issue.user.login}</p>
            <p>State: {issue.state}</p>
            <p>Assignees: {issue.assignees.map(assignee => assignee.login).join(', ') || "None"} </p>
            <p>Number of Assignees: {issue.assignees.length}</p>
            <p>Labels: {issue.labels.map(label => label.name).join(', ') || "None"}</p>
          </div>
        ))}
      </div>
      <div>
        <h1>Missions Repo</h1>
        {repoIssues.map(issue => (
          <div key={issue.id}>
            <p>ID: {issue.id}</p>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">{issue.title}</a>
            <p>Creator: {issue.user.login}</p>
            <p>State: {issue.state}</p>
            <p>Assignees: {issue.assignees.map(assignee => assignee.login).join(', ') || "None"} </p>
            <p>Number of Assignees: {issue.assignees.length}</p>
            <p>Labels: {issue.labels.map(label => label.name).join(', ') || "None"}</p>
          </div>
        ))}
      </div>
      <RedirectButton url="https://github.com/Marcaraph/Missions/issues/new" text="Créer une mission" />
    </div>
    </>
  );
};

export default MissionsData;