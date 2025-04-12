import { useLoaderData } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";


const MackBook = () => {
    const macbooks= useLoaderData();
    const macbook = macbooks.filter(macbook=> macbook.category==='Macbook')
    return (
        <div>
            {
                macbook.map(macbook=> <AllProduct key={macbook.product_id} data={macbook}></AllProduct> )
            }
        </div>
    );
};

export default MackBook;