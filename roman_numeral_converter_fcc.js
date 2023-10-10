function convertToRoman(num) {

    let numerals = {
    // create an object with all the roman numerals

        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let arr = Object.keys(numerals);
    // create an array of the object numerals

    let toRoman = "I";
    let string = "";
    // variables needed, string to be returned, toRoman to add numerals to string
    // default/initialized with I or 1, for the first number

    while (num > 0) {
    // loop while number is positive

        for (let i = 0; i < arr.length; i++) {
        // loop for the length of object array

            if (num >= numerals[arr[i]]) {
            // check how big the number is on the roman numeral scale

                toRoman = arr[i];
                // numeral is now the highest numeral
        
                break;
                // break the loop
            }
        }
    
        string = string + toRoman;
        // add each toRoman letter to string

        num = num - numerals[toRoman];
        // subtract each time from the number once it is converted to roman.
        // subtract with the object, ex: if M is added, subtract 1000
    }

    return string;
    // return roman numeral converted string
}

convertToRoman(36);
// call the function with any number to convert