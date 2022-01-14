import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import menuOptions from '../../utils/menuOptions';

const HomeMeasure = (props) => {
    //removing the first Option (Quantity)
    const options = menuOptions.filter((el, ind) => ind != 0)

    return (
        <View style={[styles.container, { backgroundColor: props.route.params.backgroundColor }]}>
            <FlatList
                data={options}
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
        paddingTop: 10
    },
    menuItem: {
        borderWidth: 2,
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 10,
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

export default HomeMeasure;