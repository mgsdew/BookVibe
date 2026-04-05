import React from 'react';
import { useParams, useLoaderData } from 'react-router';
import { addToStoredBooks } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();
    const book = useLoaderData();

    // console.log(book);

    if (!book) {
        return <h1>Book not found for ID: {id}</h1>;
    }

    const { bookId, bookName, author, category, review, image, rating, tags, yearOfPublishing } = book;

    const handleMarkAsRead = (bookId) => {
        // Implementation for marking book as read

        addToStoredBooks(bookId);
    };

    return (
        
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image} />
            <h5>{bookName}</h5>

            <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-accent m2'>Mark as Read</button>
            <button className='btn btn-info m2'>Add to Wishlist</button> 
        </div>
    );
};

export default BookDetails;