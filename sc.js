function sumNumbers(inputs) {
    return inputs.reduce(function(sum,val){
        if(typeof val === 'number' && typeof val != 'NaN'){
            return sum + val;
        }
    },0)
}

console.log(sumNumbers([3, 'string', 4]));