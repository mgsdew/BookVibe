

const getStoeredBooks = () => {
    const storedBooks = localStorage.getItem('readList');

    if(storedBooks){
        const storedBookList = JSON.parse(storedBooks);
        return storedBookList;
    }
    else{
        return [];
    }
}

const addToStoredBooks = (id) => {

    const storedBooks = getStoeredBooks();

    if(storedBooks.includes(id)){
        alert('Book already marked as read');
    }
    else{
        storedBooks.push(id);
        localStorage.setItem('readList', JSON.stringify(storedBooks));  
    }
   // console.log(storedBooks);
}

export { addToStoredBooks }