import React, { useEffect, useMemo, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadList, getWishList } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [books, setBooks] = useState([]);
    const [sortBy, setSortBy] = useState('rating');

    // Fetching all books data 
    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    // Derive lists from the loaded books and IDs in local storage.
    const readList = useMemo(() => {
        const storedBookData = getReadList();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        return books.filter(book => convertedStoredBooks.includes(book.bookId));
    }, [books]);

    const wishList = useMemo(() => {
        const storedBookData = getWishList();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        return books.filter(book => convertedStoredBooks.includes(book.bookId));
    }, [books]);

    const sortedReadList = useMemo(() => {
        const sortedBooks = [...readList];

        if (sortBy === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }

        return sortedBooks;
    }, [readList, sortBy]);

    const sortedWishList = useMemo(() => {
        const sortedBooks = [...wishList];

        if (sortBy === 'rating') {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'pages') {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }

        return sortedBooks;
    }, [wishList, sortBy]);


    return (
        <div className='my-8'>
            <Tabs>
                <TabList className='flex flex-wrap gap-2 border-b-2 border-base-300 pb-3'>
                    <Tab className='cursor-pointer rounded-md border border-base-300 px-5 py-2 text-sm font-semibold text-gray-600' selectedClassName='bg-emerald-600 text-white border-emerald-600'>Read Book List</Tab>
                    <Tab className='cursor-pointer rounded-md border border-base-300 px-5 py-2 text-sm font-semibold text-gray-600' selectedClassName='bg-amber-500 text-white border-amber-500'>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='my-6 rounded-lg border-l-4 border-emerald-600 bg-emerald-50 px-4 py-3'>
                        <h2 className='text-xl font-bold text-emerald-800'>Books I Already Read: {readList.length}</h2>
                    </div>
                    <div className='mb-6 flex justify-end'>
                        <div className='dropdown dropdown-end'>
                            <div tabIndex={0} role='button' className='btn btn-outline btn-sm'>
                                Sort By: {sortBy === 'rating' ? 'Ratings' : 'Pages'}
                            </div>
                            <ul tabIndex={0} className='menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-base-100 p-2 shadow'>
                                <li><button type='button' onClick={() => setSortBy('rating')}>Ratings</button></li>
                                <li><button type='button' onClick={() => setSortBy('pages')}>Pages</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-6 justify-center lg:justify-start'>
                        {
                            sortedReadList.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='my-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3'>
                        <h2 className='text-xl font-bold text-amber-800'>Books I Added for Wish List: {wishList.length} </h2>
                    </div>
                    <div className='mb-6 flex justify-end'>
                        <div className='dropdown dropdown-end'>
                            <div tabIndex={0} role='button' className='btn btn-outline btn-sm'>
                                Sort By: {sortBy === 'rating' ? 'Ratings' : 'Pages'}
                            </div>
                            <ul tabIndex={0} className='menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-base-100 p-2 shadow'>
                                <li><button type='button' onClick={() => setSortBy('rating')}>Ratings</button></li>
                                <li><button type='button' onClick={() => setSortBy('pages')}>Pages</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-6 justify-center lg:justify-start'>
                        {
                            sortedWishList.map(book => <Book key={book.bookId} singleBook={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;