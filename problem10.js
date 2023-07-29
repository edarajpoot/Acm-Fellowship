function getAverage(marks)
{
    const count = marks.length;
    let sum = 0;
    for(let i = 0 ; i < count ; i++)
    {
        sum += marks[i];
    }

    const avg = sum/count;
    const roundedDown = Math.floor(avg);
    return roundedDown;
}

const std1 = getAverage([23,34,46,86,43,20,16]);
console.log(std1);

const std2 = getAverage([25,38,44,55]);
console.log(std2);

const std3 = getAverage([23,34,45,6,76,5]);
console.log(std3);