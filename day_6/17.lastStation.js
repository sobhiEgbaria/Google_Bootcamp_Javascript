const arr =[[0,0],[10,5],[10,1],[10,1]]


let lastStation =0;

for (let i = 0; i < arr.length; i++) {
     
     lastStation += (arr[i][0]-arr[i][1]);
    
}

console.log(lastStation);