import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native'


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

      const addGoalHandler = () => {
         props.onAddGoal(enteredGoal); 
         setEnteredGoal('');
      }
 return (
   <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
    <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}
    value={enteredGoal}/>
    <View style={styles.buttonContainer}>
    <Button title="Add" onPress={addGoalHandler}/>
    <Button title="Cancel" color="red" onPress={props.onCancel}/>
    </View>
    </View>
    </Modal>
 )
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1
      },
      input: {
        borderBottomColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10, width: '80%'
      },

      buttonContainer: {
        flexDirection: 'row', justifyContent: 'space-between', width: '50%'
      }
});
export default GoalInput;