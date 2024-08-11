import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import RedirectButton from './RedirectButton';

const MissionsData = () => {
  const [issues, setIssues] = useState([]);
  const [repoIssues, setRepoIssues] = useState([])
  const [error, setError] = useState(null);

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

    const fetchRepoIssues = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
          headers: {
            'Accept' : 'application/vnd.github.v3+json'
          }
      });
      console.log('Repo data', response.data)
      setRepoIssues(response.data);
    } catch (err) {
      setError('Error fetching the repository issues');
      console.error(err)
    }
  };

    fetchIssues();
    fetchRepoIssues();
  }, []);



  return (
    <>
    <div className='flex flex-row'>
      <div>
        <h1>Missions JSON</h1>
        {issues.map(issue => (
          <div key={issue.id}>
            <p>ID: {issue.id}</p>
            <p>Title: {issue.title}</p>
            <p>Creator: {issue.user.login}</p>
            <p>State: {issue.state}</p>
            <p>Assignees: {issue.assignees.map(assignee => assignee.login).join(', ') || "None"} </p>
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