function maps(arr)
{
    const result = arr.map((arrItem) => {
      return arrItem*2;
    });
    return result;
}

const arr1 = maps([2,3,4]);
console.log(arr1);

const arr2 = maps([5,6,7]);
console.log(arr2);

const arr3 = maps([8,9,10]);
console.log(arr3);