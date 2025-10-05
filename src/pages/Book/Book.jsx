import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook, bookPromise}) => {
    // const books = use(bookPromise);
    // console.log(books);
    // console.log(singleBook);
    const {bookId, bookName, author, image, rating, category, review, tags} = singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border">
                <figure className='p-3 bg-gray-100 w-4/5 mx-auto mt-4'>
                    <img
                    className='h-[166px]'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-7'>
                        {
                            tags.map((tag, index) => <button key={index}>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{author}</div>
                    </h2>
                    <p className='line-clamp-3'>{review}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;