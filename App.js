import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screen/StartGame';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess No Game" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
