import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {getStoredReadList} from '../../Utility/addToDb'
import Book from '../Book/Book';


const ListedBooks = () => {
  const allBooks = useLoaderData();

const [readlist, setReadList] = useState([])
const [sort, setSort] = useState('')

  
  useEffect(() => {
   const storedReadList = getStoredReadList()
    const sotoredReadInt = storedReadList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book => sotoredReadInt.includes(book.bookId))
    
    setReadList(readBookList)
}, [])

  
  const haldleSort = sortTybe => {
    setSort(sortTybe)
    
    // 
    if (sortTybe === 'No of pages') {
      const sortedReadKist = [...readlist].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortedReadKist)
    }
    if (sortTybe === 'Ratings') {
      const sortedReadKist = [...readlist].sort((a, b) => a.rating - b.rating);
      setReadList(sortedReadKist)
    }
}  
  
  
  return (
    <div>
      <h3 className="text-3xl my-8">Listed books</h3>
      <div className="dropdown justify-center flex">
        <div tabIndex={0} role="button" className="btn m-1 bg-[#23be0a]">
        {
           sort ? `Sort by ${sort}` : "Sort by"
        }</div>
       <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <li onClick={()=> haldleSort('Ratings')}><a>Ratings</a></li>
      <li onClick={() => haldleSort('No of pages')}><a>No of pages</a></li>
     </ul>
      </div>
       <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>
   <TabPanel>
          
   {
   readlist.map(book => <Book key={book.bookId} book={book}></Book>)
 }
    </TabPanel>
    <TabPanel>
      <h2></h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBooks;