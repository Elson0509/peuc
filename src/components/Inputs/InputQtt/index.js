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
                <Text style={[styles.labelStyle, {fontSize: props.fontSize || 16}]}>{props.label}</Text>
            </View>
            <View>
                <TextInput
                    style={[styles.txtInput, {borderColor: props.dangerColor || 'black'}]}
                    keyboardType={"decimal-pad"}
                    value={props.value.toString()}
                    onChangeText={props.changed}
                    placeholder={props.placeholder || ''}
                    ref={props.elementRef}
                    onSubmitEditing={() => props.onSubmit ? props.onSubmit() : null}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginBottom: 7,
        flexDirection: 'column',
        display: 'flex',
        width: '100%',
        marginBottom: 18
    },
    txtInput: {
        borderWidth: 2,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        paddingLeft: 10,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        width: '100%',
        height: 50,
    },
    labelStyle: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
        
    }
});

export default InputQtt;