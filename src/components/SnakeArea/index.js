import React, {useEffect, useState} from 'react';
import {View, Dimensions, FlatList, SafeAreaView, Text} from 'react-native';
import Controller from '../Controller';
import ModalGameOver from '../Modal';
import styles from './styles';

const {width} = Dimensions.get('screen');

const SnakeArea = () => {
  const [snakeCoordinates, setSnakeCoordinates] = useState([
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
  ]);
  const [moveDirection, setMoveDirection] = useState([1, 0]);
  const [paused, setPaused] = useState(false);
  const [food, setFood] = useState([5, 1]);
  const [modalVisible, setModalVisible] = useState(false);
  const [speed, setSpeed] = useState(400);
  const [crashed, setCrashed] = useState(false);
  useEffect(() => {
    if (!paused) {
      let interval = setInterval(() => {
        moveSnake();
        snakeCrashed();
      }, speed);
      return () => clearInterval(interval);
    }
  }, [snakeCoordinates, paused]);
  //(snakeCoordinates);
  console.log(food);
  const gameAreaSize = {x: 10, y: 11};
  const margin = 1;
  const snakeDotSize =
    (width - 4 - gameAreaSize.x * 2 * margin) / gameAreaSize.x;
  const snakeDotStyles = {
    width: snakeDotSize,
    height: snakeDotSize,
    margin: margin,
  };
  const snakeContainerStyle = {
    height: (width * gameAreaSize.y) / gameAreaSize.x,
  };

  const randomFood = () => {
    let x = Math.floor(Math.random() * (gameAreaSize.y - 1));
    let y = Math.floor(Math.random() * (gameAreaSize.x - 1));
    setFood([x, y]);
    for (let i = 0; i < snakeCoordinates.length - 1; i++) {
      if (
        snakeCoordinates[i][0] === food[0] &&
        snakeCoordinates[i][1] === food[1]
      ) {
        randomFood();
      } else {
        console.log('ONUDA KIYASLAMAYAK');
      }
    }
  };
  const snakeGhoustMode = () => {
    let ghoustModeSnakeCoordinates = snakeCoordinates.map(coordinate => [
      coordinate[0] === 0
        ? gameAreaSize.y - 1
        : coordinate[0] === gameAreaSize.y
        ? 0
        : coordinate[0],
      coordinate[1] === 0
        ? gameAreaSize.x - 1
        : coordinate[1] === gameAreaSize.x
        ? 0
        : coordinate[1],
    ]);
    setSnakeCoordinates(ghoustModeSnakeCoordinates);
  };

  function moveSnake() {
    let tempSnake = snakeCoordinates;
    if (
      snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0] ===
        food[0] &&
      snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1] ===
        food[1]
    ) {
      tempSnake.push([
        snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0] ===
        gameAreaSize.y
          ? 0
          : snakeCoordinates[snakeCoordinates.length - 1][0] +
              moveDirection[0] ===
            -1
          ? gameAreaSize.y - 1
          : snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0],
        snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1] ===
        gameAreaSize.x
          ? 0
          : snakeCoordinates[snakeCoordinates.length - 1][1] +
              moveDirection[1] ===
            -1
          ? gameAreaSize.x - 1
          : snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1],
      ]);
      setSpeed(speed - speed / 10);
      randomFood();
    } else if (
      (snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0] ===
        gameAreaSize.y &&
        food[0] === 0) ||
      (snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1] ===
        gameAreaSize.x &&
        food[1] === 0)
    ) {
      tempSnake.push([
        snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0] ===
        gameAreaSize.y
          ? 0
          : snakeCoordinates[snakeCoordinates.length - 1][0] +
              moveDirection[0] ===
            -1
          ? gameAreaSize.y - 1
          : snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0],
        snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1] ===
        gameAreaSize.x
          ? 0
          : snakeCoordinates[snakeCoordinates.length - 1][1] +
              moveDirection[1] ===
            -1
          ? gameAreaSize.x - 1
          : snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1],
      ]);
      setSpeed(speed - speed / 10);
      randomFood();
    } else {
      tempSnake.shift();
      tempSnake.push([
        snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0] ===
        gameAreaSize.y
          ? 0
          : snakeCoordinates[snakeCoordinates.length - 1][0] +
              moveDirection[0] ===
            -1
          ? gameAreaSize.y - 1
          : snakeCoordinates[snakeCoordinates.length - 1][0] + moveDirection[0],
        snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1] ===
        gameAreaSize.x
          ? 0
          : snakeCoordinates[snakeCoordinates.length - 1][1] +
              moveDirection[1] ===
            -1
          ? gameAreaSize.x - 1
          : snakeCoordinates[snakeCoordinates.length - 1][1] + moveDirection[1],
      ]);
    }
    setSnakeCoordinates([...tempSnake]);
  }

  const snakeDot = ({item, index}) => {
    return (
      <View
        key={index}
        style={[
          styles.snake,
          snakeDotStyles,
          {
            position: 'absolute',
            top: (item[0] * width) / gameAreaSize.x,
            left: (item[1] * width) / gameAreaSize.x,
            zIndex: 2,
          },
        ]}
      />
    );
  };
  const moveLeft = () => {
    moveDirection[0] !== 0 &&
      moveDirection[1] !== 1 &&
      setMoveDirection([0, -1]);
  };
  const moveRight = () => {
    moveDirection[0] !== 0 &&
      moveDirection[1] !== -1 &&
      setMoveDirection([0, 1]);
  };
  const moveUp = () => {
    moveDirection[0] !== 1 &&
      moveDirection[1] !== 0 &&
      setMoveDirection([-1, 0]);
  };
  const moveDown = () => {
    moveDirection[0] !== -1 &&
      moveDirection[1] !== 0 &&
      setMoveDirection([1, 0]);
  };

  const snakeCrashed = () => {
    for (let i = 0; i < snakeCoordinates.length - 1; i++) {
      if (
        snakeCoordinates[i][0] ===
          snakeCoordinates[snakeCoordinates.length - 1][0] &&
        snakeCoordinates[i][1] ===
          snakeCoordinates[snakeCoordinates.length - 1][1]
      ) {
        gameOver();
      } else {
        null;
      }
    }
  };
  const scoreStyle = {
    width: width - margin * 2,
    height: ((width - margin * 2) * gameAreaSize.y) / gameAreaSize.x,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const gameOver = () => {
    setCrashed(true);
    setModalVisible(true);
    setPaused(true);
  };

  const pauseAndPlayGame = () => {
    crashed ? reStartGame() : paused ? setPaused(false) : setPaused(true);
  };

  const reStartGame = () => {
    setCrashed(false);
    setSnakeCoordinates([
      [1, 4],
      [2, 4],
      [3, 4],
      [4, 4],
      [5, 4],
      [6, 4],
      [7, 4],
      [8, 4],
      [9, 4],
      [10, 4],
      [11, 4],
      [12, 4],
    ]);
    setModalVisible(false);
    setPaused(false);
    setMoveDirection([1, 0]);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ModalGameOver
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        score={snakeCoordinates.length - 6}
        onPress={() => setModalVisible(false)}
        onPressRestart={() => reStartGame()}
      />
      <View style={[styles.main, snakeContainerStyle]}>
        <View style={scoreStyle}>
          <Text style={styles.scoreText}>{snakeCoordinates.length - 6}</Text>
        </View>
        <FlatList
          data={snakeCoordinates}
          extraData={snakeCoordinates}
          renderItem={snakeDot}
          initialNumToRender={gameAreaSize.x * gameAreaSize.y}
        />
        <View
          style={[
            styles.arrow,
            snakeDotStyles,
            {
              position: 'absolute',
              top: (food[0] * width) / gameAreaSize.x,
              left: (food[1] * width) / gameAreaSize.x,
              zIndex: 1,
            },
          ]}
        />
      </View>
      <View>
        <Controller
          paused={paused}
          onPressLeft={() => moveLeft()}
          onPressRight={() => moveRight()}
          onPressDown={() => moveDown()}
          onPressUp={() => moveUp()}
          pauseAndPlayGame={() => pauseAndPlayGame()}
        />
      </View>
    </SafeAreaView>
  );
};
export default SnakeArea;
