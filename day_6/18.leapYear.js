function leapYear (a){

    if(a % 4 ==0 ){

        if(a % 400 == 0 || a % 100 !=0){
            return "This is a leap year";
        }

    }
        
    return "This is not a leap year";
}

console.log(leapYear(2012));