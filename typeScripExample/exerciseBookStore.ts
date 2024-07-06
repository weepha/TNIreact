interface Book{
    title: string;
    genre:'fiction' | 'non-fiction' | 'educational';
    price: number;
}

const book: Book[] = [
    { title: "The Great Gatsby",genre:"fiction", price:320},
    { title: "War and Peace",genre:"fiction", price:250},
    { title: "Economics 101",genre:"educational", price:480},
    { title: "In Cold Blood",genre:"non-fiction", price:300},
    { title: "The Catcher in the Rye",genre:"fiction", price:400},

];

function filterBookByPrice(book:Book[],minPrice:number):Book[]{
    return book.filter(book=>book.genre=='fiction'&&book.price>minPrice);
 }
 function discountBook(book:Book[]):Book[]{
    return book.map(book=>({...book,price:book.price*0.9}));
 }

 let filterBook =filterBookByPrice(book,300);
 let discountBooks =discountBook(filterBook);

 console.log(discountBooks);

