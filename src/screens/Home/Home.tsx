import { View, Image } from "react-native";
import { styles } from "./HomeStyles";
import { StatusBar } from 'expo-status-bar';
import { ButtonBt } from '../../components/Button/ButtonBt'
import {ImgLogo} from '../../components/ImgLogo/ImgLogo'

export const Home = ({navigation}: any) =>{

    const goTo = () =>{
        navigation.navigate('cadastro');
    }

    return(
        <View style={styles.container}>      
            <ImgLogo />
            <ButtonBt texto={'activate bat signal'} goTo={goTo}/>        
            <StatusBar style="auto" />
        </View>
    )
}