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
    
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertStoredBooks = storedBookData.map(id=> parseInt(id));
        // console.log(convertStoredBooks);
        const myReadList = data.filter(book => convertStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    },[])

    return (
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
    );
};

export default ReadList;