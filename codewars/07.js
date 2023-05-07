function findShort(s){
    const arr = s.split(" ")
    let output = arr[0].length;
    arr.map((i) => {
        return i.length < output ? output = i.length : null
    })
    return output;
}

findShort("Let's travel abroad shall we")