import { useParams } from "react-router-dom";


const BookDetail = () => {
    // const param = useParams();
    // console.log(param)
    const {bookId} = useParams();
    console.log(bookId)
    return (
        <div>
            <h2>Book Detail: {bookId} </h2>
        </div>
    );
};

export default BookDetail;