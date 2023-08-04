function removeChar(str)
{
    const lengthOfStr = str.length;
    return str.substr(1 , lengthOfStr-2);
}

const string1 = removeChar('hello');
console.log(string1);

const string2 = removeChar('Pakistan');
console.log(string2);

const string3 = removeChar('Turkey');
console.log(string3);