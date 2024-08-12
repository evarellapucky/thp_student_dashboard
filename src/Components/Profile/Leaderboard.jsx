import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";


function Leaderboard() {
  const [data, setData] = useState([
    { rank: 4, name: "Michel", past30Days: 155, allTime: 6580 },
    { rank: 1, name: "James", past30Days: 135, allTime: 15250 },
    { rank: 5, name: "Bobby", past30Days: 90, allTime: 5750 },
    { rank: 2, name: "Susan", past30Days: 75, allTime: 11295 },
    { rank: 3, name: "Malo", past30Days: 50, allTime: 7555 },
    { rank: 6, name: "Samantha", past30Days: 35, allTime: 4695 },
  ])
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === null) {
      return 0;
    }
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const resetSort = () => {
    setSortConfig({ key: null, direction: 'ascending' });
  };

  return(
    <>
      <h1>Leaderboard</h1>
      <Link to="/shop" className="border-2 px-3">Boutique</Link>
      <div className="overflow-x-auto">
        <button onClick={resetSort} className="underline">Reset Sort</button>
        <table className="table">
          <thead>
            <tr>

              <th scope="col">                
                <button onClick={() => requestSort('rank')} className="flex"> 
                  <p>Rank</p>
                  <div className="w-8 flex justify-center items-center">
                    {sortConfig.key === null && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'rank' && sortConfig.direction === 'ascending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'rank' && sortConfig.direction === 'descending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                      </svg>
                    )}
                  </div>
                </button>
              </th>

              <th scope="col">                
                <button onClick={() => requestSort('name')} className="flex">
                  <p>Name</p>
                  <div className="w-8 flex justify-center items-center">
                    {sortConfig.key === null && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'name' && sortConfig.direction === 'ascending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'name' && sortConfig.direction === 'descending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                      </svg>
                    )}
                  </div>
                </button>
              </th>

              <th scope="col">
                <button onClick={() => requestSort('past30Days')} className="flex">
                  <p>Past 30 days</p>
                  <div className="w-8 flex justify-center items-center">
                    {sortConfig.key === null && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'past30Days' && sortConfig.direction === 'ascending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'past30Days' && sortConfig.direction === 'descending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                      </svg>
                    )}
                  </div>
                </button>
              </th>

              <th scope="col">
                <button onClick={() => requestSort('allTime')} className="flex">
                  <p>All time</p>
                  <div className="w-8 flex justify-center items-center">
                    {sortConfig.key === null && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'allTime' && sortConfig.direction === 'ascending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                      </svg>
                    )}
                    {sortConfig.key === 'allTime' && sortConfig.direction === 'descending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                      </svg>
                    )}
                  </div>
                </button>
              </th>

            </tr>
          </thead>
          <tbody>

            {sortedData.map((item, index) => (
              <tr key={index} className="hover">
                <th scope="row">{item.rank}</th>
                <td>{item.name}</td>
                <td>{item.past30Days}</td>
                <td>{item.allTime}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>

  )
}
export default Leaderboard