const array = [0, 0, 42, 5, 77];

const twoLowestSum = (arr) => {

    let min1 = arr[0];
    let min2 = arr[1];
    let tempt;

    if (min2 <= min1){
       tempt = min1;
       min1 = min2;
       min2 = tempt;
    }

    for (let i = 2; i < arr.length; i++) {

        if(arr[i] < min1) min1 =arr[i];

        else {
            if(arr[i] < min2)  min2 =arr[i];
        }   
    }

    let sum = min1+min2;
    return sum;
};


console.log(twoLowestSum(array));