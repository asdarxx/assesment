const countUniqueValues = function(values){
    
let count = 0;
let x = 0;
    for (let j=0; j < values.length; j++){
        for (let i=0; i<values.length; i++){
            if (values[i] < values[j]){
                 x = values[j];
                values[j] = values[i];
                values[i] = x;
            }
        }
    }

    // console.log(values)
    for (let i=0; i < values.length; i++){
        if (values[i] !== values[i+1]) {
            count++;
        }
    }
return count;
}

let hasil = countUniqueValues([1, 2, 3, 4, 4, 5, 4, 7, 7, 12, 12, 13])
console.log(hasil*4);