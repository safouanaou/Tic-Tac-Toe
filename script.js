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
    let player_one = prompt("enter player one name: ")
    let player_two = prompt("enter player two name: ") 
    const playerOne = player(player_one, 'X');
    const playerTwo = player(player_two, 'O');
    const players = [playerOne, playerTwo]

    const playRound = (index) => {
        while (GameBoard.getBoard().some(column => column === "")){
            currentPlayerIdex = 0
            const switchTurn = () => currentPlayerIdex === 0 ? 1 : 0;
            console.log(`the game has started\n it's ${players[currentPlayerIdex].name}'s turn: `)
            //let play = prompt("choose a column: ");
            GameBoard.placeMarker(index, players[currentPlayerIdex].marker)
            switchTurn();
            checkWinner();
        }
    }

    const checkWinner = (() => {
        const winnerCheckArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
        winnerCheckArray.forEach(line => {
            if (GameBoard.getBoard()[line.every(val => val === line[0])]){
                if (line[0] === "X") console.log(`the winner is: ${playerOne}`);
                else if (line[0] === "O") console.log(`the winner is ${playerTwo}`);
            }

        });

    })();
})();


