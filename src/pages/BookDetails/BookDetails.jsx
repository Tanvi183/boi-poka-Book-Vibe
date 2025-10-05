import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id);
    // console.log(id);
    const allBooks = useLoaderData();
    const book = allBooks.find(book => book.bookId === bookId)
    // console.log(book);
    const {bookName, image} = book;

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} />
            <h1 className='text-center'>{bookName}</h1>
            <button className='btn btn-accent m-2'>Read</button>
            <button className='btn btn-info m-2'>Wishlist</button>
        </div>
    );
};

export default BookDetails;