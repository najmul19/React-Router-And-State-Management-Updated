import Brothers from "../Brothers/Brothers";
import MySelf from "../MySelf/MySelf";
import Sis from "../Sis/Sis";


const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf></MySelf>
                <Brothers></Brothers>
                <Sis></Sis>
            </section>
        </div>
    );
};

export default Dad;