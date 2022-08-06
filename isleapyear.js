function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myLeapYear = 2024;

const leapyear = isLeapYear(myLeapYear);
console.log('Leap Year:', leapyear);
const myLeapYear2 = 2020;
const leapyear2 = isLeapYear(myLeapYear2);
console.log('Leap Year:', leapyear2);