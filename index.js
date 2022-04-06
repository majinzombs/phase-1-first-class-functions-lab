// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(array) {
    return (array.slice(0,2));
}

function returnLastTwoDrivers (array) {
    return (array.slice(-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function actualFareMultiplier(multiplier) {
        return (integer * multiplier)
    }
}

function fareDoubler (number) {
    return (number * 2);
}

function fareTripler(number) {
    return number * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
}