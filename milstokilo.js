function milesToKilometer(mile) {
    const kilometer = mile * 1.609;
    return kilometer;
}

const narayongonjkilometer = 90;
const narayongmile = milesToKilometer(narayongonjkilometer);
console.log('Narayongonj Kilometer:', narayongmile);