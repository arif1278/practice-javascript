// array vs object


var shopingItems = ['books', 'pens', 'watch', 'shoes', 'shirt'];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robin: 32,
    kazi: 14,
}

var shopingCart = {
    books: '5',
    sunglass: '3',
    keybord: '6',
    mouse: '5',
    pen: '3'
}

const keys = object.keys(shopingCart);
console.log(keys);
const value = object.values(shopingCart);
console.log(values);

for (var i = 0; keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shopingCart[propertyName];
    console.log(propertyName, propertyValue);

}