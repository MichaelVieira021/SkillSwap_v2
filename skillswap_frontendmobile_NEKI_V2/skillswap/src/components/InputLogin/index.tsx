import React from "react";
import { TextInput, View } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { UseFormRegister } from "react-hook-form";

interface inputLoginProps {
    onChangeText: any,
    placeholder: string,
    style?: any,
    id:string,
    nome:string,
    value:string
}

// const stylePadrao = {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '85%',
//     position: 'relative',
// };

export const InputLogin = ({ onChangeText, placeholder, id, nome, style, value}:inputLoginProps) => {
    return (
        <View style={styles.inputLogin} >
            <Ionicons 
                name="skull" 
                style={{
                    position: 'absolute',
                    left: 13,
                    top: 10,
                    color: 'black',
                    fontSize: 28
                }}
            />

            <TextInput
                style={styles.input}
                id={id}
                placeholder={placeholder}
                placeholderTextColor={'gray'}
                onChangeText={onChangeText}
                // onChangeText={(text) => props.setLogin(text)}
                value={value}
            />

        </View>
    )
}