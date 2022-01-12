import React from 'react';
import { StyleSheet, Text, View, Modal, FlatList, TouchableOpacity } from 'react-native';

const GenericModal = (props) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.modal}
        >
            <View style={styles.modalView}>
                <FlatList
                    data={props.measures}
                    keyExtractor={item=>item.name}
                    renderItem={ obj=> (
                        <TouchableOpacity style={styles.itemList} onPress={()=>props.action(obj.item)}>
                            <Text style={styles.itemTextList}>{obj.item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        margin: 20,
        backgroundColor: '#efefef',
        padding: 35,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 10,
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    itemList: {
        borderWidth: 1,
        width: 250,
        padding: 20,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#DFD'
    },
    itemTextList: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default GenericModal;