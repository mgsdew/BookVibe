import React, { use } from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";

const Book = ({ singleBook }) => {

    // const data = use(bookPromise)

    // console.log(data)
    const { bookName, author, category, review, image, rating } = singleBook;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
            <figure className='p-4 bg-gray-100 w-2/3 max-auto'>
                <img className='h-[166px]'
                src={image}
                alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                <div className="badge badge-secondary">{bookName}</div>
                </h2>
                {/* <p>{review}</p> */}
                <div className="card-actions justify-end">
                <h3 className='text-lg font-semibold'>{author}</h3>
                <div className="badge badge-outline">{category}</div>
                <div className="badge badge-outline">{rating} <FaStarHalfStroke /></div>
                </div>
            </div>
            </div>
    );
};

export default Book;   