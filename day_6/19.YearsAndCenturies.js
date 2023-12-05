const YearsAndCenturies = (int) => {

    let Centuries = Math.floor(int / 100) + 1;
    return Centuries;
}


console.log(YearsAndCenturies(1705))
console.log(YearsAndCenturies(1900))
console.log(YearsAndCenturies(1601))
console.log(YearsAndCenturies(2000))

