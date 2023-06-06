import React from 'react';
import Square from './Square';
import { calculateWinner } from '../models/winner';
import { Image, StyleSheet, Text, View } from 'react-native';

type BoardType = {
    squares: any
    xIsNext: boolean
    onPlay: (nextSquares: []) => void
}

const Board = ({ squares, xIsNext, onPlay }: BoardType) => {

    const handleClick = (i: number) => {
        if (calculateWinner(squares) || squares[i]) {
          return
        }
        const nextSquares = squares.slice()
        if (xIsNext) {
          nextSquares[i] = 'X'
        } else {
          nextSquares[i] = 'O'
        }
        onPlay(nextSquares)
      }
      
      const status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    
      return (
        <View>
          <View style={styles.status}><Text>{status}</Text></View>
          <View style={styles.boardRow}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </View>
          <View style={styles.boardRow}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </View>
          <View style={styles.boardRow}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    status: {

    },
    boardRow: {
        height: 120,
        flexDirection: 'row'
    }
})

export default Board