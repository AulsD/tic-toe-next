import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
		  <h1>Tic Tac Toe</h1>
		</>
	)
}

function Square({value, onSquareClick}){
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	)
}

function Board({ xIsNext, squares, onPlay}) {
	
	return (
		<>
			<div className="status">{status}</div>
		</>
	)
}
