import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../Utility/addTodb";

const BookDetail = () => {
  // const param = useParams();
  // console.log(param)
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  console.log(bookId, book, id);
  console.log(data);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = book;

  const handleMarkAsRead = (id) => {
    /**
     * 1. understand what to store or save: => bookId
     * 2. where to store: database
     * 3. array,list,collection:
     * 4. check: if the book is already in the readlist
     * 5. if not, then add the book to the list
     * 6. if yess: do not add the book
     */

    addToStoredReadList(id);
  };
  const handleWishList = (id) => {
    addToStoredWishList(id);
  };
  return (
    // <div className="my-10">
    //   <h2>Book Detail: {bookId} </h2>
    //   <img className="w-36" src={image} alt="" />
    //   <br />

      // <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline mr-4">Read</button>
      // <button onClick={()=>handleWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
    // </div>

    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-[#13131310]">
        <img className="p-20" src={image} alt="Book image" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-5xl">{bookName}</h2>

        <p className="py-3 text-gray-300">By: {author} </p>
        <div className="border-t-2 border-gray-500 "></div>
        <p className="py-3 ">{category}</p>
        <div className="border-t-2 border-gray-500 "></div>
        <div className="py-3">
          
          {
            <p className="text-gray-400">
              <span className="font-bold">Review: </span>
              {review}</p>
          }
        </div>
        <div className="border-t-2 border-gray-500 "></div>

        <div className="py-3 mr-2 flex gap-2">
          <span className="font-bold">Tags: </span>
          {tags.map((tag) => (
            <p className="px-3 py-1 rounded-2xl text-[#23BE0A] bg-[#22be0a0e]">
              #{tag}
            </p>
          ))}
        </div>
        <div className="border-t-2 border-gray-500 "></div>
        <div className=" py-3 flex flex-row">
          <div className="w-1/3 space-y-2 text-gray-400">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="w-2/3 space-y-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <br />
        <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline mr-4">Read</button>
      <button onClick={()=>handleWishList(bookId)} className="btn btn-accent">Add to Wish List</button>
      </div>
    </div>
  );
};

export default BookDetail;
