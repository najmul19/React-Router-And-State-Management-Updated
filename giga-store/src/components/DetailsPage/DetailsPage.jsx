import { useLoaderData, useParams } from "react-router-dom";
import { addAddToCart, addToWIshList } from "../../Utils/addToLocalDb";


const DetailsPage = () => {
    const data = useLoaderData();
    const {product_id} = useParams();


    const product = data.find((product) => product.product_id === product_id);
    const {product_title,product_image,category,price,rating,reviews_count,warranty,brand,availability,Specification,description} = product;
    // console.log(data,product,product_id)
    const handleAddTocart=(id)=>{
        addAddToCart(id);
    }
    const handleAddToWishList=(id)=>{
        addToWIshList(id);
    }
    return (
        <div className="flex justify-center items-center">
            <div className=" h-auto md:h-[400px] bg-purple-700 flex flex-col md:flex-row rounded-2xl  max-w-3xl p-5 justify-center items-center">
            <div className="md:w-2/5 flex items-center bg-gray-400 rounded-2xl">
                <img className="max-h-[350px] rounded-xl" src={product_image} alt="" />
            </div>
            <div className="md:w-3/5 md:pl-5 items-center text-center md:text-start justify-center">
                <h2 className="text-2xl font-bold text-black pb-1">{product_title}</h2>
                <p className="text-gray-300  pb-1 font-bold">Price: ${price}</p>
                <p className={`px-3 bg-green-100  pb-1 rounded-3xl text-green-600 font-bold border border-green-600 text-center   ${availability? 'md:max-w-[80px]' : 'md:max-w-[130px]'} `}>{availability?'inStock' :'not avilable'  }</p>
                <p className="text-gray-300 pb-1">{description}</p>
                <h2 className="text-black pb-1 font-bold">Specification:</h2>
                <ol className="text-gray-300 pb-1">
                    {
                        Specification.map((sp,indx)=>  <li>  {indx+1}. {sp}</li> )
                    }
                </ol>
                <p className="pb-1 font-bold text-black">Ratting: {rating}</p>
                <button onClick={()=> handleAddTocart(product_id)} className="mt-1 btn btn-sm mr-2 hover:bg-orange-600 hover:text-gray-400 hover:border-gray-700">Add To Cart</button>
                <button onClick={()=>{handleAddToWishList(product_id)}} className="mt-1 btn btn-sm  hover:bg-rose-600 hover:text-gray-300 hover:border-gray-400">Add To Wish List</button>
            </div>
            
        </div>
        </div>
    );
};

export default DetailsPage;