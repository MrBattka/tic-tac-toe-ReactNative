import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type SquareType = {
    onSquareClick: () => void
    value: string
}

const Square = ({ onSquareClick, value }: SquareType) => {

    return (
        <TouchableOpacity style={styles.square} onPress={() => onSquareClick()}>
            <Text style={value === 'X' ? styles.valueX : styles.valueO}>
                {value}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    square: {
        justifyContent: 'center',
        width: 120,
        height: 120,
        fontSize: 16,
        borderWidth: 0.6,
        backgroundColor: '#7a7c8e',
    },
    valueX: {
        fontSize: 90,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#da4f5c'
    },
    valueO: {
        fontSize: 90,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#3396f2'
    }
})

export default Square