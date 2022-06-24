/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LogoScreen: () => Node = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Start');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.logoArea}>
                <Text style={styles.logoText}>항만</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, //전체의 공간을 차지한다는 의미
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    logoArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 32,

    }
});

export default LogoScreen;
