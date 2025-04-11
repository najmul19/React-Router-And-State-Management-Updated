const List = ({ book }) => {
  console.log(book);
  const {
    image,
    bookName,
    author,
    category,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    totalPages,
  } = book;
  return (
    <div className="md:flex gap-5 mb-2 p-5 border rounded-2xl border-gray-600">
      <div className="md:w-1/5 bg-[#13131329] rounded-2xl">
        <img className=" md:max-h-52 md:max-w-[200px] p-10 mx-auto" src={image} alt="" />
      </div>
      <div className="md:w-4/5">
        <h2 className="text-3xl font-bold">{bookName}</h2>
        <p className="py-3 text-gray-300">By: {author} </p>
        <div className="space-y-3 md:space-y-0 py-1 mr-2 md:flex gap-2">
          <span className="font-bold">Tags: </span>
          {tags.map((tag) => (
            <p className="px-3 py-1 rounded-2xl text-[#23BE0A] bg-[#22be0a0e]">
              #{tag}
            </p>
          ))}
           <p>Year of Publishing: {yearOfPublishing}</p>
           
        </div>
        <div className="flex gap-3 text-gray-300">
        <p>Publisher: {publisher}</p>
        <p>Pages: {totalPages}</p>
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

export default List;
