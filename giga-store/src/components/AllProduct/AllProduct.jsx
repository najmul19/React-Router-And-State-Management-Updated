const AllProduct = ({ data }) => {
  console.log(data);
  const { product_title, product_image, price } = data;
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className="px-5 pt-5 bg-white mx-5 mt-5 rounded-xl ">
        <img
          src={product_image}
          alt="product image"
          className="rounded-xl max-h-[250px] max-w-full w-auto object-contain mx-auto"
        />
      </figure>
      <div className="card-body px-5">
        <h2 className="card-title">{product_title}</h2>
        <p>{price}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-purple-600 text-purple-400">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
