import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,

        
    },
    labelTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        alignSelf: 'flex-start',
        marginTop: 12,
        marginBottom: 10,
        marginLeft: 39,
    },
    img:{
        width: 100,
        height:100,
        resizeMode: 'contain',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 20,

    },
    labelTitleSecond: {
        fontSize: 16,
        letterSpacing: 0.25,
        alignSelf: 'flex-start',
        marginTop: 10,
        marginLeft: 39,
        marginBottom: 12

    },
    textArea: {
        borderRadius: 6,
        borderWidth: 3,
        borderColor: '#333333',
        width: '80%',
        height: 120,
        textAlignVertical: 'top',
        padding: 15
    }
});