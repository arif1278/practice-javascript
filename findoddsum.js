function getSum(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;

}
function getOddNumbersofAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
}

const myNumbers = [12, 23, 45, 12, 67, 23, 67, 89];
const oddNumbers = getOddNumbersofAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getSum(oddNumbers);
console.log('odd number sum:', oddNumbersSum);