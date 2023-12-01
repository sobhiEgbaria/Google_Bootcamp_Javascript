let arr = [1, 0, 0, 1,0];

const binary = (array) =>{

    
    let decimal=0;
    for (let i = 0; i < array.length; i++) {

        if (array[arr.length-1-i]===1){
            
            decimal += 2**i;
        }  
    }

    return decimal;
}

console.log(binary(arr))

