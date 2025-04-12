import { useLoaderData } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";

const Iphones = () => {
    const iphones = useLoaderData();
    const iphone = iphones.filter(iphone=> iphone.category==='Iphone');
    return (
        <div>
            {
                iphone.map(iphone=> <AllProduct key={iphone.product_id} data={iphone}></AllProduct> )
            }
        </div>
    );
};

export default Iphones;