import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {totalPages,rating,bookId, bookName, image, author, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
          <img className="h-[166px] " src={image} alt="Book pic" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4 ">
            {tags.map((tag,indx) => (
              <button 
              key={indx}
              className="btn btn-xs bg-[#22be0a09] text-[#23BE0A]">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title ">
            {
              <h2 className="whitespace-nowrap overflow-hidden text-ellipsis w-60">

                {bookName}
              </h2>
            }
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 border-dashed "></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
            <div></div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
