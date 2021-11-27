const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

const restartBtn = document.getElementById ('restartBtn');
const restartGame = document.getElementById ('restartGame');

const playerXtable = document.getElementById ('playerXname');
const playerOtable = document.getElementById ('playerOname');


const playerXname = document.getElementById ('playerX');
const playerOname = document.getElementById ('playerO');

const btn = document.getElementById ('btn');
const names = document.getElementById ('names')
const table = document.getElementById ('table')

let flag = 0;
let player = 'X';
let board =[['','',''],
            ['','',''],
            ['','','']];

let scoreX = 0;
let scoreO = 0;


btn.addEventListener('click', function (){
    if (playerXname.value === '' || playerOname.value === ''){
        alert('Please insert names !');
    }
    else {
        playerXtable.innerText = `${playerXname.value} - ${scoreX}`;
        playerOtable.innerText = `${playerOname.value} - ${scoreX}`;
        flag = 1;
        names.style.display = "none";
        table.style.marginTop = "50px";
    }
})

function totalScore () {
    player === 'X' ? (scoreX += 1) : (scoreO += 1);
    playerXtable.innerText = `${playerXname.value} - ${scoreX}`;
    playerOtable.innerText = `${playerOname.value} - ${scoreO}`;
};

function addingMove (block,player) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute ('id',`${player}`);
    block.append(newDiv);
}


function checkColRow (board,row,col,player) {
    // checking row
    if (board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
        // winner
        totalScore();
        return 0;
    }
    //  checking collomn
    else if (board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
        // winner
        totalScore();
        return 0;
    }; 
    return 1;
};

function checkCross1 (board,row,col,player){
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        // winner
        totalScore();
        return 0;
    };
    return 1;
};
function checkCross2 (board,row,col,player){
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        // winner
        totalScore();
        return 0;
    };
    return 1;
};

function changePlayer (player) {
    if(player === 'X') {
        return 'O';
    }
    else {
        return 'X';
    };
}


a1.addEventListener('click', function() {
    if (!a1.firstChild && flag === 1){
        board[0][0] = player;
        addingMove(a1,player);
        if(flag = checkColRow(board,0,0,player))
            flag = checkCross1 (board,0,0,player);
        player = changePlayer(player);
    }
});

a2.addEventListener('click', function() {
    if (!a2.firstChild && flag === 1){
        board[0][1] = player;
        addingMove(a2,player);
        flag = checkColRow(board,0,1,player);
        player = changePlayer(player);
    }
});

a3.addEventListener('click', function() {
    if (!a3.firstChild && flag === 1){
        board[0][2] = player;
        addingMove(a3,player);
        if(flag = checkColRow(board,0,2,player))
            flag = checkCross2 (board,0,2,player,player);
        player = changePlayer(player);
    }
});

b1.addEventListener('click', function() {
    if (!b1.firstChild && flag === 1){
        board[1][0] = player;
        addingMove(b1,player);
        flag = checkColRow(board,1,0,player);
        player = changePlayer(player);
    }
});

b2.addEventListener('click', function() {
    if (!b2.firstChild && flag === 1){
        board[1][1] = player;
        addingMove(b2,player);
        if(flag = checkColRow(board,1,1,player))
            if(flag = checkCross1 (board,1,1,player))
                flag = checkCross2 (board,1,1,player);
        player = changePlayer(player);
    }
});

b3.addEventListener('click', function() {
    if (!b3.firstChild && flag === 1){
        board[1][2] = player;
        addingMove(b3,player);
        flag = checkColRow(board,1,2,player);
        player = changePlayer(player);
    }
});

c1.addEventListener('click', function() {
    if (!c1.firstChild && flag === 1){
        board[2][0] = player;
        addingMove(c1,player);
        if(flag = checkColRow(board,2,0,player))
            flag = checkCross2 (board,2,0,player);
        player = changePlayer(player);
    }
});

c2.addEventListener('click', function() {
    if (!c2.firstChild && flag === 1){
        board[2][1] = player;
        addingMove(c2,player);
        flag = checkColRow(board,2,1,player);
        player = changePlayer(player);
    }
});

c3.addEventListener('click', function() {
    if (!c3.firstChild && flag === 1){
        board[2][2] = player;
        addingMove(c3,player);
        if(flag = checkColRow(board,2,2,player))
            flag = checkCross1 (board,2,2,player);
        player = changePlayer(player);
    }
});


restartBtn.addEventListener('click',function() {
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
    player = 'X';
    board =[['','',''],
            ['','',''],
            ['','','']];
    // if (scoreX.innerText || scoreO.innerText) {
    if (scoreX || scoreO) {
        flag = 1;
    }
});
restartGame.addEventListener('click',function() {
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    b1.innerHTML = "";
    b2.innerHTML = "";
    b3.innerHTML = "";
    c1.innerHTML = "";
    c2.innerHTML = "";
    c3.innerHTML = "";
    player = 'X';
    playerXtable.innerText = 'Player 1';
    playerOtable.innerText = 'Player 2';
    scoreX.innerText = '';
    scoreO.innerText = '';
    playerXname.value = '';
    playerOname.value = '';
    flag = 0;
    names.style.display = "block";
    table.style.marginTop = "0";
    board =[['','',''],
            ['','',''],
            ['','','']];
});