import React from "react";
import { useState } from "react";
import parse from 'html-react-parser';

function DirectoryTable({ data }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  //extraire les clés des objets pour les utiliser dans les en-tetes de colonne
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  //fonction pour configurer les tris des colonnes par ordre ascendant ou descendant
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

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];

    if (currentPage > 2) {
      pages.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          className="btn btn-sm"
        >
          1
        </button>
      );
      if (currentPage > 3) {
        pages.push(<span key="dots-before" className="px-2"> ... </span>);
      }
    }

    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="btn btn-sm"
        >
          {currentPage - 1}
        </button>
      );
    }

    pages.push(
      <button key="current" className="btn btn-sm btn-active">
        {currentPage}
      </button>
    );

    if (currentPage < totalPages) {
      if (currentPage < totalPages - 1) {
        pages.push(
          <button
            key="next"
            onClick={() => handlePageChange(currentPage + 1)}
            className="btn btn-sm"
          >
            {currentPage + 1}
          </button>
        );
      }
      if (currentPage < totalPages - 2) {
        pages.push(<span key="dots" className="px-2"> ... </span>);
      }
      pages.push(
        <button
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className="btn btn-sm"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  //fonction pour trier des colonnes
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  //reinitialiser les tris
  const resetSort = () => {
    setSortConfig({ key: null, direction: 'ascending' });
  };

  return(
    <div className="overflow-x-auto my-5">
      <button onClick={resetSort} className="underline">Reset Sort</button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {columns.map((column,index) => (
              <th key={index} scope="col" className="px-4 py-2">
                <button onClick={() => requestSort(column)} className="flex">
                  <p>{column.charAt(0).toUpperCase() + column.slice(1)}</p>
                  <div className="w-8 flex justify-center items-center">
                    {sortConfig.key === null && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"/>
                      </svg>
                    )}
                    {sortConfig.key === column && sortConfig.direction === 'ascending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                      </svg>
                    )}
                    {sortConfig.key === column && sortConfig.direction === 'descending' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="15" height="15">
                        <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                      </svg>
                    )}
                  </div>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="hover">
              {columns.map((column,index) => (
                <td key={index} className="px-4 py-2">{typeof item[column] === 'string' ? parse(item[column]) : item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        {renderPagination()}
      </div>
    </div>
  )
}

export default DirectoryTable;