// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42;
    }
    return 42 - someValue;
}

function distanceFromHqInFeet(someValue) {
    const distance = distanceFromHqInBlocks(someValue);
    return 264 * distance;
}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264;
    }
     return (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500) {
        return 'cannot travel that far';
    }
    else if (distance > 2000) {
        return 25;
    }
    else if (distance > 400) {
        return (distance - 400) * 0.02;
    }
    return 0;
}