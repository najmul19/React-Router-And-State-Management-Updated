import { useLoaderData } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";


const Phones = () => {
    const phones = useLoaderData();
    const phone = phones.filter(phone=> phone.category==='Phones')
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                phone.map(phone=> <AllProduct key={phone.product_id} data={phone}></AllProduct> )
            }
        </div>
    );
};

export default Phones;