var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var product = [
    { name: 'Laptop', price: 50000, category: 'Electromics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffee Maker', price: 2500, category: 'Appliances' }
];
function filterProductByPrice(product, minPrice) {
    return product.filter(function (product) { return product.price > minPrice; });
}
function discountProduct(product) {
    return product.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var filterProduct = filterProductByPrice(product, 2000);
var discountProducts = discountProduct(filterProduct);
// console.log(filterProduct);
console.log(discountProducts);
