const GameBoard = (()=>{
    let board = ["","","",
                 "","","",
                 "","",""];

    const getBoard = ()=> [...board]; // ... spread operator that returns a shallow copy
    const resetBoard = ()=> {
        board.fill("");
    }
    const placeMarker = (index, marker)=>{
        board[index] = marker;
    }
    return {
        getBoard,
        resetBoard,
        placeMarker
    }
})();

const player = (name, marker) => {
    return {
        name,
        marker
    }
};


const GameController = (()=>{
    //let player_one = prompt("enter player one name: ")
    //let player_two = prompt("enter player two name: ") 
    const playerOne = player("apah", 'X');
    const playerTwo = player("paaah", 'O');
    const players = [playerOne, playerTwo];
    let currentPlayerIndex = 0;
    let winner = "";



    const checkWinner = () => {

        //understand why this method is inefficient 
        const winCombos = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
        let board = GameBoard.getBoard();
        let R = []

        winCombos.forEach(combo => {
            let vals = []
            combo.forEach(num => {
                if(board[num] !== ""){ //reconsider ??
                    vals.push(board[num])
                }
            })
            R.push(vals)
            
        })


        R.forEach(arr => {
            if(arr.length == 3 && arr.every(val => val === 'X')){
                winner = playerOne.name
            }
            else if (arr.length == 3 && arr.every(val => val === 'O')){
                winner = playerTwo.name
            }
        })

        /**
            A BETTER METHOD USING DESTRUCTURING  

        const winningCombo = winCombos.find(combo => {
            const [a, b, c] = combo;
            // Check if first cell is not empty, and if it matches the other two
            return board[a] && board[a] === board[b] && board[a] === board[c];
        });

        if (winningCombo) {
            const winnerMarker = board[winningCombo[0]];
            const winner = players.find(p => p.marker === winnerMarker);
            console.log(`winner is ${winner.name}`);
        }
        */

    };

    const getWinner = () => winner;


    const playRound = (index) => {
            if (!winner){
                const switchTurn = () => currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
                GameBoard.placeMarker(index, players[currentPlayerIndex].marker)
                //checkWinner();
                switchTurn();
            }


        }



     return {
        playRound, checkWinner, getWinner
    }
    
})();


const DisplayController = (()=>{
    const gamebox = document.querySelector(".gamebox");
    const restartBtn = document.getElementById("restart");
    const winnertext = document.getElementById("winner-text");

    gamebox.addEventListener('click', (e)=>{
            const index = Array.from(gamebox.children).indexOf(e.target)
            GameController.playRound(index)
            e.target.innerText = GameBoard.getBoard()[index]
            GameController.checkWinner()
            const winner = GameController.getWinner();
            if(winner){
                winnertext.innerText = `the winner is${winner}`;
                restartBtn.style.display = "block";
            }
            

        
        })

        
    
    
})();

