import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {YMChat} from 'ymchat-react-native';

// const App: () => Node = () => {
const App = () => {
  const onPress = () => {
    const token = 'x1695121824214';
    YMChat.setBotId('x1695121824214');
    YMChat.setDeviceToken(token);
    YMChat.startChatbot();
  };

  return (
    <>
      <View style={styles.fixToText}>
        <Button title="Start Chatbot" onPress={onPress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
  },
});

export default App;
