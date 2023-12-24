const sumAll = function(num1, num2) {
    let sum = 0;

    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    } else {
        let from = Math.min(num1, num2);
        let to = Math.max(num1, num2);
    
        for (let i = from; i <= to; i++) {
            sum += i;
        }
    
        return sum;    
    }

};

// Do not edit below this line
module.exports = sumAll;
