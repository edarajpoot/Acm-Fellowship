function negative(num)
{
    let number;
    if(num > 0)
    {
        number = -num;
        return number;
    }
    else
    {
        number = num;
        return number;
    }
}

const num1 = negative(89);
console.log(num1);

const num2 = negative(-57);
console.log(num2);

const num3 = negative(69);
console.log(num3);