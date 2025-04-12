import { useLoaderData } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";


const SmartWatches = () => {
    const smartwatchs = useLoaderData();
    const smartwatch = smartwatchs.filter(smartwatch=> smartwatch.category==='smartwatch' );

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                smartwatch.map(smartwatch=> <AllProduct key={smartwatch.product_id} data={smartwatch}></AllProduct> )
            }
        </div>
        </div>
    );
};

export default SmartWatches;