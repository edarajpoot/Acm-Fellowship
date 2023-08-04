function getCount(str)
{
    let vowelsCount = 0;
    const arr = str.split("");

    for (let i = 0 ; i < arr.length ; i++)
    {
        switch(arr[i])
        {
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
                //break;
        }
        //return vowelsCount;
    }
    
    return vowelsCount;
}

const result = getCount('aeiou');
console.log(result);

const result1 = getCount('hello world');
console.log(result1);