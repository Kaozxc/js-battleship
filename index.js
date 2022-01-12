let boardDiv = document.querySelector("#board");
let board = [];

function createShip(length) {
            let sunk = false;
            let whereHit = '';
            return {
                length: length,
                whereHit: whereHit,
                sunk: sunk,
                hit(num) {
                    console.log(`Position at ${num} hit`);
                },
                isSunk() {
                    if(length === whereHit) {
                        sunk = true;
                        console.log('Your ship was destroyed');
                    }
                }
            }
        }


// {

//     function drawBoard() {
//         boardDiv.innerHTML = "";
//         board.forEach((item) => {
//           boardDiv.appendChild(generateCell(item.x, item.y, item.choice));
//           if (item.x + 1 == Math.sqrt(board.length)) {
//             boardDiv.appendChild(document.createElement("br"));
//           }
//         });
//       }
    
      
//     function generateCell(x, y, choice) {
//         let cell = document.createElement("div");
//         cell.classList.add("cell");
//         cell.setAttribute("x", x);
//         cell.setAttribute("y", y);
//         cell.innerHTML = choice;
//         // Adds A-J to gameboard
//         { if(y === 0 && x === 1) {
//             cell.innerHTML = 'A'
//         } 
//         if(y === 0 && x === 2) {
//             cell.innerHTML = 'B'
//         } 
//         if(y === 0 && x === 3) {
//             cell.innerHTML = 'C'
//         } 
//         if(y === 0 && x === 4) {
//             cell.innerHTML = 'D'
//         } 
//         if(y === 0 && x === 5) {
//             cell.innerHTML = 'E'
//         } 
//         if(y === 0 && x === 6) {
//             cell.innerHTML = 'F'
//         } 
//         if(y === 0 && x === 7) {
//             cell.innerHTML = 'G'
//         } 
//         if(y === 0 && x === 8) {
//             cell.innerHTML = 'H'
//         } 
//         if(y === 0 && x === 9) {
//             cell.innerHTML = 'I'
//         } 
//         if(y === 0 && x === 10) {
//             cell.innerHTML = 'J'
//         } 
//         }
//         // Adds 1-10 to gameboard
//         { if(y === 1 && x === 0) {
//             cell.innerHTML = '1'
//         } 
//         if(y === 2 && x === 0) {
//             cell.innerHTML = '2'
//         } 
//         if(y === 3 && x === 0) {
//             cell.innerHTML = '3'
//         } 
//         if(y === 4 && x === 0) {
//             cell.innerHTML = '4'
//         } 
//         if(y === 5 && x === 0) {
//             cell.innerHTML = '5'
//         }
//         if(y === 6 && x === 0) {
//             cell.innerHTML = '6'
//         } 
//         if(y === 7 && x === 0) {
//             cell.innerHTML = '7'
//         } 
//         if(y === 8 && x === 0) {
//             cell.innerHTML = '8'
//         } 
//         if(y === 9 && x === 0) {
//             cell.innerHTML = '9'
//         } 
//         if(y === 10 && x === 0) {
//             cell.innerHTML = '10'
//         } 
//         }
//         // Hardcoding ships
//             // Ship One
//             if(y === 5 && x === 5) {
//               cell.setAttribute('id', 'ship');
//             }if(y === 6 && x === 5) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 7 && x === 5) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 8 && x === 5) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 9 && x === 5) {
//                 cell.setAttribute('id', 'ship');
//           }
//          //Ship Two
//             if(y === 1 && x === 4) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 1 && x === 5) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 1 && x === 6) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 1 && x === 7) {
//                 cell.setAttribute('id', 'ship');
            
//             }
//             //Ship Three
//             if(y === 2 && x === 2) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 3 && x === 2) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 4 && x === 2) {
//                 cell.setAttribute('id', 'ship');
//             }
//             // Ship Four
//             if(y === 5 && x === 8) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 5 && x === 9) {
//                 cell.setAttribute('id', 'ship');
//             }
//             // Ship Five
//             if(y === 7 && x === 1) {
//                 cell.setAttribute('id', 'ship');
//             }if(y === 7 && x === 2) {
//                 cell.setAttribute('id', 'ship');
//             }
//             //Ship Six
//             if(y === 7 && x === 7) {
//                 cell.setAttribute('id', 'ship');
//             }
//             //Ship Seven
//             if(y === 3 && x === 7) {
//                 cell.setAttribute('id', 'ship');
//             }
        
//         cell.addEventListener('click', () => {
//           if(cell.getAttribute('id') === 'ship') {
//               console.log('HIT');
//               cell.setAttribute('id', 'hit');
//           } else {
//               cell.textContent = 'MISS';
//           }
//         })
    
//         return cell;
//       }
    
//     function initializeGameboardInMemory() {
//         for (let y = 0; y < 11; y++) {
//           for (let x = 0; x < 11; x++) {
//             board.push({ x: x, y: y, choice: null });
//           }
//         }
//       }
    
//     function createShip(length) {
//         let sunk = false;
//         let whereHit = '';
//         return {
//             length: length,
//             whereHit: whereHit,
//             sunk: sunk,
//             hit(num) {
//                 console.log(`Position at ${num} hit`);
//             },
//             isSunk() {
//                 if(length === whereHit) {
//                     sunk = true;
//                     console.log('Your ship was destroyed');
//                 }
//             }
//         }
//     }
    
     
//     let initialize = () => {
//         initializeGameboardInMemory()
//         drawBoard();
//       }
    
//     initialize();
    

// }
