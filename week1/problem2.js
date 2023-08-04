// how to reverse a string?

function reverseString(str)
{
    return str.split("").reverse().join("");
}
const result = reverseString('Hello');
console.log(result);