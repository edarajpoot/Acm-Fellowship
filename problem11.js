const rockPaperScissors = (player1 , player2) =>
{
    if(player1 === 'Rock')
    {
        if(player2 === 'Paper')
        {
            return 'Player 2 Won!';
        }
        if(player2 === 'Rock')
        {
            return 'Draw!';
        }
        if(player2 === 'Scissors')
        {
            return 'Player 1 Won!';
        }

    }
    if(player1 === 'Paper')
    {
        if(player2 === 'Paper')
        {
            return 'Draw!';
        }
        if(player2 === 'Rock')
        {
            return 'Player 1 Won!';
        }
        if(player2 === 'Scissors')
        {
            return 'Player 2 Won!';
        }

    }
    if(player1 === 'Scissors')
    {
        if(player2 === 'Paper')
        {
            return 'Player 1 Won!';
        }
        if(player2 === 'Rock')
        {
            return 'Player 2 Won!';
        }
        if(player2 === 'Scissors')
        {
            return 'Draw!';
        }

    }
}

const Game1 = rockPaperScissors('Rock' , 'Paper');
console.log(Game1);

const Game2 = rockPaperScissors('Rock' , 'Rock');
console.log(Game2);

const Game3 = rockPaperScissors('Scissors' , 'Paper');
console.log(Game3);