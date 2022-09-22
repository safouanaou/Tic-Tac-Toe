const container = document.querySelector('.container');
const playerOneText = document.getElementById('player1');
const playerTwoText = document.getElementById('player2');
const buttonSymbol = document.querySelectorAll('.symbol');
const replay = document.getElementById('replay');
const winner = document.getElementById('winner');
const displayWinnerPage = document.querySelector('.reload-winner')
const turnText = document.querySelector('.turnText');
const box = Array.from(document.querySelectorAll('.box'));


(function gameBoardModule(){
    let turn = 'x';

    const gameBoard = box;
    
    
    function checkWinner(num1,num2, num3){
        
        let a = gameBoard[num1].innerHTML;
        let b = gameBoard[num2].innerHTML;
        let c = gameBoard[num3].innerHTML;
    
        if(a === b && b === c && c !== ''){
            turnText.innerHTML = a.toUpperCase() + ' is the winner';
            turn = '';
            winner.innerHTML = a + ' is the winner';
            displayWinnerPage.style.display = 'flex';        container.style.display = 'none';
    
        }else if(gameBoard.every(isEmpty)){
            winner.innerHTML = "it's a tie";
            displayWinnerPage.style.display = 'flex';   
            container.style.display = 'none';
        }
    
        }
    
    

})()







