/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';



export default function App(){


  const [height,setHeight]=useState('');
  const [weight,setWeight]=useState('');
  const [bmi,setBMI]=useState(0);

  const calcbmi=()=>
  {
    const h_sq=+height*+height;
    console.log(h_sq)
    const weit=parseInt(weight);
    setBMI(weit/h_sq);

  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>"BMI Calculator"</Text>
      <View style={styles.inputcontainer}>
        <TextInput
        placeholder='Enter Height'
        onChangeText={(newText) => setHeight(newText)}
          value={height}
        />
        <TextInput
        placeholder='Enter Weight'
        onChangeText={(newText) => setWeight(newText)}
          value={weight}
        />

        <Text>BMI:{bmi}</Text>
        <Button
          title='Calculate'
          onPress={calcbmi}
        />
      </View>
    </View>
  );
}

const styles=StyleSheet.create({

  container: {
    flex:1,
    padding:16
  },

  title: {
    fontSize:16,
    alignItems:'center'
  },

  inputcontainer: {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  }

})
