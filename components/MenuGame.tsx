import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MenuGameType = {
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuGame = ({ setIsOpenMenu }: MenuGameType) => {

    const closedMenu = () => {
        setIsOpenMenu(false)
    }

    const menuBacgroundImg = <Image style={styles.img} source={require('../assets/menuGame.png')} />

    return (
        <View style={styles.wrapperMenu}>
            {menuBacgroundImg}
            <Text style={styles.title}>Menu Game</Text>
            <TouchableOpacity style={styles.wrapperBtn} onPress={() => closedMenu()}>
                <Text style={styles.textBtn}>Play Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
    },
    title: {
        fontSize: 50,
        letterSpacing: 2,
        fontWeight: '400',
        textShadowColor: 'red',
        textShadowRadius: 6,
        marginBottom: 200, 
    },
    wrapperBtn: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#ebebeb',
        padding: 5
    },
    textBtn: {
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: '300',
    },
    img: {
        position: 'absolute',
        opacity: 0.4
    }
})

export default MenuGame