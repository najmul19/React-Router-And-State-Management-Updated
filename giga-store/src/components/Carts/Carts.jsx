import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAddToCart } from "../../Utils/addToLocalDb";
import Cart from "../Cart/Cart";
import successImg from "../../assets/images/success.png";

const Carts = () => {
  const navigate = useNavigate();
  const [carList, setCartList] = useState([]);
  let [prc, setPrc] = useState(0);

  //   dialogue box
  const [showDialog, setShowDialog] = useState(false);
  const handleClick = () => {
    setShowDialog(true);
  };
  const handleClose = () => {
    localStorage.clear();
    setCartList([]);
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
  //   let p = 0;
  //   for (const i of carList) {
  //     // console.log(i.price);
  //     prc += i.price;

  //   }
  //   useEffect(()=>{
  //     setPrc(prc);
  //   },[])
  //   console.log(prc);

  useEffect(() => {
    const total = carList.reduce((acc, item) => acc + item.price, 0);
    setPrc(total);
  }, [carList]);

  return (
    <div className="">
      {showDialog && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-5 rounded-xl shadow-xl flex flex-col justify-center text-center items-center w-1/5 h-1/3">
            <img className="w-10 pb-3" src={successImg} alt="" />
            <h2 className="text-xl pb-3 font-bold text-purple-800">
              Payment Successfully
            </h2>
            <p className="text-gray-700">Thanks for purchasing.</p>
            <p className="text-gray-700">Total: ${prc}</p>
            <button
              onClick={handleClose}
              className="mt-3  w-full text-red-600 text-[15px] btn btn-sm bg-gray-200 border-none rounded-3xl shadow-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="bg-purple-800 h-auto md:h-48 rounded-sm flex flex-col justify-center items-center space-y-2 text-center">
        <h2 className="text-2xl font-bold">Dashboard: {carList.length}</h2>
        <p className="text-gray-300 max-w-2xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex flex-col md:flex-row gap-3 pt-3 ">
          <button className="btn shadow-md btn-sm bg-white text-purple-700 rounded-3xl w-20  hover:bg-gray-900 hover:text-gray-300">
            Cart
          </button>
          <button
            onClick={handleWishListBtn}
            className="btn shadow-md btn-outline btn-sm  text-white rounded-3xl w-20  hover:bg-gray-900 hover:text-gray-300"
          >
            WishList
          </button>
        </div>
      </div>
      <div className=" py-5 flex flex-col md:flex-row justify-between ">
        <div className=" flex items-center justify-center md:justify-start">
          <h2 className="text-2xl font-bold">Cart</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-5">
          <h2 className="font-bold mt-2 md:mt-0">Total Cost: ${prc.toFixed(3)}</h2>
          <button className=" w-24 btn btn-sm btn-outline text-purple-700 outline-purple-800 font-bold  hover:bg-gray-900 hover:text-gray-300">
            Sort
          </button>
          <button
            onClick={handleClick}
            className="w-24 btn btn-sm bg-purple-800 text-white font-bold  hover:bg-gray-900 hover:text-gray-300"
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
