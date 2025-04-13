import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAddToCart } from "../../Utils/addToLocalDb";
import Cart from "../Cart/Cart";

const Carts = () => {
    const navigate = useNavigate();
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

  const handleWishListBtn=()=>{
    navigate('/dashboard/wishLisht');
  }

    return (
    //     <div>
    //         {carList.map((cart) => (
    //     <Cart data={cart} key={cart.product_id}></Cart>
    //   ))}
    //     </div>
    <div className="">
      <div className="bg-purple-800 h-48 rounded-sm flex flex-col justify-center items-center space-y-2 text-center">
        <h2 className="text-2xl font-bold">Dashboard: {carList.length}</h2>
        <p className="text-gray-300 max-w-2xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex flex-col md:flex-row gap-3 pt-3 ">
          <button   className="btn shadow-md btn-sm bg-white text-purple-700 rounded-3xl w-20">
            Cart
          </button>
          <button onClick={handleWishListBtn}  className="btn shadow-md btn-outline btn-sm  text-white rounded-3xl w-20">
            WishList
          </button>
        </div>
      </div>
      {carList.map((cart) => (
        <Cart data={cart} key={cart.product_id}></Cart>
      ))}
    </div>

);
};

export default Carts;