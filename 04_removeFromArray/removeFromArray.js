const removeFromArray = function (array, ...args) {
    
    var output = array.filter((arg) => args.findIndex((element) => arg === element) == -1);
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
