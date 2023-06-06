import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { calculateWinner } from './models/winner';
import WinnerDesk from './components/WinnerDesk';
import MenuGame from './components/MenuGame';
import Board from './components/Board';

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [winnerEditMode, setWinnerEditMode] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(true)

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove]
  const winner = calculateWinner(currentSquares)

  useEffect(() => {
    if (winner) {
      setWinnerEditMode(true)
    }
  }, [winner])

  const handlePlay = (nextSquares: []) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  return (
    <>
      {winnerEditMode && <WinnerDesk setIsOpenMenu={setIsOpenMenu} setCurrentMove={setCurrentMove}
        setWinnerEditMode={setWinnerEditMode} winner={winner} />}
      {currentMove === 9 && !winner && <WinnerDesk setIsOpenMenu={setIsOpenMenu} setCurrentMove={setCurrentMove}
        setWinnerEditMode={setWinnerEditMode} winner={winner} />}
      {isOpenMenu && <MenuGame setIsOpenMenu={setIsOpenMenu}/>}
      <View style={styles.game}>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.gameBoard}>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  game: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
  },
  gameBoard: {

  },
  title: {
    color: 'white',
    fontWeight: '100',
    fontSize: 13,
  }
});


export default App