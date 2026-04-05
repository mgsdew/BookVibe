import { Link } from 'react-router';
import { FaStarHalfStroke } from "react-icons/fa6";

const Book = ({ singleBook }) => {

    // const data = use(bookPromise)

    // console.log(data)
    const { bookId, bookName, author, category, review, image, rating, tags, yearOfPublishing } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
            <div className='pd-l-4'>
                <figure className='p-4 bg-gray-100 max-auto'>
                    <img className='h-[166px]'
                    src={image}
                    alt={bookName} />
                </figure>
            </div>
            <div className="card-body">
                <div className='flex justify-center gap-10'>
                {
                    tags.map(tag => <button key={tag}>{tag}</button>)
                }
                </div>

                <h2 className="card-title justify-center">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p className="text-center">{author}</p>
                <div className='border-t-2 border-dashed'></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStarHalfStroke /></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;   