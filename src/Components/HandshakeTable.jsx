import { useEffect, useState } from "react";
import axios from "axios";
import DirectoryTable from "./DirectoryTable";


const HandshakesTable = () => {
    const [handshakes, setHandshakes] = useState([]);

    useEffect(() => {
        const fetchHandshakes = async () => {
            try {
                const response = await axios.get(
                    "https://raw.githubusercontent.com/evarellapucky/thp_student_dashboard/dev/src/Data/Data.json"
                );
                setHandshakes(response.data.handshakes);
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