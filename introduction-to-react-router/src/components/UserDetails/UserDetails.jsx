import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website}=user;
    return (
        <div>
            <h3>Details about user: {name} </h3>
            <p>Visit Us: {website} </p>
        </div>
    );
};

export default UserDetails;