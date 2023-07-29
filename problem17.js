function noSpace(str)
{
    const arr = str.split(" ");
    let newArr = [];

    for (let i = 0 ; i < arr.length ; i++)
    {
        const trimmedString = arr[i].trim();
        newArr.push(trimmedString);
    }
    const finalString = newArr.join("");
    return finalString;
}

const string1 = noSpace('Hey Johnny');
console.log(string1);

const string2 = noSpace('I love you');
console.log(string2);
