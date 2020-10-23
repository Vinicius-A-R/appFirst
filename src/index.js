import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  img: {
    width: 250,
    height: 250,
  },
  textPhrase: {
    color: '#dd7b22',
    fontSize: 24,
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  btn: {
    width: 230,
    height: 48,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 24,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#dd7b22',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default function App() {
  const [broke, setBroke] = useState(false);
  const phrases = [
    'Phrase 1',
    'Phrase 2',
    'Phrase 3',
    'Phrase 4',
    'Phrase 5',
    'Phrase 6',
    'Phrase 7',
    'Phrase 8',
    'Phrase 9',
    'Phrase 10',
  ];
  const [phrase, setPhrase] = useState('Lucky Cookie');

  const brokeCookie = () => {
    const num = Math.floor(Math.random() * phrases.length);

    setPhrase(phrases[num]);
    setBroke(true);
  };

  return (
    <View style={styles.container}>
      {broke ? (
        <Image
          source={require('./assets/biscoitoAberto.png')}
          style={styles.img}
        />
      ) : (
        <Image source={require('./assets/biscoito.png')} style={styles.img} />
      )}

      <Text style={styles.textPhrase}>{phrase}</Text>

      <TouchableOpacity style={styles.btn} onPress={brokeCookie}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>break cookie</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
