function telephoneCheck(str) {
    var regexEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    // regex expression

    return regexEx.test(str);
    // return string with regex
}

telephoneCheck("555-555-5555");