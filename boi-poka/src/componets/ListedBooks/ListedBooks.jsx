import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/addTodb";
import { useState } from "react";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readlist,setReadList] = useState([]);

    const allBooks = useLoaderData();
    useEffect(()=>{
        const storedReadlist = getStoredReadList();
        const storedReadlistInt = storedReadlist.map(id=> parseInt(id));
        console.log(storedReadlist,allBooks,storedReadlistInt)

        const readbookList = allBooks.filter(book=> storedReadlistInt.includes(book.bookId));

        setReadList(readbookList);
    }, [])
    return (
    <div>
      <h2 className="text-3xl my-8">Listed Books</h2>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readlist.length} </h2>
          {
            readlist.map(book=> <Book key={book.bookId} book={book}></Book> )
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
