import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [unit, setUnit] = useState<string>('kg');
  const [result, setResult] = useState<string>('');

  const convert = () => {
    let convertedValue = '';
    switch (unit) {
      case 'kg':
        convertedValue = (parseFloat(value) * 0.453592).toFixed(2);
        break;
      case 'cm':
        convertedValue = (parseFloat(value) * 2.54).toFixed(2);
        break;
      case 'm':
        convertedValue = (parseFloat(value) * 0.3048).toFixed(2);
        break;
      default:
        break;
    }
    setResult(`${value} ${unit} is approximately ${convertedValue} ${unit === 'kg' ? 'lb' : 'cm'}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter value"
        keyboardType="numeric"
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[styles.radioButton, unit === 'kg' && styles.selectedRadioButton]}
          onPress={() => setUnit('kg')}
        >
          <Text style={styles.radioText}>Pounds (lb) to Kilograms (kg)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, unit === 'cm' && styles.selectedRadioButton]}
          onPress={() => setUnit('cm')}
        >
          <Text style={styles.radioText}>Inches (in) to Centimeters (cm)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, unit === 'm' && styles.selectedRadioButton]}
          onPress={() => setUnit('m')}
        >
          <Text style={styles.radioText}>Feet (ft) to Meters (m)</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={convert}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
  },
  radioContainer: {
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  selectedRadioButton: {
    backgroundColor: 'lightgray',
  },
  radioText: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
