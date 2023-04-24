function flattenAndSort(array) {
    const newArray = []
    for(const valuesArray of array) {
        const test = newArray.push(...valuesArray)
    }
    const output = newArray.sort((a, b) => {
        return a - b;
    })

    return output;
}