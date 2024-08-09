import { useEffect, useState } from "react";
import axios from "axios";
import Table2 from "./TableComponents";


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
            <h1 className="text-2xl mt-6">Handshakes</h1>
            <Table2 data={handshakes} itemsPerPage={5} />
        </div>
    );
};



export default HandshakesTable ;