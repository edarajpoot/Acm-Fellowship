/* Create a function that takes an integer as argument 
and returns 'Even' for even number and 'Odd' for odd number.*/

function even_Or_Odd(Num)
{
    let str;
    if(Num%2 == 0)
    {
        str = 'Number is Even.'
        return str;
    }
    else 
    {
        str = 'Number is Odd';
        return str;
    }
}

const Number1 = even_Or_Odd(6);
console.log(Number1);

const Number2 = even_Or_Odd(51);
console.log(Number2);