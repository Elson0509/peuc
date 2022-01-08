import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import i18n from '../../utils/textLanguages';

const Home = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate('Quantity')}>
            <Text>
                { i18n.t('home') }
            </Text>
        </TouchableOpacity>
    );
};

export default Home;