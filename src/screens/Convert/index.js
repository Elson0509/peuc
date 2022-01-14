import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import InputQtt from '../../components/Inputs/InputQtt';
import InputMeasure from '../../components/Inputs/InputMeasure';
import ModalSelectOptions from '../../components/Modals/ModalSelectOptions'
import { validateNumberStringWith2Decimals } from '../../utils/serviceFunctions'
import i18n from '../../utils/textLanguages';
import ResultBox from '../../components/ResultBox';

const Convert = (props) => {
    const [value, setValue] = useState('')
    const [fromMeasure, setFromMeasure] = useState('')
    const [toMeasure, setToMeasure] = useState('')
    const [modalFrom, setModalFrom] = useState(false)
    const [modalTo, setModalTo] = useState(false)
    const [result, setResult] = useState('')

    const onValueChange = text => {
        const validateNumber = validateNumberStringWith2Decimals(text)
        if (validateNumber){
            setValue(validateNumber)
            if(!fromMeasure || !toMeasure){
                return setResult('')
            }
            //calculate
            //setResult(validateNumber + ' ' + toMeasure.symbol)
            setResult(calculateResult(validateNumber, fromMeasure, toMeasure))
        }
        if (text == ''){
            setValue('')
            setResult('')
        }
    }

    const selectFromHandler = measure => {
        setFromMeasure(measure)
        setModalFrom(false)
        if(!value || !toMeasure)
            setResult('')
        else{
            //setResult(value + ' ' + toMeasure.symbol)
            setResult(calculateResult(value, measure, toMeasure))
        }
        
    }
    const selectToHandler = measure => {
        setToMeasure(measure)
        setModalTo(false)
        if(!value || !fromMeasure)
            setResult('')
        else{
            //setResult(value + ' ' + measure.symbol)
            setResult(calculateResult(value, fromMeasure, measure))
        }
    }

    const calculateResult = (number, fromM, toM) => {
        const result = number * fromM.factor / toM.factor
        return result.toFixed(2) + ' ' + toM.symbol
    }

    return (
        <View style={[styles.container, { backgroundColor: props.route.params.backgroundColor }]}>
            <InputQtt
                value={value}
                changed={onValueChange}
                label={i18n.t('value')}
                fontSize={25}
            />
            <InputMeasure
                label={i18n.t('from')}
                value={fromMeasure?.name || ''}
                action={() => setModalFrom(true)}
                fontSize={25}
                inputSize={15}
            />
            <InputMeasure
                label={i18n.t('to')}
                value={toMeasure?.name || ''}
                action={() => setModalTo(true)}
                fontSize={25}
                inputSize={15}
            />
            <ModalSelectOptions
                close={() => setModalFrom(false)}
                modal={modalFrom}
                measures={props.route.params.measures}
                action={selectFromHandler}
            />
            <ModalSelectOptions
                close={() => setModalTo(false)}
                modal={modalTo}
                measures={props.route.params.measures}
                action={selectToHandler}
            />
            {
                !!result && <ResultBox
                    value={result}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    }
})

export default Convert;