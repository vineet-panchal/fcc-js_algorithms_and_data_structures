function palindrome(str) {
    str = str.replace(/\W|_/g, "").toLowerCase();
    // get rid of all the _ , and . 
    // make it all lowercase
    // get rid of spaces

    console.log(str);
    // check new string
    
    let check = "";
    // create a new string

    for (let i = str.length - 1; i >= 0; i--) {
    // reverse for loop, i starts with the last index, and counter goes down

        check += str[i];
        // add every letter of string to new string
    }

    console.log(check);
    // checking new string

    if (check == str) {
    // new string = string, palindrome
        return true;
    } 
    // else no palindrome
    return false;
}

palindrome("eye");
// call function with any word