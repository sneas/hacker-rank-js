function arrayManipulation(n, queries) {
    const vector = [];
    queries.forEach(query => {
        vector.push([query[0], query[2]], [query[1] + 1, -query[2]])
    });

    return vector.sort((a, b) => {
        const itemPosition = a[0] - b[0];
        if (itemPosition === 0) {
            return a[1] - b[1];
        }

        return itemPosition;
    }).reduce(([max, count], item) => {
        const newCount = count + item[1];
        return [newCount > max ? newCount : max, newCount]
    }, [0, 0])[0];
}
