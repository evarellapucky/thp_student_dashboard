import { useState } from "react";
import PropTypes from 'prop-types';

const Table = ({ data = [], itemsPerPage = 4 }) => { // Initialisation de data par défaut comme tableau vide
    const [currentPage, setCurrentPage] = useState(1);

    // Obtenir les colonnes dynamiquement en fonction des clés du premier objet
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="overflow-x-auto mt-6">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((entry, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{entry[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`btn btn-sm ${currentPage === index + 1 ? "btn-active" : ""}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Définition des PropTypes en dehors du composant
Table.propTypes = {
    data: PropTypes.array, // La validation par défaut est un tableau
    itemsPerPage: PropTypes.number, // Validation de 'itemsPerPage'
};

export default Table;
