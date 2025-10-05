import React from 'react';
import Book from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full mx-auto'>
            <div className='space-y-5'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, harum.</h1>
                <button className='btn btn-primary'>Submit</button>
            </div>
            <div><img src={Book} alt=""/></div>
        </div>
    );
};

export default Banner;