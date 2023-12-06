arr = [1, 4, 1, 1, 1, 1, 3];

const Unique = (arr) => {

    let Unique = arr[0];

    const findUnique = arr.filter((num) => {
        return num !== Unique
    })

    return findUnique;
}

console.log(Unique(arr));