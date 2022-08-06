function sumOfNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

const myNumber = 10;
const mySumNumber = sumOfNumber(myNumber);
console.log(mySumNumber);