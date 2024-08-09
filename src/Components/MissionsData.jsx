import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const MissionsData = () => {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/Marcaraph/Missions/b683c3e5ecfafa9af1bf34ea2ff9e731924d9d63/Issues.json'

    const fetchIssues = async () => {
      try {
        const response = await axios.get(url);
        console.log('Data reçue', response.data)
        setIssues(response.data);
      } catch (err) {
        setError('Error fetching the data');
        console.error(err);
      }
    };
    fetchIssues();
  }, []);

  return (
    <>
    <div>
      <h1>Missions</h1>
      {issues.map(issue => (
        <div key={issue.id}>
          <p>ID: {issue.id}</p>
          <p>Creator: {issue.user.login}</p>
          <p>State: {issue.state}</p>
          <p>Assignees: {issue.assignees.map(assignee => assignee.login).join(', ') || "None"} </p>
          <p>Labels: {issue.labels.map(label => label.name).join(', ') || "None"}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default MissionsData;