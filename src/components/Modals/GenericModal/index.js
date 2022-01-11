import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import ActionButtons from '../../ActionButtons';
import i18n from 'i18n-js';

const GenericModal = (props) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.modal}
            onShow={()=> props.onShow ? props.onShow() : null}
        >
            <View style={styles.modalView}>
                { props.children }
                <ActionButtons
                    btn1Text={props.btn1Text || i18n.t('confirm')}
                    btn2Text={props.btn2Text || i18n.t('cancel')}
                    btn3Text={props.btn3Text}
                    btn1Pressed={props.action1}
                    btn2Pressed={props.action2}
                    btn3Pressed={props.action3}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
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

export default GenericModal;