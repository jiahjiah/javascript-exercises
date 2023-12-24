const removeFromArray = function(array, ...tobeRemoved) {
    return array.filter(val => !tobeRemoved.includes(val));
}

// Do not edit below this line
module.exports = removeFromArray;
