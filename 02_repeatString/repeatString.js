const repeatString = function(string, times) {
    let returnedString = "";

    if (times < 0 ) return "ERROR";

    for (let i = 0; i < times; i++) {
        returnedString += string;
    }    
     
    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
