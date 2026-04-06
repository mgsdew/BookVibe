import React from 'react';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 py-8 min-h-[350px]">
        <div className="hero-content flex-col lg:flex-row py-4">
            <div>
                <h1 className="text-5xl font-bold">Discover Your Next Favorite Book</h1>
                <p className="py-6">
                    Book Vibe helps you explore curated titles, track books you have read, and build a wishlist for
                    what comes next. Rate, organize, and stay inspired with every page you turn.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <img src={bookImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        </div>
    );
};

export default Banner;