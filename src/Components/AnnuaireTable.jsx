import { useEffect, useState } from "react";
import axios from "axios";
import Table2 from "./TableComponents";

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    "https://api.github.com/repos/evarellapucky/thp_student_dashboard/contents/Data.json"
                );

                const decodedContent = JSON.parse(atob(response.data.content));
                setUsers(decodedContent.users);
            } catch (error) {
                console.error("Erreur lors de la récupération des users :", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <Table2 data={users} itemsPerPage={5} />
        </div>
    );
};



export { UsersTable };