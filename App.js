import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

// flatlist is lazyloading use when working with big data
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    // take the previous state and adds the new goal to the state
    setCourseGoals(prevGoals => [...prevGoals, { id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(prevGoals => {
      return prevGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelAddGoal = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelAddGoal}/>
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
