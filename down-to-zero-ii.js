function getDestinations(n) {
    const res = [];

    const limit = Math.sqrt(n);

    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) {
            res.push(Math.max(i, n / i));
        }
    }

    res.push(n - 1);
    return res;
}

/*
 * Complete the downToZero function below.
 */
function downToZero(n) {
    const stack = [n];
    const distances = {[n]: 0};
    while (stack.length > 0) {
        const n = stack.shift();
        const currentDistance = distances[n];
        if (n === 0) {
            return currentDistance;
        }

        const destinations = getDestinations(n);

        for (const d of destinations) {
            if (distances[d]) {
                continue;
            }

            distances[d] = currentDistance + 1;
            stack.push(d);
        }
    }

    return NaN;
}

console.log(downToZero(6));
