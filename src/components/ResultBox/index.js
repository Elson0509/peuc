import React from 'react';
import { StyleSheet, Text, View, Modal, FlatList, TouchableOpacity } from 'react-native'

const ResultBox = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textResult}>{props.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 25,
        marginTop: 20,
        borderColor: 'white'
    },
    textResult: {
        textAlign: 'center',
        padding: 20,
        fontSize: 30,
        backgroundColor: '#630436',
        borderRadius: 25,
        color: 'white',
    }
})

export default ResultBox;