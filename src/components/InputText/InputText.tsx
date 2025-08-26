import {TextInput} from 'react-native';
import {styles} from './InputTextStyles';

export const InputText = () => {
    return(
        <TextInput placeholder='Text' style={styles.input}  />
    )
}