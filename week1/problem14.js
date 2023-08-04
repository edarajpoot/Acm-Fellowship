function basicOp(op,val1,val2)
{
    let result;
    switch(op)
    {
        case '+':
            result = val1 + val2;
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val1 / val2;
            break;
    }
    return result;
}

const operation1 = basicOp('+',4,5);
console.log(operation1);

const operation2 = basicOp('-',16,9);
console.log(operation2);

const operation3 = basicOp('*',8,9);
console.log(operation3);

const operation4 = basicOp('/',42,2);
console.log(operation4);