import { useContext } from "react";
import { MoneyContext } from "../GrandPaa/GrandPaa";


const Brothers = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>
                Brothers
            </h2>
            <p>Grandpa: {money} </p>
        </div>
    );
};

export default Brothers;