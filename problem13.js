function positiveSum(arr)
{
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i] > 0)
        {
            sum += arr[i];
        }
    }
  return sum;
}

const arr1 = positiveSum([1,3,7,-9]);
console.log(arr1);

const arr2 = positiveSum([-7,9,1,8,9,12]);
console.log(arr2);

const arr3 = positiveSum([10,32,7,-9,-7,2,1]);
console.log(arr3);
