const camelCase = (string) => {

    let array = string.split("-");
     let camelCaseString = "";


  for (let i = 0; i < array.length; i++) {


        array[i] = array[i][0].toUpperCase() + array[i].slice(1);

        camelCaseString += array[i];
    }

    return camelCaseString
}

console.log(camelCase("sobhi-egbaria"));