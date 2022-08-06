function factorial(number) {
    let num = 1;
    result = 1;
    while (num <= 7) {
        result = result * num;
        num++;
    }
    return result;
}

const myfactoril = 8;
const myFactorialNumber = factorial(myfactoril);
console.log('factorial:', myFactorialNumber);