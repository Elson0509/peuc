import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import i18n from '../../utils/textLanguages';
import InputQtt from '../../components/Inputs/InputQtt';
import ActionButtons from '../../components/ActionButtons';
import ProductQttItem from '../../components/ProductQttItem';

const Quantity = (props) => {
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(true)
    const [price, setPrice] = useState('')
    const [qtt, setQtt] = useState('')
    const [order, setOrder] = useState(null)

    const onPriceChange = text => {
        const validateNumber = validateNumberWith2Decimals(text)
        if (validateNumber)
            setPrice(validateNumber)
        if (text == '')
            setPrice('')
    }

    const onQttChange = text => {
        const validateNumber = validateNumberWith2Decimals(text)
        if (validateNumber)
            setQtt(validateNumber)
        if (text == '')
            setQtt('')
    }

    const validateNumberWith2Decimals = value => {
        let countDots = 0
        let decimalPlaces = 0
        for (let i = 0; i < value.length; i++) {
            //counting quantity of dots
            if (value[i] === '.') {
                countDots++
            }
            //checking if character is different from 0-9 && '.'
            if ((value[i] < '0' || value[i] > '9') && value[i] !== '.') {
                return
            }
            //counting decimal places quantity
            if (countDots >= 1 && value[i] !== '.') {
                decimalPlaces++
            }
        }
        if (countDots <= 1 && decimalPlaces <= 2) {
            return value
        }
    }

    const addItem = _ => {
        // TODO validate form
        if(!order){
            const newItem = { id: new Date(), price, qtt }
            setProducts(prev=> [...prev, newItem])
        }
        else{
            const newProducts = [...products]
            newProducts[order-1] = { id: new Date(), price, qtt }
            setProducts(newProducts)
        }

        setModal(false)
    }

    const productsList = _ => {
        const productList = products.map((el, ind)=>{return {...el, order: ind+1}})
        productList.push({ id: new Date() })
        return productList
    }

    const addHandler = _ => {
        setPrice('')
        setQtt('')
        setOrder(null)
        setModal(true)
    }

    const productClickHandler = product => {
        setPrice(product.price)
        setQtt(product.qtt)
        setOrder(product.order)
        setModal(true)
        console.log(product)
    }

    console.log(productsList())

    return (
        <View>
            <FlatList
                numColumns={2}
                data={productsList()}
                keyExtractor={item => item.id}
                renderItem={( obj, ind ) => (
                    <ProductQttItem
                        product={obj.item}
                        addHandler={addHandler}
                        productClickHandler={productClickHandler}
                    />
                )}
            />
            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
            >
                <View style={styles.modalView}>
                    <Text style={styles.titleModal}>
                        {`${i18n.t('product')} ${products.length + 1}`}
                    </Text>
                    <InputQtt
                        value={price}
                        changed={onPriceChange}
                        label={i18n.t('price')}
                    />
                    <InputQtt
                        value={qtt}
                        changed={onQttChange}
                        label={i18n.t('quantity')}
                    />
                    <ActionButtons
                        btn1Text={i18n.t('confirm')}
                        btn2Text={i18n.t('cancel')}
                        btn1Pressed={() => addItem()}
                        btn2Pressed={() => setModal(false)}
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    titleModal: {
        fontSize: 20,
        marginBottom: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#efefef',
        padding: 35,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
})

export default Quantity;