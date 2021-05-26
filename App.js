import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}/>
      <Button title="Add"/>
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black', borderWidth: 1, padding: 10, width: '80%'
  }
});
