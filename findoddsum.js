function getSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;

}

const myNumbers = [12, 23, 45, 12, 67, 23, 67, 89];
getSum(myNumbers);