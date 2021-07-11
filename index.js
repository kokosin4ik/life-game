const arr = [3, 1, true, 2, 3, 1, 3, 2, 4, 3, '2', '2', '1', true, false];

// 1. using Set
const unique1 = (arr) => {
    return [...new Set(arr)];
};

// 2. classic
const filterFn = (item, index, arr) => {
    return arr.indexOf(item) === index;
};
const unique2 = (arr) => {
    return arr.filter(filterFn);
};

console.log('Using Set: ', unique1(arr));
console.log('Using simple filter fn: ', unique2(arr));


// 3. with prototype
Array.prototype.unique = function () {
    let arr = [];
    this.forEach((item) => {
        if (!arr.includes(item)) {
            arr.push(item);
        }
    });

    return arr;
};

console.log('Using new prototype fn: ', arr.unique());
console.log('Same results: ', unique1(arr).length === unique2(arr).length && unique1(arr).length === arr.unique().length);