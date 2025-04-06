import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>Our Users: {users.length} </h2>
            <p>hello and welcome users!!</p>
        </div>
    );
};

export default Users;