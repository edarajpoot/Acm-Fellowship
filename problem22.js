function humanYears(years)
{
    let catsAge ;
    let dogsAge ;

    if(years === 1)
    {
        return [years ,15 ,15];
    }
    if(years === 2)
    {
        return [years ,24 ,24];
    }
     const excessYears = years - 2;
     const extraCatsYears = excessYears * 4;
     const extraDogsYears = excessYears * 5;

     return [years , 24 + extraCatsYears , 24 + extraDogsYears];
}

const catYears = humanYears(2);
console.log(catYears);