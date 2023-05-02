import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import '@/styles/Tictoe.module.css'
import { useState } from 'react'
import Board from '../components/Board'

const inter = Inter({ subsets: ['latin'] })

type AppProps  = {
	xIsNext?: boolean;
	squares?: string[];
	onSquareClick?: () => void;
	value?: string;
  nextMove?: any;
	onPlay?: any;
  nextSquares?: number[];
  nextHistory?: React.FormEventHandler<HTMLInputElement>;
};


export default function Home() {
/*
  const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];

  
	function handlePlay({nextSquares}: AppProps): any {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory as any);
		setCurrentMove(nextHistory.length - 1);

	}
  
  function jumpTo({nextMove, onSquareClick, value, xIsNext}: AppProps): any | undefined {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: any, move: any) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }    return (
      
      <li key={move}>
        <button onClick={() => console.log("check jumpss")}>{description}</button>
      </li>
    );
  });*/

	return (
		<>
      <div className="game-title">
		    <h1>Simple Next Tic Tac Toe</h1>
      </div> 
      <div className="game">
        <div className="game-board">
    {/*<Board xIsNext={xIsNext} squares={currentSquares} onPlay={() => console.log("test button")} /> */}
     {/*    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> */}
          <Board />
        </div>
      </div>
    </>
	)
}
