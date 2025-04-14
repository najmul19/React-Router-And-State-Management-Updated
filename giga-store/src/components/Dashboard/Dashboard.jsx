import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAddToCart } from "../../Utils/addToLocalDb";
import Cart from "../Cart/Cart";

const Dashboard = () => {
  const [carList, setCartList] = useState([]);
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    const cartStringData = getAddToCart();
    // console.log(cartStringData)
    const cartListed = data.filter((cart) =>
      cartStringData.includes(cart.product_id)
    );
    //  console.log(cartListed)
    setCartList(cartListed);
  }, []);

  const naviagte = useNavigate();
  const handleCartBtn=()=>{
    naviagte('/dashboard/cart');
  }
  const handleWishListBtn=()=>{
    naviagte('/dashboard/wishLisht');
  }
  return (
    <div className="">
      <div className="bg-purple-800 h-auto md:h-48 rounded-sm flex flex-col justify-center items-center space-y-2 text-center">
        <h2 className="text-2xl font-bold">Dashboard: {carList.length}</h2>
        <p className="text-gray-300 max-w-2xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex flex-col md:flex-row gap-3 pt-3 ">
          <button onClick={handleCartBtn}  className="btn shadow-md btn-sm bg-white  text-purple-800 rounded-3xl w-20  hover:bg-gray-900  hover:text-gray-300">
            Cart
          </button>
          <button onClick={handleWishListBtn} className="btn shadow-md btn-outline btn-sm  text-white rounded-3xl w-20 hover:bg-gray-900 hover:text-gray-300">
            WishList
          </button>
        </div>
      </div>


      <div className=" py-5 flex flex-col md:flex-row justify-between">
        <div className=" flex items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
      </div>

      {carList.map((cart) => (
        <Cart data={cart} key={cart.product_id}></Cart>
      ))}
    </div>
  );
};

export default Dashboard;
