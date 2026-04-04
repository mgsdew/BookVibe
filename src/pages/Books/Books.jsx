import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
import { data } from 'react-router';


const Books = () => {
    // fetch Book data from local json file
    const booksData = 'booksData.json';

    // STEP 1 (Legacy Approach): Using useState and useEffect to fetch data and store it in state

    // const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch(booksData)
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, []);

    // STEP 2 (Modern Approach): Using Suspense and use() to fetch data without managing state

    const bookPromise = fetch(booksData)
        .then(res => res.json())
        .catch(error => console.error('Error fetching book data:', error));

    return (
        <div>
            {/* <h1 className='text-3sl text-center p6'>Books</h1> */}
             {/* Part of Step 2: Wrapping the Book component with Suspense to handle loading state while fetching data */}
            <Suspense fallback={<span>Loading...</span>}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
             {
                bookPromise.then(data => data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>))
             }
            </div>

             </Suspense>
        </div>
    );
};

export default Books;