import Cousins from "../Cousins/Cousins";


const Aunt = ({asset}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousins name={'ur'} asset={asset}></Cousins>
                <Cousins name={'mu'}></Cousins>
            </section>
        </div>
    );
};

export default Aunt;