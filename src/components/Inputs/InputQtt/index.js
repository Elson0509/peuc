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
                <Text style={[styles.labelStyle, {fontSize: props.fontSize || 20}]}>{props.label}</Text>
            </View>
            <View>
                <TextInput
                    style={[styles.txtInput, {borderColor: props.dangerColor || 'black'}]}
                    keyboardType={"decimal-pad"}
                    value={props.value.toString()}
                    onChangeText={props.changed}
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
        color: 'black',
        borderRadius: 5,
        width: 180,
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