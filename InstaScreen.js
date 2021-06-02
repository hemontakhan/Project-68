import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Instascreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text  style={styles.textdesign}>InstaGram</Text>
        </View>
      );
    }
  }

  const styles= StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    textdesign:{
      fontSize:30,
      color:'pink',
      fontStyle:'bold',
      alignItems:'center',
      justifyContent:'center'
    }
  })