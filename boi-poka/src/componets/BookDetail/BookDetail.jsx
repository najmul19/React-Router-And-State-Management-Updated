import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addTodb";

const BookDetail = () => {
  // const param = useParams();
  // console.log(param)
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);

  console.log(bookId, book, id);
  console.log(data);

  const { bookId: currentBookId, image } = book;

  const handleMarkAsRead=(id) =>{
    /**
     * 1. understand what to store or save: => bookId
     * 2. where to store: database
     * 3. array,list,collection:
     * 4. check: if the book is already in the readlist
     * 5. if not, then add the book to the list
     * 6. if yess: do not add the book
     */

    addToStoredReadList(id);
  }
  return (
    <div className="my-10">
      <h2>Book Detail: {bookId} </h2>
      <img className="w-36" src={image} alt="" />
      <br />

      <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-outline mr-4">Read</button>
      <button className="btn btn-accent">Add to Wish List</button>
    </div>
  );
};

export default BookDetail;
