import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/addTodb";
import { useState } from "react";
import Book from "../Book/Book";
import List from "../List/List";

const ListedBooks = () => {
  const [readlist, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadlist = getStoredReadList();
    const storedReadlistInt = storedReadlist.map((id) => parseInt(id));
    console.log(storedReadlist, allBooks, storedReadlistInt);

    const readbookList = allBooks.filter((book) =>
      storedReadlistInt.includes(book.bookId)
    );

    setReadList(readbookList);
  }, []);
  const handleSort = (sortType) => {
    setSort(sortType);
    // const sortedReadList = [...readlist].sort()
    if (sortType === "No of pages") {
      const sortedReadList = [...readlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }
    if (sortType === "Rattings") {
      const sortedReadList = [...readlist].sort((a, b) => a.rating - b.rating);

      setReadList(sortedReadList);
    }
  };
  return (
    <div>
      <h2 className="text-3xl my-8">Listed Books</h2>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort By ${sort}` : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("Rattings")}>
            <a>Rattings</a>
          </li>
          <li onClick={() => handleSort("No of pages")}>
            <a>No of pages</a>
          </li>
        </ul>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I Read: {readlist.length} </h2>
          {/* {readlist.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))} */}

          {readlist.map((book) => (
            <List key={book.bookId} book={book}></List>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
