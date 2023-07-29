function century(year)
{
    return Math.ceil(year/100);
}

const cen = century(2002);
console.log(cen);