import { useLoaderData, useParams } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";


const Laptops = () => {
    const laptops = useLoaderData();
    // const {product_id} = useParams();
   
    const laptop = laptops.filter(item => item.category === 'laptops');

    // console.log(laptop);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                laptop.map(lap=> <AllProduct key={lap.product_id} data={lap}></AllProduct> )
            }
        </div>
    );
};

export default Laptops;