import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const InputMeasure = (props) => {
    return (
        <View style={styles.box}>
            <View>
                <Text style={[styles.labelStyle, {fontSize: props.fontSize || 16}]}>{props.label}</Text>
            </View>
            <TouchableOpacity onPress={props.action}>
                <TextInput
                    style={[styles.txtInput, {borderColor: props.dangerColor || 'black', fontSize: props.inputSize || 20,}]}
                    value={props.value.toString()}
                    ref={props.elementRef}
                    placeholder={props.placeholder || ''}
                    editable={false}
                    onSubmitEditing={() => props.onSubmit ? props.onSubmit() : null}
                />
            </TouchableOpacity>
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
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        
    }
});

export default InputMeasure;