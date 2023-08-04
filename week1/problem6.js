function isDivisible(n,x,y)
{
    const result1 = n / x;
    const result2 = n / y;

    if(result1 % 1 == 0 && result2 % 1 == 0 )
    {
        return true;
    }
    else
    {
        return false;
    }
}

const Num1 = isDivisible(12,4,6);
console.log(Num1);

const Num2 = isDivisible(25,5,9);
console.log(Num2);