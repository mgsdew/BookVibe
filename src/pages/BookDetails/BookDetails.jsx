import React from 'react';
import { useParams, useLoaderData } from 'react-router';
import { addToReadList, addToWishList } from '../../utility/addToDB';
import { Toaster, toast } from 'react-hot-toast';
import { FaStarHalfStroke, FaStar } from "react-icons/fa6";

const BookDetails = () => {
    const {id} = useParams();
    const book = useLoaderData();

    // console.log(book);

    if (!book) {
        toast.error('Book not found for ID: ' + id);
        return <div className='text-center py-10'>Book not found for ID: {id}</div>;
    }

    const { bookId, bookName, author,  review, image, totalPages, 
            rating, category, tags, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = (bookId) => {
        // Implementation for marking book as read
        addToReadList(bookId);
    };

    const handleWishList = (bookId) => {
        // Implementation for adding book to wishlist
        addToWishList(bookId);
    };

    const renderTags = () => {
        return tags.map((tag) => (
            <span key={tag} className='bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium'>
                {tag}
            </span>
        ));
    };

    const renderStars = (ratingValue) => {
        const fullStars = Math.floor(ratingValue);
        const hasHalfStar = ratingValue % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <span className='flex items-center gap-1'>
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className='text-yellow-500' />
                ))}
                {hasHalfStar && <FaStarHalfStroke key='half' className='text-yellow-500' />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaStar key={`empty-${i}`} className='text-gray-300' />
                ))}
            </span>
        );
    };

    return (
        <div className='max-w-8xl mx-auto px-0 py-4'>
            <Toaster />
            <div className='bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='md:w-1/3 lg:w-1/4'>
                        <img className='w-full max-w-[220px] mx-auto md:mx-0 rounded-md object-cover' src={image} alt={bookName} />
                         <p className='mt-2 text-base text-gray-900'>
                            <span className='font-bold'>Category:</span> {category}
                            <span className='mx-2 text-gray-400'>|</span>
                            <span className='font-bold'>{totalPages} </span> Pages
                        </p>
                    </div>

                    <div className='md:w-2/3 lg:w-3/4'>
                        <div className='flex items-start justify-between gap-4'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <h1 className='text-2xl md:text-3xl font-bold leading-tight text-gray-900'>{bookName}</h1>
                                    <div className="badge badge-secondary -mt-2"> {yearOfPublishing}</div>
                                </div>
                            </div>
                            <div className='mt-3 flex flex-wrap gap-2'>
                                {renderTags()}
                            </div>
                        </div>

                        <p className='mt-4 text-base text-gray-900'>
                            <span className='font-bold'>Author:</span> {author}
                            <span className='mx-2 text-gray-400'>|</span>
                            <span className='font-bold'>Published By:</span> {publisher}
                        </p>

                        <p className='mt-2 text-base text-gray-900 flex items-center gap-2'>
                            <span className='font-bold'>Rating:</span> <span>{rating}</span> 
                            {renderStars(rating)}
                        </p>

                        <div className='my-4 border-t border-gray-300'></div>

                        <p className='text-gray-900 leading-relaxed'>{review}</p>

                        <div className='mt-6 flex flex-wrap gap-3'>
                            <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-accent'>Mark as Read</button>
                            <button onClick={() => handleWishList(bookId)} className='btn btn-info'>Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;