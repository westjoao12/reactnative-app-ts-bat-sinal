
import React, {useState} from 'react'
import { StyleSheet, View , ScrollView} from 'react-native';
import { Home } from './src/screens/Home/Home';
import {Formulario} from './src/screens/Formulario/Formulario'

export default function App() {
  const [BatSinal, setBatSinal] = useState(false);

  const handleAtivar = () => {
    

  }

  return (
    <>
      <Formulario />
      {/*<Home />*/}
    </>      
  );
}

const styles = StyleSheet.create({
  container: { 
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  }
})
