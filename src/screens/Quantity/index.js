import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import i18n from '../../utils/textLanguages';
import InputPrice from '../../components/Inputs/InputPrice'

const Quantity = (props) => {
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(true)
    const [price, setPrice] = useState('')

    const onPriceChange = text => {
        let countDots = 0
        let decimalPlaces = 0
        for (let i = 0; i < text.length; i++) {
            //counting quantity of dots
            if (text[i] === '.') {
                countDots++
            }
            //checking if character is different from 0-9 && '.'
            if ((text[i] < '0' || text[i] > '9') && text[i] !== '.') {
                return
            }
            //counting decimal places quantity
            if(countDots >= 1 && text[i] !== '.'){
                decimalPlaces++
            }
        }
        if (countDots <= 1 && decimalPlaces <= 2) {
            setPrice(text)
        }
    }

    return (
        <View>
            <Text>
                Quantity
            </Text>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
            >
                <View style={styles.modalView}>
                    <Text>
                        {`${i18n.t('product')} ${products.length + 1}`}
                    </Text>
                    <InputPrice
                        value={price}
                        changed={onPriceChange}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: '#eef',
        padding: 35,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4

    }
})

export default Quantity;