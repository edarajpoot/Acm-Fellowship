function hero(bullets , dragon)
{
    return bullets/dragon >= 2;
}

const hero1 = hero(60,40);
console.log(hero1);

const hero2 = hero(45,12);
console.log(hero2);