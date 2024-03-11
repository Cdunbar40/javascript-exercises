const sumAll = function(num1, num2) {
    if((typeof num1 != 'number')||
        (typeof num2 != 'number')||
        (num1 < 0) || (num2 < 0)) {
            return 'ERROR';
        }

    
    var sum = 0;
    for (var i = (num1 < num2 ? num1:num2); i < (num1 < num2 ? num2+1:num1+1); i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
