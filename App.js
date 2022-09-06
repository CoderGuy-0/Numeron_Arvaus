import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { Image } from 'react-native';

export default function App() {

  const [arvaus, setGuess] = useState("");
  const [rnd, setRnd] = useState(haeRandomSata(100));
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);

function haeRandomSata (max) {
  return Math.floor(Math.random() * max);
}

const tarkistaArvaus = () => {
  setMsg(haeViesti(arvaus, rnd));
  setCount((count) => count + 1);
};

function haeViesti(arvaus, rnd) {
  const arvausNum = Number(arvaus);
  if (arvausNum < rnd) return "too low";
  if (arvausNum > rnd) return "too high";
  if (arvausNum === rnd) return Alert.alert('You guessed the number in ' + count)
}

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1-100</Text>
      <TextInput
      type="number"
      placceholder="0"
      keyboardType='numeric'
      style= {{borderColor: 'gray', borderWidth: 1, width: 200}}
      onChangeText= {text => setGuess(text) }
      />

<Text>Your guess {arvaus} is {msg}  </Text>
      <Button
      title="MAKE GUESS"
      onPress ={tarkistaArvaus}>
        </Button>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
