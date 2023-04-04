import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

type AppProps  = {
	xIsNext: string;
	squares: string[];
	onSquareClick: () => void;
	value: number;
	onPlay: () => void;
}

export default function Home() {
	return (
		<>
		  <h1>Tic Tac Toe</h1>
		</>
	)
}

function Square({value, onSquareClick}: AppProps){
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	)
}

function Board({ xIsNext, squares, onPlay}: AppProps) {
	function handleClick(){
		if (calculateWinner(squares)  ) {
			return;
		}

	}

	const nextSquares = squares.slice();
	/*if (xIsNext) {
		nextSquare[i] = 'X';
	}
	*/
	return (
		<>
			<div className="status">{status}</div>
		</>
	)
}

function calculateWinner(squares) {
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
		if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c] ){
			return squares[a];
		}
	}

	return null;
}
