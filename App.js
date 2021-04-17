import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [user, setUser] = useState("Simon")
  return (
    <View style={styles.container}>
      <Text style={styles.mystyle}>{user}</Text>
      <View style={styles.buttonstyle}><Button title="Change"/></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mystyle:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: 'yellow',
  },
  buttonstyle:{
    marginTop: 30,
  }
});
