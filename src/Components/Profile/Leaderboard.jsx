import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Missions/Pagination";
import DefaultButton from "../DefaultButton";

function Leaderboard() {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'ascending' });
  const [currentPage, setCurrentpage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const [linesPerPage, setlinesPerPage] = useState(10);
  const myPrenom = "Samantha";
  const [myId, setMyId] = useState("16");
  const [myData, setMyData] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(
                // "https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Users.json"
                "https://raw.githubusercontent.com/tommy-pellerin/json_refont_thp/main/Users.json"
            );
            // console.log(response.data.users);
            const getMyData = response.data.users.find(data => data.id === myId);
            setMyData(getMyData);
            const selectedData = response.data.users.map(user => ({
              nom: user.nom,
              prenom: user.prenom,
              rank: Number(user.rank),
              past_30_days: Number(user.past_30_days),
              points: Number(user.points)
            }));
            setData(selectedData);
            setTotalPages(Math.ceil(selectedData.length / linesPerPage))
        } catch (error) {
            console.error("Erreur lors de la récupération des users :", error);
        }
    };

    fetchUser();

  }, [linesPerPage]);

  // sorted data for each column
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

  //pagination calculation
  const indexOfLastLine = currentPage * linesPerPage;
  const indexOfFirstLine = indexOfLastLine - linesPerPage;
  const dataSortedByLines = sortedData.slice(indexOfFirstLine, indexOfLastLine);

  //change nombre of line per page and number of page
  const handlelinesPerPageChange = (e) => {
    setlinesPerPage(Number(e.target.value));
    setCurrentpage(1);
  }
  
  return(
    <>
      <div className="flex flex-wrap justify-between items-center">
        <h1>Leaderboard</h1>
        <Link to="/shop">
          <DefaultButton name="Boutique" color="btn-info"/>
        </Link>
      </div>
      <div className="text-center flex justify-center">
        <h3 className="border-1 shadow-lightInner rounded-lg flex-col sm:flex-row p-3 w-full sm:w-auto">Mon rang : {myData.rank}</h3>
      </div>
      <div className='flex items-center gap-2'>
        <label htmlFor="linesPerPage">Ligne par Page:</label>
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
          value={linesPerPage} 
          onChange={handlelinesPerPageChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

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
                  <button onClick={() => requestSort('past_30_days')} className="flex">
                    <p>Past 30 days</p>
                    <div className="w-8 flex justify-center items-center">
                      {sortConfig.key === null && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                        </svg>
                      )}
                      {sortConfig.key === 'past_30_days' && sortConfig.direction === 'ascending' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                        </svg>
                      )}
                      {sortConfig.key === 'past_30_days' && sortConfig.direction === 'descending' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                        </svg>
                      )}
                    </div>
                  </button>
                </th>
                <th scope="col">
                  <button onClick={() => requestSort('prenom')} className="flex">
                    <p>Name</p>
                    <div className="w-8 flex justify-center items-center">
                      {sortConfig.key === null && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                        </svg>
                      )}
                      {sortConfig.key === 'prenom' && sortConfig.direction === 'ascending' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                        </svg>
                      )}
                      {sortConfig.key === 'prenom' && sortConfig.direction === 'descending' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                        </svg>
                      )}
                    </div>
                  </button>
                </th>
                <th scope="col">
                  <button onClick={() => requestSort('points')} className="flex">
                    <p>Points</p>
                    <div className="w-8 flex justify-center items-center">
                      {sortConfig.key === null && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                        </svg>
                      )}
                      {sortConfig.key === 'points' && sortConfig.direction === 'ascending' && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                          <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                        </svg>
                      )}
                      {sortConfig.key === 'points' && sortConfig.direction === 'descending' && (
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

            {dataSortedByLines.map((data, index) => (
              <tr 
                key={index} 
                className={`${data.prenom === myPrenom ? 'bg-blue-light' : ''} hover:bg-gray-light`}
              >
                <th scope="row">{data.rank}</th>
                <td>{data.past_30_days}</td>
                <td>{`${data.prenom} ${data.nom.charAt(0).toUpperCase()}.`}</td>
                <td>{data.points}</td>
              </tr>
            ))}

          </tbody>
        </table>
        <div className='flex justify-center my-4'>
          <Pagination 
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentpage}
          />
        </div>
      </div>
    </>

  )
}
export default Leaderboard