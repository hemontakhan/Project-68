import React from 'react';
import { Text, View,StyleSheet} from 'react-native';

export default class FbScreen extends React.Component {
    render() {
      return (
        <View style={Styles.container}>
          <Text style={styles.design}>FaceBook</Text>
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
    design:{
      fontSize:30,
      color:'blue',
      justifyContent:'center',
      alignItems:'center'
    }
  })