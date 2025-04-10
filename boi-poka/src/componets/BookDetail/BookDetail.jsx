import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {
    // const param = useParams();
    // console.log(param)
    const {bookId} = useParams();
    const data = useLoaderData();
    
    const id = parseInt(bookId)
    const book = data.find(book=> book.bookId === id)
    
    console.log(bookId,book,id)
    console.log(data)

    return (
        <div>
            <h2>Book Detail: {bookId} </h2>
        </div>
    );
};

export default BookDetail;