import { useState } from 'react';
import Modal from './Modal';

const Table = () => {
    const data = [ 
        { name: "Hart Hagerty", date: "01-08-2024", comment: "lorem ipsum dolor sit amet consectetur adipisicing elit. fugiat, quidem." },
        { name: "Brice Swyre", date: "01-08-2024", comment: "Red" },
        { name: "Marjy Ferencz", date: "01-08-2024", comment: "Crimson" },
        { name: "Yancy Tear", date: "01-08-2024", comment: "Indigo" },
        { name: "Alice Johnson", date: "01-08-2024", comment: "Green" },
        { name: "Bob Smith", date: "01-08-2024", comment: "Blue" },
        { name: "Charlie Brown", date: "01-08-2024", comment: "Yellow" },
        { name: "Diana Prince", date: "01-08-2024", comment: "Pink" },
        { name: "Ethan Hunt", date: "01-08-2024", comment: "Orange" },
        { name: "Fiona Gallagher", date: "01-08-2024", comment: "Violet" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const openModal = (comment) => {
        setModalContent(comment);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const headers = Object.keys(data[0]);

    return (
        <div className="overflow-x-auto mt-6">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((entry, index) => ( 
                        <tr key={index}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={`https://img.daisyui.com/images/profile/demo/${index + 2}@94.webp`}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{entry.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{entry.date}<br /></td>
                            <th>
                                <button 
                                    className="btn btn-ghost btn-xs" 
                                    onClick={() => openModal(entry.comment)}
                                >
                                    details
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`btn btn-sm ${currentPage === index + 1 ? 'btn-active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {/* Modal pour afficher le contenu du commentaire */}
            <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
        </div>
    )
}

export default Table;