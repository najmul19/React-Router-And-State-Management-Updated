import Cousins from "../Cousins/Cousins";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousins name={'Rahim'}></Cousins>
                <Cousins name={'Naeem'}></Cousins>
            </section>
        </div>
    );
};

export default Uncle;