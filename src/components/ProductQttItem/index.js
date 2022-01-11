import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import i18n from '../../utils/textLanguages';

const ProductQttItem = (props) => {
    return (
        props.product?.price ?
            <TouchableOpacity style={styles.box} onPress={()=>props.productClickHandler(props.product)}>
                <Text>{i18n.t('product')} {props.product?.order}</Text>
                <Text>{i18n.t('price')}: ${Number(props.product?.price).toFixed(2)}</Text>
                <Text>{i18n.t('quantity')}: {Number(props.product?.qtt).toFixed(2)}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.box} onPress={() => props.addHandler()}>
                <FontAwesome5
                    style={styles.menuItemIcon}
                    name='plus-square'
                    size={55}
                    color='black'
                />
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        width: '45%',
        marginLeft: 12,
        marginTop: 12,
        borderRadius: 7,
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
    },
    menuItemIcon: {

    }
})

export default ProductQttItem;