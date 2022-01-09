import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
} from 'react-native';
import i18n from '../../../utils/textLanguages';

const InputPrice = (props) => {
    return (
        <View style={styles.box}>
            <View>
                <Text style={[styles.labelStyle, { color: 'black' }]}>{i18n.t('price')}</Text>
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
        justifyContent: 'space-around',
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
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5,
        color: 'white',
    }
});

export default InputPrice;