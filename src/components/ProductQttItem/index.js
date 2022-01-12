import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import i18n from '../../utils/textLanguages';
import {
    BORDER_COLOR_ITEM_LIST, 
    BORDER_COLOR_ITEM_LIST_EXPENSIVE, 
    BORDER_COLOR_ITEM_LIST_CHEAP,
    BACKGROUND_COLOR_ITEM_LIST_EXPENSIVE,
    BACKGROUND_COLOR_ITEM_LIST_CHEAP
} from '../../utils/Constants'

const ProductQttItem = (props) => {
    let borderColor
    let backgroundColor
    if (props.product.isCheaper === undefined) {
        borderColor = BORDER_COLOR_ITEM_LIST
    }
    else {
        borderColor = props.product.isCheaper ? BORDER_COLOR_ITEM_LIST_CHEAP : BORDER_COLOR_ITEM_LIST_EXPENSIVE
        backgroundColor = props.product.isCheaper ? BACKGROUND_COLOR_ITEM_LIST_CHEAP : BACKGROUND_COLOR_ITEM_LIST_EXPENSIVE
    }

    return (
        props.product?.price ?
            <TouchableOpacity style={[styles.box, { borderColor, backgroundColor }]} onPress={() => props.productClickHandler(props.product)}>
                <Text style={styles.title}>{i18n.t('item')} {props.product?.order}</Text>
                <Text>{i18n.t('price')}: ${Number(props.product?.price).toFixed(2)}</Text>
                <Text>{i18n.t('quantity')}: {Number(props.product?.qtt).toFixed(2)} {!!props.product.type?.symbol ? props.product.type.symbol : ''}</Text>
                
                {
                    props.product.isCheaper !== undefined && props.product.isCheaper &&
                    <View style={[styles.boxExpensive]}>
                        <FontAwesome5
                            style={styles.menuItemIcon}
                            name='thumbs-up'
                            size={55}
                            color={BORDER_COLOR_ITEM_LIST_CHEAP}
                        />
                    </View>
                }
                {
                    props.product.isCheaper !== undefined && !props.product.isCheaper &&
                    <View style={[styles.boxExpensive]}>
                        <FontAwesome5
                            style={styles.menuItemIcon}
                            name='long-arrow-alt-up'
                            size={55}
                            color={BORDER_COLOR_ITEM_LIST_EXPENSIVE}
                        />
                        <Text style={styles.boxExpensivePercentage}>
                            {props.product.howMuchExpensive.toFixed(1)}%
                        </Text>
                    </View>
                }
            </TouchableOpacity>
            :
            <TouchableOpacity style={[styles.box, styles.plusBox]} onPress={() => props.addHandler()}>
                <FontAwesome5
                    style={styles.menuItemIcon}
                    name='plus-square'
                    size={100}
                    color={BORDER_COLOR_ITEM_LIST}
                />
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        marginBottom: 10,
    },
    plusBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: '45%',
        marginLeft: 12,
        marginTop: 12,
        borderRadius: 7,
        padding: 15,
        alignItems: 'center',
        borderWidth: 2,
    },
    boxExpensive: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    boxExpensivePercentage: {
        color: BORDER_COLOR_ITEM_LIST_EXPENSIVE,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default ProductQttItem;