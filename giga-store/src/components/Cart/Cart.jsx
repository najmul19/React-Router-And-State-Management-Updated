import React from 'react';

const Cart = ({data}) => {
    
    const {description,price,product_image,product_title,brand,Specification,category,rating} = data;

    return (
        <div className="md:flex gap-5 md:gap-12 lg:gap-5 mb-2 p-5 border rounded-2xl border-gray-600">
        <div className="md:w-1/5 bg-[#13131329] rounded-2xl flex justify-center items-center">
          <img className=" rounded-3xl md:max-h-40 lg:max-h-56 md:max-w-[150px] lg:max-w-[200px] p-4 md:p-0 lg:p-4 mx-auto" src={product_image} alt="" />
        </div>
        <div className="md:w-4/5">
          <h2 className="text-2xl font-bold">{product_title}</h2>
          <h2 className="text-lg text-gray-300 pt-2">{description}</h2>
          <p className="pt text-gray-300">Brand: {brand} </p>
          <div className="space-y-3 md:space-y-0 py-1 mr-2 md:flex gap-2">
            <span className="font-bold">Specification: </span>
            {Specification.map((specification,indx) => (
              <p key={indx} className="px-3 py-1 rounded-2xl text-[#23BE0A] bg-[#22be0a0e]">
                {specification}
              </p>
            ))}
            
             
          </div>
          <div className="flex gap-3 text-gray-300">
          <p className='text-rose-500'><span className='font-bold '>Price:</span> ${price}</p>
          <p><span className='font-bold'>Rating:</span> {rating}</p>
          </div>
          <div className="border-t-2 border-gray-600 mt-2"></div>
          <div className="flex gap-2 mt-2">
              <p className="bg-blue-300 text-blue-950 font-bold rounded-2xl px-3">Category: {category}</p>
              <p className="rounded-2xl px-3 font-bold bg-orange-100 text-orange-500">Rating: {rating}</p>
              <button className="rounded-2xl px-3 font-bold bg-green-600">View Ditals</button>
          </div>
        </div>
      </div>
    );
};

export default Cart;