import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Pressable,
    View,
    Text,
} from 'react-native';

const ActionButtons = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
            <Pressable
                style={[styles.button, { backgroundColor: '#1212FF' }]}
                onPress={() => props.btn1Pressed()}
            >
                <Text style={styles.textStyle}>{props.btn1Text}</Text>
            </Pressable>
            <Pressable
                style={[styles.button, { backgroundColor: '#FF2323' }]}
                onPress={() => props.btn2Pressed()}
            >
                <Text style={styles.textStyle}>{props.btn2Text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 12,
      elevation: 2,
      marginLeft: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });

export default ActionButtons;