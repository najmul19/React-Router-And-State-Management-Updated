import { useLoaderData } from "react-router-dom";
import AllProduct from "../AllProduct/AllProduct";

const Iphones = () => {
  const iphones = useLoaderData();
  const iphone = iphones.filter((iphone) => iphone.category === "Iphone");
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {iphone.map((iphone) => (
          <AllProduct key={iphone.product_id} data={iphone}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default Iphones;
