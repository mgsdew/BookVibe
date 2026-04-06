import { Link } from 'react-router';
import { FaStarHalfStroke, FaStar } from "react-icons/fa6";

const Book = ({ singleBook }) => {

    // const data = use(bookPromise)

    // console.log(data)
    const { bookId, bookName, author, category, image, rating, tags, totalPages, yearOfPublishing } = singleBook;


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
        <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-92 h-[480px] shadow-sm border p-6 shadow flex flex-col">
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
                    tags.map(tag => <button key={tag} className='bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium'>{tag}</button>)
                }
                </div>

                <h2 className="card-title justify-center">
                    <span className="block max-w-full truncate" title={bookName}>
                        {bookName}
                    </span>
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p className="text-center">{author}</p>
                <div className='border-t-2 border-dashed'></div>
                <div className="card-actions justify-center mt-4">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{totalPages} pages</div>
                    <div className="badge badge-outline">
                       {rating} {renderStars(rating)}
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;   