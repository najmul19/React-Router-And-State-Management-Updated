import { useLoaderData, useParams } from "react-router-dom";

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

  return (
    <div className="my-10">
      <h2>Book Detail: {bookId} </h2>
      <img className="w-36" src={image} alt="" />
      <br />

      <button className="btn btn-outline mr-4">Read</button>
      <button className="btn btn-accent">Wish List</button>
    </div>
  );
};

export default BookDetail;
