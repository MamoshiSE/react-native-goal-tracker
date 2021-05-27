import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

// flatlist is lazyloading use when working with big data
export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goalTitle => {
    // take the previous state and adds the new goal to the state
    setCourseGoals(prevGoals => [...prevGoals, { key: Math.random().toString(), value: goalTitle}])
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem title={itemData.item.value}/>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
