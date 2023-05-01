import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import StyledText from "../../../Again/uno/src/componentes/StyledText";

const BioStats = (props) => (
    <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
    <StyledText color="primary">Edad: {props.edad}</StyledText>
    <StyledText color="primary">Peliculas: {props.peliculas}</StyledText>
  </View>
);
const BiosItem = (props) => (
    <View key={props.id} style={styles.container}>
    <Image source={{uri:props.img}}style={styles.image} />
      <StyledText fontWeight="bold">Heroe: {props.id}</StyledText>
      <StyledText fontWeight="normal" color="primary">
        ALias: {props.alias}
      <StyledText color="secondary">Especie: {props.especie}</StyledText>
      <StyledText color="secondary">Poder: {props.poder}</StyledText>
      </StyledText>
      <RepoStats {...props}/>
    </View>
  );
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingTop: 5,
      paddingBottom: 5,
    },
    image: {
      width: 68,
      height: 68,
      borderRadius: 4,
      overflow: "hidden"
    }
  
  });
  
  export default BiosItem;