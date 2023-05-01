import React from "react";
import { Text, StyleSheet } from "react-native";
import themes from '../assets/themes';


const styles = StyleSheet.create({
  text: {
  color: themes.colors.textPrimary,
  fontSize: themes.fontSizes.body,
  fontWeight: themes.fontWeights.normal,
  fontFamily: themes.fonts.main
  },
  colorPrimary:{
   color: themes.colors.primary
  },
  colorSecondary:{
   color: themes.colors.textSecondary
  },
  bold: {
   fontWeight: themes.fontWeights.bold
  },
 
 subheading: {
   fontSize: themes.fontSizes.subheading
 }
});
export default function StyledText({children, color, fontSizes, fontWeight, style, ...restOfPros }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary, 
    color === 'secondary' && styles.colorSecondary,
    fontSizes === 'subheading' && styles.subheading,
    fontWeight ==='bold' && styles.bold,
   
  ];

  return <Text style={textStyles}{...restOfPros}>
  {children}
  </Text>;
}
