import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';

const InputQtt = (props) => {
    return (
        <View style={styles.box}>
            <View>
                <Text style={styles.labelStyle}>{props.label}</Text>
            </View>
            <View>
                <TextInput
                    style={[styles.txtInput]}
                    keyboardType={"decimal-pad"}
                    value={props.value.toString()}
                    onChangeText={props.changed}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginBottom: 7,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    txtInput: {
        borderWidth: 1,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        paddingLeft: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        color: 'black',
        borderRadius: 5,
        width: 150,
        height: 50,
    },
    labelStyle: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        
    }
});

export default InputQtt;