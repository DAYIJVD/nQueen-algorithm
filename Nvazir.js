//get Element 
const btn=document.getElementById('btn');
const input = document.getElementById('myInput');


//first board in html
let N =8;
let H=8;
let board = [];
    for (let i = 0; i < N; i++) { 
        let arr=[]
      for (let j = 0; j < N; j++) {
        arr.push(0)
      }
      board.push(arr)  ;
    }
//append to div
const appendtoDiv=(board)=>{
     for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const node = document.createElement("div");
            let textnode; 
            if((i%2==0&&j%2==0)||(i%2==1&&j%2==1)){
                node.className="white";
            }else{
                node.className="black";
            }
            if (board[i][j]==1) {
                node.innerHTML+="&#9818;"

            } else {
                textnode = document.createTextNode("");  
                node.appendChild(textnode);
            } 
            
            document.getElementById("chessboard").appendChild(node);
        }  
     }
}

//is SAfe for html
function isSafe(board, row, col) {
    let i, j;


    for (i = 0; i < col; i++) {
        if (board[row][i]) {
            return false;
        }
    }

  
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) {
            return false;
        }
    }

   
    for (i = row, j = col; j >= 0 && i < N; i++, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    return true;
}

//backtrack
function solveNQUtil(board, col) {
 
    if (col >= N) {
        return true;
    }  
    for (let i = 0; i < N; i++) {
      
        if (isSafe(board, i, col)) {
           
            board[i][col] = 1;

         
            if (solveNQUtil(board, col + 1)) {
                return true;
            }
            board[i][col] = 0; 
        }
    }

    return false;
}
function solveNQ() {
    
    if (solveNQUtil(board, 0) === false) {
        alert("جوابی وجود ندارد");
        return false;
    }
    appendtoDiv(board);
    return true;
}
solveNQ();
//N vazir dynamic n*n process for alert 
btn.addEventListener('click',()=>{

let boardd = [];
    for (let i = 0; i < H; i++) { 
        let arr=[]
      for (let j = 0; j < H; j++) {
        arr.push(0)
      }
      boardd.push(arr)  ;
    }
console.log(boardd);    

function printSolution(board) {
    let row = "";
    for (let i = 0; i < H; i++) {      
        for (let j = 0; j < H; j++) {
            row += "  " + board[i][j] + "  ";
        }
        row+='\n';
    }
    alert(`${H}*${H}:\n ${row}`)
    input.value="";
    H=8;
}

function isSafe(board, row, col) {
    let i, j;

  
    for (i = 0; i < col; i++) {
        if (board[row][i]) {
            return false;
        }
    }


    for (i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) {
            return false;
        }
    }


    for (i = row, j = col; j >= 0 && i < H; i++, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    return true;
}


function solveNQUtil(boardd, col) {
   
    if (col >= H) {
        return true;
    }


    for (let i = 0; i < H; i++) {
      
        if (isSafe(boardd, i, col)) {
   
            boardd[i][col] = 1;

         
            if (solveNQUtil(boardd, col + 1)) {
                return true;
            }

     
            boardd[i][col] = 0; // BACKTRACK 
        }
    }


    return false;
}
 function solveNQ() {
    
    if (solveNQUtil(boardd, 0) === false) {
        alert("جوابی وجود ندارد");
        return false;
    }
    printSolution(boardd)  
    return true;
}
solveNQ(); 
 
})
input.addEventListener('change',()=>{
    H=Number(input.value);
    if (Number(H)>10) {
        alert("یک عدد یک رقمی وارد کنید")
        input.value="";
        H=8;
    }
})

