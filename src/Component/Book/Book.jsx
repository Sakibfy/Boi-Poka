import { Link } from "react-router-dom";


const Book = ({ book }) => {
  
   const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;
  return (
    <Link to={`/books/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-xl p-6  border-2 border-gray-600 ">
  <figure className="bg-gray-500 p-y-8 rounded-2xl">
        <img
          className='h-[166px] '
      src={image} />
  </figure>
      <div className="card-body">
      <div className='flex justify-center gap-32'>
  {
    tags.map((tag, index) => <button key={index}
     className="btn btn-xs bg-green-200 text-green-500">{tag}</button>)
   }
</div>
    <h2 className="card-title">
      {bookName}
      </h2>
        <p>By: {author}</p>
        <div className="border-t-2 border-dashed"></div>
        
    <div className="card-actions justify-between">
    <div className="badge badge-outline">{category}</div>
     <div>{rating}</div>
  <div>{totalPages}</div>
  <div className="rating">
<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
</div>
    </div>
  </div>
      </div>
    </Link>
  );
};

export default Book;