import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error)
    return (
        <div>
            <h2>Oppss!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status  === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go back Where You from</p>
                    <Link to='/'><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;