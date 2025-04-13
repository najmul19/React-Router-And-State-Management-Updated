import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAddToCart } from "../../Utils/addToLocalDb";
import Cart from "../Cart/Cart";

const Carts = () => {
  const navigate = useNavigate();
  const [carList, setCartList] = useState([]);

  //   dialogue box
  const [showDialog, setShowDialog] = useState(false);
  const handleClick = () => {
    setShowDialog(true);
  };
  const handleClose = () => {
    setShowDialog(false);
  };

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

  const handleWishListBtn = () => {
    navigate("/dashboard/wishLisht");
  };
  let p = 0;
  for (const i of carList) {
    // console.log(i.price);
    p += i.price;
  }
  console.log(p);

  return (
    <div className="">
      {showDialog && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col justify-center">
            <h2 className="text-xl font-bold text-purple-800">
              Price: ${p}
            </h2>
            <button onClick={handleClose} className="mt-3 btn btn-sm ">
              Close
            </button>
          </div>
        </div>
      )}
      <div className="bg-purple-800 h-48 rounded-sm flex flex-col justify-center items-center space-y-2 text-center">
        <h2 className="text-2xl font-bold">Dashboard: {carList.length}</h2>
        <p className="text-gray-300 max-w-2xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex flex-col md:flex-row gap-3 pt-3 ">
          <button className="btn shadow-md btn-sm bg-white text-purple-700 rounded-3xl w-20">
            Cart
          </button>
          <button
            onClick={handleWishListBtn}
            className="btn shadow-md btn-outline btn-sm  text-white rounded-3xl w-20"
          >
            WishList
          </button>
        </div>
      </div>
      <div className=" py-5 flex flex-col md:flex-row justify-between">
        <div className=" flex items-center">
          <h2 className="text-2xl font-bold">Cart</h2>
        </div>
        <div className="flex justify-end items-center gap-5">
          <h2 className="font-bold">Total Cost: ${p.toFixed(3)}</h2>
          <button className=" w-24 btn btn-sm btn-outline text-purple-700 outline-purple-800 font-bold">
            Sort
          </button>
          <button
            onClick={handleClick}
            className="w-24 btn btn-sm bg-purple-800 text-white font-bold"
          >
            Purchase
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
