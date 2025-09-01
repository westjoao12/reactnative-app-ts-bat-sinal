import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home/Home';
import {Formulario} from '../screens/Formulario/Formulario';

const {Screen, Navigator} = createStackNavigator();

export const Routes = () => {
    return (

        <Navigator>
            <Screen
                name='home'
                component={Home}
                options={{
                    title: 'Bat Sinal',
                    headerTintColor: 'white',
                    headerShown: false
                }}
            />

            <Screen 
                name='cadastro'
                component={Formulario}
                options={{
                    title: 'Cadastro',
                    headerTintColor: 'white',
                    headerShown: false
                }}
            
            />
        </Navigator>

    );
}