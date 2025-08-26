import { Pressable , Text } from "react-native";
import {styles} from './ButtonBtStyles'

interface ButtonBtProps {
    texto: string
}

export const ButtonBt = (props: ButtonBtProps) =>{
    return(
        <Pressable style={styles.btn}>
            <Text style={styles.txt}>{props.texto}</Text>
        </Pressable>
    )
}