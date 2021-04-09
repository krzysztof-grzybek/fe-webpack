function calculateAverage(arrayOfNumbers) {
    if (!arrayOfNumbers || !arrayOfNumbers.length) {
        throw new Error('Invalid argument');
    }
    return arrayOfNumbers.reduce((acc, curr) => acc + curr, 0) / arrayOfNumbers.length;
}

exports.calculateAverage = calculateAverage;