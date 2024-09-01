// document.addEventListener('DOMContentLoaded', function() {
//     const board = document.getElementById('board');
//     let selectedPiece = null;
    
//     // Create chess board tiles dynamically
//     for (let i = 0; i < 8; i++) {
//       for (let j = 0; j < 8; j++) {
//         const tile = document.createElement('div');
//         tile.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
//         tile.dataset.row = i;
//         tile.dataset.col = j;
//         tile.addEventListener('click', handleTileClick);
//         board.appendChild(tile);
//       }
//     }
  
//     // Add chess pieces to the board
//     const pieces = [
//       '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
//       '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
//       '', '', '', '', '', '', '', '',
//       '', '', '', '', '', '', '', '',
//       '', '', '', '', '', '', '', '',
//       '', '', '', '', '', '', '', '',
//       '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
//       '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
//     ];
  
//     const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//     for (let i = 0; i < 64; i++) {
//       const piece = document.createElement('div');
//       piece.classList.add('piece');
//       piece.innerHTML = pieces[i];
//       board.children[i].appendChild(piece);
//       piece.addEventListener('click', handlePieceClick);
//     }
  
//     function handlePieceClick(event) {
//       const piece = event.target;
//       if (piece.innerHTML && piece.innerHTML !== selectedPiece) {
//         selectedPiece = piece;
//       } else {
//         selectedPiece = null;
//       }
//     }
  
//     function handleTileClick(event) {
//       const tile = event.target;
//       const row = parseInt(tile.dataset.row);
//       const col = parseInt(tile.dataset.col);
//       if (selectedPiece) {
//         const selectedRow = parseInt(selectedPiece.parentElement.dataset.row);
//         const selectedCol = parseInt(selectedPiece.parentElement.dataset.col);
//         if (isValidMove(selectedRow, selectedCol, row, col)) {
//           tile.appendChild(selectedPiece);
//           selectedPiece = null;
//         }
//       }
//     }
  
//     function isValidMove(selectedRow, selectedCol, newRow, newCol) {
//       // Add logic for valid moves based on the rules of chess
//       // For this example, we'll just allow vertical movement for pawns
//       if (selectedPiece.innerHTML === '♙' && selectedCol === newCol && newRow === selectedRow + 1) {
//         return true;
//       }
//       if (selectedPiece.innerHTML === '♟' && selectedCol === newCol && newRow === selectedRow - 1) {
//         return true;
//       }
//       return false;
//     }
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     const board = document.getElementById('board');
  
//     // Create chess board tiles dynamically
//     for (let i = 0; i < 8; i++) {
//       for (let j = 0; j < 8; j++) {
//         const tile = document.createElement('div');
//         tile.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
//         board.appendChild(tile);
//       }
//     }
  
//     // Add chess pieces to the board
//     const pieces = [
//       '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
//       '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
//       '', '', '', '', '', '', '', '',
//       '', '', '', '', '', '', '', '',
//       '', '', '', '', '', '', '', '',
//       '', '', '', '', '', '', '', '',
//       '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
//       '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
//     ];
  
//     const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
//     for (let i = 0; i < 64; i++) {
//       const piece = document.createElement('div');
//       piece.classList.add('piece');
//       piece.innerHTML = pieces[i];
//       board.children[i].appendChild(piece);
//     }
//   });


  document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const tiles = [];
  
    // Create chess board tiles dynamically
    for (let i = 0; i < 64; i++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      // Alternate background color for chess board pattern
      if (Math.floor(i / 8) % 2 === 0) {
        tile.style.backgroundColor = i % 2 === 0 ? '#f0d9b5' : '#b58863';
      } else {
        tile.style.backgroundColor = i % 2 === 0 ? '#b58863' : '#f0d9b5';
      }
      board.appendChild(tile);
      tiles.push(tile);
    }
  
    // Initialize pieces on the board
    const startingPositions = [
      '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
      '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
      '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '',
      '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
      '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
    ];
  
    tiles.forEach((tile, index) => {
      const piece = startingPositions[index];
      if (piece !== '') {
        const pieceElement = document.createElement('div');
        pieceElement.classList.add('piece');
        pieceElement.textContent = piece;
        tile.appendChild(pieceElement);
      }
    });
  
    let selectedTile = null;
  
    // Add event listeners to each tile for player interaction
    tiles.forEach(tile => {
      tile.addEventListener('click', function() {
        if (!selectedTile) {
          if (this.querySelector('.piece')) {
            selectedTile = this;
            selectedTile.classList.add('selected');
          }
        } else {
          if (this !== selectedTile) {
            movePiece(selectedTile, this);
            selectedTile.classList.remove('selected');
            selectedTile = null;
          } else {
            selectedTile.classList.remove('selected');
            selectedTile = null;
          }
        }
      });
    });
  
    // Move piece to new position
    function movePiece(fromTile, toTile) {
      const piece = fromTile.querySelector('.piece');
      if (!piece) return; // No piece to move
  
      // If the destination tile is empty, move the piece
      if (!toTile.querySelector('.piece')) {
        toTile.appendChild(piece);
      } else {
        // If the destination tile contains an opponent's piece, capture it and move the piece
        const toPiece = toTile.querySelector('.piece');
        toTile.removeChild(toPiece);
        toTile.appendChild(piece);
      }
    }
  });