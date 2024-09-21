import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ChatList = ({ message }) => {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    messageContainer: {
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    message: {
        fontSize: 20,
    },
});
export default ChatList;
