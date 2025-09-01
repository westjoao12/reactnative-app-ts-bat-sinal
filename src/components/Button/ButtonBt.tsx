import { Pressable , Text } from "react-native";
import {styles} from './ButtonBtStyles'
import { useState } from "react";

interface ButtonBtProps {
    texto: string,
    goTo: any
}

export const ButtonBt = (props: ButtonBtProps) =>{
    return(
        <Pressable style={styles.btn} onPress={props.goTo}>
            <Text style={styles.txt}>{props.texto}</Text>
        </Pressable>
    )
}