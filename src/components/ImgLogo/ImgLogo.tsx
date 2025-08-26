import { View, Image} from 'react-native';
import {styles} from './ImgLogoStyles';
const img = require('../../../assets/batlogo.png');

export const ImgLogo = () => {
    return(
        <View style={styles.container}>
            <Image source={img} style={styles.logo}/>
        </View>
    )
 }