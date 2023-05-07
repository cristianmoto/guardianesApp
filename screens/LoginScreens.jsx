import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font';
const LoginScreens = () => {



    const [fontsLoaded] = useFonts({
      Bruno: require('../assets/fonts/Bruno.ttf'),
      Guardians: require('../assets/fonts/Guardians.ttf'),
    });
  
    if (!fontsLoaded) {
      return null;
    }
    return (
       
            <View style={styles.container}>
              <Text style={styles.title}>Guardianes</Text>
              <Text style={styles.title2}>de la</Text>
              <Text style={styles.title}>Galaxia</Text>
              <Text style={styles.subtitle}>Inicia con tu cuenta</Text>
              <Text  style={styles.texto}>E-mail</Text>
              <TextInput style={styles.Input} placeholder ="yo@guardianes.com"></TextInput>
              <Text  style={styles.texto}>Constraseña</Text>
              <TextInput style={styles.Input} placeholder="Password"></TextInput>
             
              <StatusBar style="auto" />
            </View>
          
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001623',
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 40,   
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: ' Guardians',
      color: '#daa520',
      textShadowColor: '#fff',
      textShadowOffset: { width: 0.8, height: 0.7 },
      textShadowRadius: 2,
  
     
  
    },
    texto:{
      color: '#f2f2f2',
      fontSize: 20,
      fontFamily: 'Bruno',
    },
    title2: {
      fontSize: 20,
      fontFamily: ' Guardians',
      justifyContent: 'center',
      alignItems: 'center',
      color:'#daa520',
      textShadowColor: '#fff',
      textShadowOffset: { width: 0.8, height: 0.7 },
      textShadowRadius: 2,
  
    },
    subtitle: {
      fontSize: 30,
      color: "gray",
    },
    Input:{
      padding: 10,
      height: 50,
      color: 'darkseagreen',
      fontWeight: 'normal',
      borderRadius: 10,
      width: '80%',
      backgroundColor: '#fff',
      marginTop: 20,
      fontSize: 20,
      fontWeight: '400'
  
    }
   
  });
  
 
  

export default LoginScreens;
