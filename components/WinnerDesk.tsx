import React, { useCallback } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type WinnerDeskType = {
    winner: any
    setWinnerEditMode: React.Dispatch<React.SetStateAction<boolean>>
    setCurrentMove: React.Dispatch<React.SetStateAction<number>>
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const WinnerDesk = ({ winner, setWinnerEditMode, setCurrentMove, setIsOpenMenu }: WinnerDeskType) => {

    const handleOnClickOnPlay = useCallback(() => {
        setWinnerEditMode(false)
        setCurrentMove(0)
    }, [setWinnerEditMode, setCurrentMove])

    const handleOnClickOnMenu = useCallback(() => {
        setWinnerEditMode(false)
        setIsOpenMenu(true)
        setCurrentMove(0)
    }, [setWinnerEditMode, setIsOpenMenu, setCurrentMove])

    const menuBacgroundImg = <Image style={styles.img} source={require('../assets/menuGame.png')} />

    return (
        <View style={styles.winnerBoxWrapper}>
            {menuBacgroundImg}
            <Text style={styles.title}>Winner Player:</Text>
            {winner && <View style={styles.wrapperWinnerPlayer}>
                <Text style={styles.winnerPlayer}>{winner}</Text>
            </View>}
            {!winner && <View style={styles.wrapperDraw}>
                <Text style={styles.draw}>{!winner && 'The Draw'}</Text>
            </View>}
            <TouchableOpacity style={styles.contolBtn} onPress={() => handleOnClickOnPlay()}>
                <Text style={styles.contolBtnTxt}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contolBtn} onPress={() => handleOnClickOnMenu()}>
                <Text style={styles.contolBtnTxt}>Back to Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    winnerBoxWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 50,
        letterSpacing: 2,
        fontWeight: '300',
        marginBottom: 10
    },
    wrapperWinnerPlayer: {
        borderWidth: 1,
        width: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    winnerPlayer: {
        fontSize: 50,
        fontWeight: '500',
        textShadowColor: 'black',
        textShadowRadius: 10,
        color: 'red'
    },
    wrapperDraw: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    draw: {
        fontSize: 40,
        fontWeight: '500',
        textShadowColor: 'black',
        textShadowRadius: 10,
        color: 'red'
    },
    img: {
        position: 'absolute',
        opacity: 0.4
    },
    contolBtn: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#ebebeb',
        padding: 5,
        marginBottom: 20
    },
    contolBtnTxt: {
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: '300',
    }
})

export default WinnerDesk