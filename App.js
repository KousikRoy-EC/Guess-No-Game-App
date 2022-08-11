import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screen/StartGame";
import React, { useState } from "react";
import GameScreen from "./screen/GameScreen";
import GameOver from "./screen/GameOver";

export default function App() {
  const [userChoise, setuserChoise] = useState();

  const [rounds, setrounds] = useState(0);

  const onGameOver = (noOfRounds) => {
    setrounds(noOfRounds);
  };

  const setChoise = (choise) => {
    setuserChoise(choise);
    setrounds(0);
  };

  const newGame = () => {
    setuserChoise(null);
    setrounds(0);
  };

  let comp = <StartGame setNoChoise={setChoise} />;

  if (userChoise && rounds === 0) {
    comp = <GameScreen userChoiseNo={userChoise} onGameEnd={onGameOver} />;
  } else if (rounds > 0) {
    comp = (
      <GameOver
        roundsOfGame={rounds}
        onRestart={newGame}
        userScore={userChoise}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess No Game" />
      {comp}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
