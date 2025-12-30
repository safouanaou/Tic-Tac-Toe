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

    const checkWinner = () => {
        const winnerCheckArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
        let arrayCheck = [];

        const f = (arr) => {
            if(arr.every(val => val === arr[0])){
                return 1;
            }
            else return 0;
        }

        winnerCheckArray.forEach(line => {
            line.forEach(col => {
                arrayCheck.push(GameBoard.getBoard()[col])
            })

            if(arrayCheck.every(val => val === arrayCheck[0])){
                console.log("winner")
            }
            
        })

        
    };

    let currentPlayerIdex = 0


    const playRound = (index) => {

         const switchTurn = () => currentPlayerIdex = currentPlayerIdex === 0 ? 1 : 0;
        console.log(`the game has started\n it's ${players[currentPlayerIdex].name}'s turn: `)
        //let play = prompt("choose a column: ");
        GameBoard.placeMarker(index, players[currentPlayerIdex].marker)
        console.log(GameBoard.getBoard())
        checkWinner()
        switchTurn();
    }

     return {
        playRound
    }
    
})();


