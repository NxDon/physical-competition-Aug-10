function findNum(arr) {
    return arr.filter((elem) => {
        return arr.indexOf(elem) === arr.lastIndexOf(elem);
    });
}
