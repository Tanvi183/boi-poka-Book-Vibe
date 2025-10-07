import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const data = useLoaderData();
    // console.log(data);
    const [readList, setReadList] = useState([]);
    // Data Sort
    const [sort, setSort] = useState("");
    
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertStoredBooks = storedBookData.map(id=> parseInt(id));
        // console.log(convertStoredBooks);
        const myReadList = data.filter(book => convertStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    },[])
    

    const handleSort = (type) => {
        setSort(type);
        // Sorted by pages
        if (type === "Pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            // console.log(sortedByPage);
        }
        // Sorted by ratings
        if(type === "Ratings") {
            const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedByRating);
        }
    }

    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort by : {sort ? sort : ""}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li>
                        <a onClick={()=>handleSort("Pages")}>Pages</a>
                    </li>
                    <li>
                        <a onClick={()=>handleSort("Ratings")}>Ratings</a>
                    </li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel className='max-w-7xl mx-auto'>
                    <h2 className='text-center text-2xl my-7 font-bold'>Book I Read {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                        {
                            readList.map(b => <Book key={b.bookId}  singleBook={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;