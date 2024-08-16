import { useEffect, useState } from "react";
import axios from "axios";
import DirectoryTable from "./DirectoryTable";


const HandshakesTable = () => {
    const [handshakes, setHandshakes] = useState([]);

    useEffect(() => {
        const fetchHandshakes = async () => {
            try {
                const response = await axios.get(
                    "https://api.github.com/repos/evarellapucky/thp_student_dashboard/contents/Data.json"
                );

                const decodedContent = JSON.parse(atob(response.data.content));
                setHandshakes(decodedContent.handshakes);
            } catch (error) {
                console.error("Erreur lors de la récupération des users :", error);
            }
        };

        fetchHandshakes();
    }, []);

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mt-8">Liste des Coup de Mains donnés</h1>
            <DirectoryTable data={handshakes} itemsPerPage={5} />
        </div>
    );
};



export default HandshakesTable ;