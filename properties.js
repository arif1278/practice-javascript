var shopingCart = {
    books: '5',
    sunglass: '3',
    keybord: '6',
    mouse: '5',
    pen: '3'
}
// console.log(shopingCart);
// when you know the specific property name ,use dot notation to get the property value
var penCount = shopingCart.pen;
// alternative System
// When you know that the specific property name ,use dot notation to get the property value
var penCount2 = shopingCart['pen'];

var propertyName = 'books';
var propertyValue = shopingCart[propertyName]
console.log(propertyName, propertyValue);

var properties = object.keys(shopingCart);
var propertyValues = object.values(shopingCart);
// console.log(properties);
// console.log(propertyValues);
console.log(shopingCart);
// set property values
shopingCart.mouse = 15;
console.log(shopingCart);
shopingCart['mouse'] = 29;
console.log(shopingCart);
shopingCart[propertyName] = 89;
console.log(shopingCart)
