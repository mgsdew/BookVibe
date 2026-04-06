import { toast } from 'react-hot-toast';

const getReadList = () => {
    const storedBooks = localStorage.getItem('readList');

    if(storedBooks){
        const storedBookList = JSON.parse(storedBooks);
        return storedBookList;
    }
    else{
        return [];
    }
}

const addToReadList = (id) => {

    const storedBooks = getReadList();

    if(storedBooks.includes(id)){
        toast.error('Book already marked as read');
    }
    else{
        storedBooks.push(id);
        localStorage.setItem('readList', JSON.stringify(storedBooks));  
        toast.success('Book marked as read');
    }
   // console.log(storedBooks);
}

const getWishList = () => {
    const storedBooks = localStorage.getItem('wishList');

    if(storedBooks){
        const storedBookList = JSON.parse(storedBooks);
        return storedBookList;
    }
    else{
        return [];
    }
}

const addToWishList = (id) => {

    const storedBooks = getWishList();

    if(storedBooks.includes(id)){
        toast.error('Book already in wishlist');
    }
    else{
        storedBooks.push(id);
        localStorage.setItem('wishList', JSON.stringify(storedBooks));
        toast.success('Book added to wishlist');
    }
}

export { getReadList, addToReadList, getWishList, addToWishList }