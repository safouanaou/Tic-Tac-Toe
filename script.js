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
    const players = [playerOne, playerTwo]

    const checkWinner = () => {

        //understand why this method is inefficient 
        const winCombos = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
        let board = GameBoard.getBoard();
        let R = []
        let text = "";

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
                text = "winner is player 1";
            }
            else if (arr.length == 3 && arr.every(val => val === 'O')){
                text = "winner is player 2";
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
        
        return text;

    };

    let currentPlayerIdex = 0


    const playRound = (index) => {

         const switchTurn = () => currentPlayerIdex = currentPlayerIdex === 0 ? 1 : 0;
        console.log(`the game has started\n it's ${players[currentPlayerIdex].name}'s turn: `)
        //let play = prompt("choose a column: ");
        GameBoard.placeMarker(index, players[currentPlayerIdex].marker)
        console.log(GameBoard.getBoard())
        checkWinner();
        switchTurn();
    }



     return {
        playRound
    }
    
})();


const DisplayController = (()=>{
    const gamebox = document.querySelector(".gamebox");
 
   gamebox.addEventListener('click', (e)=> {
        if (e.target.classList.contains('box')){
            
        }
    })


})();