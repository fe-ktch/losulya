import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

function calcWeight(chestCircum, length) {
  let horseWeight = chestCircum * chestCircum * length;
  return horseWeight;
}

export default function App() {
  const [chestCircum, setChestCircum] = useState('');
  const [length, setLength] = useState('');
  const [horseWeight, setHorseWeight] = useState('');

  function startCalculation() {
    let horseWeight = calcWeight(chestCircum, length);
    setHorseWeight(horseWeight);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        The Carroll and Huntington weight estimation
      </Text>

      <View style={styles.body}>

        <Text style={styles.label}>Circumference of the horse's chest</Text>
        <TextInput style={styles.input} onChangeText={circumInput => setChestCircum(circumInput)}/>

        <Text style={styles.label}>Length of the horse</Text>
        <TextInput style={styles.input} onChangeText={lengthInput => setLength(lengthInput)}/>

        <Button 
        onPress={startCalculation}
        style={styles.button}
        />

        <TextInput 
        style={styles.output}
          value={horseWeight}
          editable = {false}
        />

      </View>

        <Text style={styles.footer}>
          Sangare F. Felisha, Szoft II N, 2023-04-17
        </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#00104B',
    width: '100%',
    height: 100,
    padding: 10,
    textAlign: 'center',
    fontSize: 25,
    color: '#7AAEFF'
  },
  label: {
    color: "#2B3C57",
    fontSize: 20,
    margin: 5,
  },
  input: {
    borderRadius: 30,
    margin: 15,
    padding: 25,
    backgroundColor: 'white',
    height: 35,
    width: '90%',
    textAlign: 'center',
  },
  output: {
    borderRadius: 30,
    margin: 15,
    padding: 25,
    height: 35,
    width: '90%',
    fontSize: 45,
    color: "#2B3C57",
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#000A2F',
    width: '100%',
    height: 50,
    padding: 10,
    textAlign: 'center',
    fontSize: 10,
    color: '#7AAEFF'
  },
  body: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
