enum ProductStatus{
    Available = "available",
    OutOfStock = "Out of Stock",
    Discontinued = "Discontinued"
}

let products: any[]=[
    {name: "Laptop", status:ProductStatus.Available,price:1200},
    {name: "Smartphone",status: ProductStatus.OutOfStock,price:700},
    {name: "Tablet", status: ProductStatus.Discontinued,price:300}
];
//ฟังก์ชันสำหรับแสดงข้อมูลสินค้า
function displayProductDetails(product:any[]){
    products.forEach(product =>{
        console.log(
            `Product:${product.name},Status:${product.status},Price:${product.price}`
        );
    });

}
displayProductDetails(products);
