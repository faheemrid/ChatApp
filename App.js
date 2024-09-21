import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatInput from './components/ChatInput';
import ChatList from './components/ChatList';
const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatList message={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <ChatInput addMessage={addMessage} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default App;

