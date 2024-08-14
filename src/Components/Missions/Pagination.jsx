import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputPageChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= totalPages) {
      setCurrentPage(value);
    }
    setIsInputVisible(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsInputVisible(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="relative flex justify-center mt-4 mb-4">
          <button
            className="join-item btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Précédent
          </button>

          <button
            className={`join-item btn ${currentPage === 1 ? "btn-active" : ""}`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          {totalPages > 1 && (
            <button
              className={`join-item btn ${currentPage === 2 ? "btn-active" : ""}`}
              onClick={() => handlePageChange(2)}
            >
              2
            </button>
          )}
          {totalPages > 4 && (
            <>
              {(currentPage > 2 && currentPage < totalPages - 1) ? (
                // Si la currentPage est entre 3 et l'avant-dernière page, affiche currentPage
                <button 
                className="join-item btn btn-active"
                onClick={() => setIsInputVisible(!isInputVisible)}
                >
                  {currentPage}
                </button>
              ) : (
                // Sinon, affiche '...' et toggle l'input
                <button
                  className="join-item btn"
                  onClick={() => setIsInputVisible(!isInputVisible)}
                >
                  ...
                </button>
              )}
            </>
          )}
          {isInputVisible && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg z-10">
              <input
                type="number"
                className="input input-bordered w-32"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={(e) => e.key === "Enter" && handleInputPageChange(e)}
                placeholder="Page"
                min="1"
                max={totalPages}
              />
            </div>
          )}
          {totalPages > 3 && (
            <>
              <button
                className={`join-item btn ${
                  currentPage === totalPages - 1 ? "btn-active" : ""
                }`}
                onClick={() => handlePageChange(totalPages - 1)}
              >
                {totalPages - 1}
              </button>
              <button
                className={`join-item btn ${
                  currentPage === totalPages ? "btn-active" : ""
                }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            className="join-item btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
