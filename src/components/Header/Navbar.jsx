import React from 'react';
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa6';

const Navbar = () => {

    const links = () =>{
        return (
            <>
                <li><Link className='rounded-lg px-4 py-2 font-medium transition hover:bg-emerald-50 hover:text-emerald-700' to="/">Home</Link></li>
                <li><Link className='rounded-lg px-4 py-2 font-medium transition hover:bg-emerald-50 hover:text-emerald-700' to="/readList">Read List</Link></li>
                <li><Link className='rounded-lg px-4 py-2 font-medium transition hover:bg-emerald-50 hover:text-emerald-700' to="/about">About</Link></li>
            </>
        );
    }
    return (
       <div className="navbar sticky top-0 z-50 border-b border-base-300/70 bg-base-100/90 px-4 shadow-sm backdrop-blur-md lg:px-8">
            {/* <- For Mobile Views -> */}
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-56 border border-base-300 bg-base-100 p-2 shadow-xl">
                    { links() }
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl font-black tracking-tight text-emerald-700 hover:bg-emerald-50">Book Vibe</Link>
            </div>

           {/* For Desktop Views */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 rounded-xl border border-base-300/70 bg-base-100/70 p-1">
                    { links() }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn border-none bg-emerald-600 text-white shadow-md transition hover:bg-emerald-700" href='https://github.com/mgsdew' target='_blank' rel='noreferrer'>
                    <FaGithub className='text-lg' />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;