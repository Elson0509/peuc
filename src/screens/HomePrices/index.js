import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import { menuOptionsPrices } from '../../utils/menuOptions';

const HomePrices = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.route.params.backgroundColor }]}>
            <FlatList
                data={menuOptionsPrices}
                keyExtractor={item => item.screen}
                renderItem={(obj) => (
                    <TouchableOpacity
                        style={[styles.menuItem, { backgroundColor: obj.item.background, borderColor: obj.item.borderWidth }]}
                        onPress={() => { props.navigation.navigate(obj.item.screen, { measures: obj.item.measures }) }}
                    >
                        <FontAwesome5
                            style={styles.menuItemIcon}
                            name={obj.item.icon}
                            size={35}
                            color='black'
                        />
                        <Text style={styles.menuItemText}>
                            {obj.item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menuItem: {
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    menuItemIcon: {
        borderRadius: 50,
        minWidth: 70,
        minHeight: 70,
        textAlign: 'center',
        backgroundColor: 'white',
        paddingTop: 15
    },
    menuItemText: {
        marginLeft: 30,
        fontSize: 20,
        letterSpacing: 1,
        color: 'white',
        fontWeight: 'bold'
    },
})

export default HomePrices;