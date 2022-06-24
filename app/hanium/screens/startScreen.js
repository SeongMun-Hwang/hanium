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
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Layout, Button} from "@ui-kitten/components";

const StartScreen: () => Node = ({navigation}) => {
    return (
        <Layout style={styles.container}>
            <Layout style={styles.logoArea}>
                <Text>로고</Text>
            </Layout>
            <Layout style={styles.loginArea}>
                <Button style={styles.ButtonArea} onPress={() => navigation.navigate('Login')} >로그인</Button>
                <Button style={styles.ButtonArea} onPress={() => navigation.navigate('Register')} >회원가입</Button>
            </Layout>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, //전체의 공간을 차지한다는 의미
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    logoArea: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        fontSize: 32,
    },
    loginArea: {
        flex: 1,
        marginHorizontal: wp(10)
    },
    ButtonArea: {
        marginVertical: hp(1),
    }
});

export default StartScreen;
