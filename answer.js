const countUniqueValues = function(values){
    
let count = 0;
    for (let i=0; i < values.length; i++){
        if (values[i] !== values[i+1]) {
            count++;
        }
    }
console.log(count);
}

countUniqueValues([]);