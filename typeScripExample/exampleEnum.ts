enum OrderStatus{
    Pending = "Pending",
    Shipped = "Shipped",
    Cancelled = "Cancelled"
}
//สร้างฟังก์ชัน
function displayOderStatus(status:OrderStatus){
    switch(status){
        case OrderStatus.Pending:
            console.log("Your order is pending.");
            break;
        case OrderStatus.Pending:
            console.log("Your order has been shipped.");
            break;
        case OrderStatus.Pending:
            console.log("Your order has been cancelled.");
            break;
        case OrderStatus.Pending:
            console.log("Unknowm order status.");
            break;
    }
}// end of function

//Testing the function
displayOderStatus(OrderStatus.Shipped);
displayOderStatus(OrderStatus.Cancelled)