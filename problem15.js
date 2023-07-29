function repeatStr(num , str)
{
    let starterString = '';
    for( let i = 0 ; i < num ; i++)
    {
        starterString = starterString + str ;
    }
    return starterString;
}

const String1 = repeatStr(4,'Hey!');
console.log(String1);

const String2 = repeatStr(7,'Hii!');
console.log(String2);

const String3 = repeatStr(5,'Hello!');
console.log(String3);