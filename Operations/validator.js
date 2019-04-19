module.exports= function valid(currentValue){
    if (currentValue == 0 || isNaN(currentValue)) {
        throw "Can't divide by zero"
    }
};