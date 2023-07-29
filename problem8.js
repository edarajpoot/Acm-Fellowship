class smallestIntegerFinder
{
    findSmallestInteger(arrayOfNumber)
    {
        let smallestInteger ;
        for (let i = 0 ; i < arrayOfNumber.length ; i++)
        {
            const arrayNumber = arrayOfNumber[i];

            if(i === 0)
            {
                smallestInteger = arrayNumber;
            }
            if (arrayNumber < smallestInteger)
            {
                smallestInteger = arrayNumber;
            }
        }
        return smallestInteger;
    }
}