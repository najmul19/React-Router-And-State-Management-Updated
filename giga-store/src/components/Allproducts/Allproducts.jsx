import { useLoaderData } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";


const Allproducts = () => {
    const gadgets = useLoaderData();
    // console.log(gadgets);
    return (
        <div className="flex justify-center">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            
            {
                gadgets.map(gadget=> <AllProduct key={gadget.product_id} data={gadget}></AllProduct> )
            }
        </div>
        </div>
    );
};

export default Allproducts;