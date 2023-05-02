import { useEffect, useState } from 'react'
import Square from './Square'
type Player = 'X' | 'O' | 'Both' | 'Null';

function calculateWinner(squares: Player[] ) {

	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c]){
		  return squares[a];
		}
	}

	return null;
}
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  function reset() {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }

  function setSquareValue(index: number) {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }

    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });

  return (
    <div>
      {!winner && <p>Hey {currentPlayer}, its your turn</p>}
      {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
      {winner && winner === "BOTH" && (
        <p>Congratulations you are both winners</p>
      )}

      <div className="grid">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

/*
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  const [winner, setWinner] = useState<Player>(null);
  
  function reset() {
    setSquareValue(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  }
  
  function setSquareValue (index: number){
    //console.log(squares,"check")
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }

      return val;
    });

    setSquares(newData);
    setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
  }
  
  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w)
    }

    if (!w && !squares.filter((filter) =>  !squares).length ) {
      setWinner("BOTH")
    }
  })	

	return (
		<>
      {/*
			<div className="status">{status}</div>
			<div className="board-now">
				<Square value={squares![0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares![1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares![2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-now" >
				<Square value={squares![3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares![4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares![5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-now" >
				<Square value={squares![6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares![7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares![8]} onSquareClick={() => handleClick(8)} />
			</div>
      

      { !winner && <p> Hey {currentPlayer}, its your turn</p> }
      { winner && winner !== "BOTH" && <p> Congratulations winner </p> }
      { winner && winner == "BOTH" && (
        <p> Congratulations you are both winners </p>
      )}
      
      <div className="grid">
        {Array(9) 
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            )
          })
        }
      </div>
      
      <button className="reset" onClick={reset}>
        RESET
      </button>
		</>
	)
}
*/



export default Board
