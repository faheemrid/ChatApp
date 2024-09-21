import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const ChatInput = ({ addMessage }) => {
    const [text, setText] = useState('');
    const handleSend = () => {
        if (text) {
            addMessage(text);
            setText('');
        }
    };
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Type a message"
            />
            <Button title="Send" onPress={handleSend} />
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'skyblue',
        padding: 10,
        borderRadius: 16,
        marginRight: 10,
    },
});
export default ChatInput;
