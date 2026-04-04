import React from 'react';
import bookImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        // <div className='flex justify-around items-center p-16 w-full'>
        //    <div>
        //     <h1>Welcome to Book Vibe</h1>
        //     <button className="btn btn-primary">Get Started</button>
        //    </div>     
        //    <div>
        //     <img className='w-3/12' src={bookImage} alt="Books" />
        //    </div>
        // </div>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <img src={bookImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        </div>
    );
};

export default Banner;