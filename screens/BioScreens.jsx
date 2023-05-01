import React from 'react';
import {View, StyleSheet, Text,FlatList} from 'react-native';
import data from '../../../Again/uno/src/componentes/data';
import BiosItem from '../src/BiosItem';



const BioScreens = () => {
    return (
     <FlatList 
        data={data}
        renderItem={({item:props})=>(
            <BiosItem {...props}/>
        )}
        />
    );
}

const styles = StyleSheet.create({})

export default BioScreens;
