import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import i18n from '../../utils/textLanguages';
import InputQtt from '../../components/Inputs/InputQtt';
import ProductQttItem from '../../components/ProductQttItem';
import GenericModal from '../../components/Modals/GenericModal';
import { validateNumberStringWith2Decimals } from '../../utils/serviceFunctions'

const Quantity = (props) => {
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(true)
    const [price, setPrice] = useState('')
    const [qtt, setQtt] = useState('')
    const [order, setOrder] = useState(null)
    const [btn1Text, setBtn1Text] = useState('')
    const [btn3Text, setBtn3Text] = useState('')
    const [dangerColorPrice, setDangerColorPrice] = useState('')
    const [dangerColorQtt, setDangerColorQtt] = useState('')

    const ref_priceInput = useRef()
    const ref_qttInput = useRef()

    const onPriceChange = text => {
        const validateNumber = validateNumberStringWith2Decimals(text)
        if (validateNumber)
            setPrice(validateNumber)
        if (text == '')
            setPrice('')
    }

    const onQttChange = text => {
        const validateNumber = validateNumberStringWith2Decimals(text)
        if (validateNumber)
            setQtt(validateNumber)
        if (text == '')
            setQtt('')
    }

    const addItem = _ => {
        // Validating form
        if (!price) {
            return setDangerColorPrice('red')
        }
        else {
            setDangerColorPrice('')
        }
        if (!qtt) {
            return setDangerColorQtt('red')
        }
        else {
            setDangerColorQtt('')
        }
        //adding item...
        if (!order) {
            const newItem = { id: new Date(), price, qtt }
            setProducts(prev => [...prev, newItem])
        }
        //or updating it in the list
        else {
            const newProducts = [...products]
            newProducts[order - 1] = { id: new Date(), price, qtt }
            setProducts(newProducts)
        }
        setModal(false)
    }

    const productsList = _ => {
        let cheapper = 0
        let productList = products.map((el, ind) => { 
            const relativePrice = el.price / el.qtt
            if (cheapper == 0 || relativePrice < cheapper){
                cheapper = relativePrice
            }
            return { ...el, order: ind + 1, relativePrice } }
        )
        //calculate cheapest product if there are at least 2 products
        if(productList.length >=2){
            productList = productList.map(el=>{
                const prod = {...el}
                prod.isCheaper = el.relativePrice === cheapper
                prod.howMuchExpensive = (el.relativePrice - cheapper) / cheapper * 100
                return prod
            })
        }
        productList.push({ id: new Date() })
        return productList
    }

    const addHandler = _ => {
        setDangerColorPrice('')
        setDangerColorQtt('')
        setBtn1Text('')
        setPrice('')
        setQtt('')
        setBtn3Text('')
        setOrder(null)
        setModal(true)
    }

    const productClickHandler = product => {
        setBtn1Text(i18n.t('update'))
        setBtn3Text(i18n.t('remove'))
        setPrice(product.price)
        setQtt(product.qtt)
        setOrder(product.order)
        setModal(true)
    }

    const removeHandler = () => {
        const newProducts = [...products]
        newProducts.splice(order-1, 1)
        setProducts(newProducts)
        setModal(false)
    }

    return (
        <View>
            <FlatList
                numColumns={2}
                data={productsList()}
                keyExtractor={item => item.id}
                renderItem={(obj) => (
                    <ProductQttItem
                        product={obj.item}
                        addHandler={addHandler}
                        productClickHandler={productClickHandler}
                    />
                )}
            />
            <GenericModal
                modal={modal}
                action1={() => addItem()}
                action2={() => setModal(false)}
                action3={() => removeHandler()}
                btn1Text={btn1Text}
                btn3Text={btn3Text}
                onShow={()=>ref_priceInput.current.focus()}
            >
                <Text style={styles.titleModal}>
                    {`${i18n.t('product')} ${order ? order : products.length + 1}`}
                </Text>
                <InputQtt
                    value={price}
                    changed={onPriceChange}
                    label={i18n.t('price')}
                    dangerColor={dangerColorPrice}
                    elementRef={ref_priceInput}
                    onSubmit={()=>ref_qttInput.current.focus()}
                />
                <InputQtt
                    value={qtt}
                    changed={onQttChange}
                    label={i18n.t('quantity')}
                    dangerColor={dangerColorQtt}
                    elementRef={ref_qttInput}
                    onSubmit={()=>addItem()}
                />
            </GenericModal>
        </View>
    );
};

const styles = StyleSheet.create({
    titleModal: {
        fontSize: 20,
        marginBottom: 10,
    },
})

export default Quantity;