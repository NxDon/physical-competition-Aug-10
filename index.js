function findNum(arr) {
    return arr.filter((elem, index, array) => {
        return array.indexOf(elem) === arr.lastIndexOf(elem);
    });
}
