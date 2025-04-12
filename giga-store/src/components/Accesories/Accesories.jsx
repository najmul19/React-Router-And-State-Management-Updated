import { useLoaderData } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";


const Accesories = () => {
    const accessories = useLoaderData();
    const accessori = accessories.filter(accessori=> accessori.category==='accesories');

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                accessori.map(accessori=> <AllProduct key={accessori.product_id} data={accessori}></AllProduct> )
            }
        </div>
    );
};

export default Accesories;