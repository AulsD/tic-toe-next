import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

type AppProps  = {
	xIsNext: string;
	squares: number;
	onSquareClick: () => void;
	value: number;
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
		if (calculateWinner(squares) || squares[i] ) {
			return;
		}

	}

	const nextSquares = squares.slice();
	if (xIsNext) {
		nextSquare[i] = 'X';
	}

	return (
		<>
			<div className="status">{status}</div>
		</>
	)
}
