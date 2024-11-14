/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import {addToStoredReadList} from '../../Utility/addToDb'
import {addToStoredWishList} from '../../Utility/addToDb'




const BookDetails = () => {
  const {bookId}  = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId)

  const book = data.find(book => book.bookId === id)

  const { bookId: currentBookId, image } = book;
  
  const handlemarkAsread = (id) => {
   addToStoredReadList(id)
  }


  const handleAddToWishList = (id) =>{
        addToStoredWishList(id);
  }
  

  return (
    <div className="mt-4">
      <img className='w-36' src={image} alt="" />
      <button onClick={() => handlemarkAsread(bookId)} className="btn btn-outline mr-4 mt-7 btn-accent">Mark as Read</button>
      <button onClick={()=> handlemarkAsread(id)}  className="btn btn-accent">Add to Wish List</button>
    </div>
  );
};

export default BookDetails;