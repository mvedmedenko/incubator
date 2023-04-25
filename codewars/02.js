function friend(friends){
    const output = friends.filter((i) => {
        return i.length === 4
    })
    
    return output;
}