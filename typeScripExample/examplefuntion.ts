type Product ={
    name : string;
    price : number;
    category :string;
};

 let product : Product[] =[
    {name: 'Laptop',price:50000,category:'Electromics'},
    {name: 'Shirt',price:1200,category:'Apparel'},
    {name: 'Coffee Maker',price:2500,category:'Appliances'}
 ];

 function filterProductByPrice(product:Product[],minPrice:number):Product[]{
    return product.filter(product=>product.price>minPrice);
 }

 function discountProduct(product:Product[]):Product[]{
    return product.map(product=>({...product,price:product.price*0.9}));
 }
 let filterProduct = filterProductByPrice(product,2000);
 let discountProducts = discountProduct(filterProduct);

// console.log(filterProduct);
console.log(discountProducts);