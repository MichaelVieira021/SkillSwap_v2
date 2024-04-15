import React from "react";
import styles from './styles';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

interface inputSenhaProps {
    placeholder: string,
    id: string
    onChangeText: any
    nome: string
    value:string
}

export const InputSenha = ({placeholder, id, nome, value, onChangeText}: inputSenhaProps) => {
    const [verSenha, setVerSenha] = useState(false)

    return(
        <View style={styles.inputSenha}>
            <FontAwesome 
                name="key" 
                style={{
                    position: 'absolute',
                    left: 13,
                    top: 11,
                    color: 'black',
                    fontSize: 28
                }}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={!verSenha ? true : false}
                placeholder={placeholder}
                placeholderTextColor={'gray'} 
                onChangeText={onChangeText}
                value={value}
            />

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 11,
                    right: 15,
                }}
                onPress={()=> setVerSenha(!verSenha)}
            >
              {verSenha ? <Entypo name="eye" size={28} color={'black'}/> 
              :<Entypo name="eye-with-line" size={28} color={'black'}/>}
            </TouchableOpacity>
        </View>
    )
}