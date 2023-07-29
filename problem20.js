function arraySum(arr1 ,arr2)
{
    let sum = 0;
    for( let i = 0 ; i <arr1.length ; i++)
    {
        const arr1Val = arr1[i];
        const arr2Val = arr2[i];
        
        const addedVal = arr1Val + arr2Val ;
        sum += addedVal;
    }
    return sum;
}

const array1 = arraySum([2,4,6,7],[6,42,3,6]);
console.log(array1);

const array2 = arraySum([3,2,5,65,7],[21,23,5,65,87]);
console.log(array2);

const array3 = arraySum([12,12],[7,25,2,14,14]);
console.log(array3);