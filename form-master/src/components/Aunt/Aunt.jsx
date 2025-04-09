import { useContext } from "react";
import Cousins from "../Cousins/Cousins";
import { MoneyContext } from "../GrandPaa/GrandPaa";


const Aunt = ({asset}) => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousins name={'ur'} asset={asset}></Cousins>
                <Cousins name={'mu'}></Cousins>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=>{setMoney(money+1000)}}>Add 1000 tk</button>
        </div>
    );
};

export default Aunt;