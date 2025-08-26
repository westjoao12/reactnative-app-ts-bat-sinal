import {View, Text, Image, TextInput} from 'react-native';

import {InputText} from '../../components/InputText/InputText'
import {styles} from './FormularioStyles';
import {ButtonBt} from '../../components/Button/ButtonBt'
const imgLogo = require('../../../assets/batlogo.png')

export const Formulario = () => {
    return(
        <View style={styles.container}>
            <Image source={imgLogo}  style={styles.img}/>
            <InputText />
            <Text style={styles.labelTitle}>Label</Text>
            <InputText />
            <Text style={styles.labelTitleSecond}>This is your hint</Text>

            <TextInput  placeholder='Your text here...' editable multiline={true} numberOfLines={4} maxLength={400} style={styles.textArea}></TextInput>

            <Text style={styles.labelTitle}>Label</Text>

            <TextInput  placeholder='Your text here...' editable multiline={true} numberOfLines={4} maxLength={400} style={styles.textArea}></TextInput>

            <Text style={styles.labelTitleSecond}>This is your hint</Text>

            <ButtonBt texto={'Enviar'} />
        </View>
    )
}