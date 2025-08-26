import { View, Image } from "react-native";
import { styles } from "./HomeStyles";
import { StatusBar } from 'expo-status-bar';
import { ButtonBt } from '../../components/Button/ButtonBt'
import {ImgLogo} from '../../components/ImgLogo/ImgLogo'

export const Home = () =>{
    return(
        <View style={styles.container}>      
            <ImgLogo />
            <ButtonBt texto={'activate bat signal'}/>        
            <StatusBar style="auto" />
        </View>
    )
}