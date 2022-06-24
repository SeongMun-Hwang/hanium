/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Icon, Input, Layout, Text} from "@ui-kitten/components";

const LogoScreen: () => Node = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const AlertIcon = (props) => (
        <Icon {...props} name='alert-circle-outline'/>
    );

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
    );

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                {AlertIcon(styles.captionIcon)}
                <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
            </View>
        )
    }

    return (
        <Layout style={styles.container}>
            <Layout style={styles.logoArea}>

            </Layout>
            <Layout style={styles.loginArea}>
                <Input
                    style={styles.inputArea}
                    label='Email'
                    size='large'
                    placeholder='Email'
                    onChangeText={nextValue => setEmail(nextValue)}
                />
                <Input
                    value={password}
                    size='large'
                    label='Password'
                    placeholder='Place your Text'
                    caption={renderCaption}
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    onChangeText={nextValue => setPassword(nextValue)}
                />
                <Button style={styles.buttonArea} onPress={() => navigation.navigate('Main')}>
                    <Text>로그인</Text>
                </Button>
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
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginArea: {
        flex: 1,
        marginHorizontal: wp(5),
    },
    inputArea: {
        marginVertical: hp(1),
    },
    buttonArea: {
        marginTop: hp(2),
    },
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 10,
        height: 10,
        marginRight: 5
    },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        fontFamily: "opensans-regular",
        color: "#8F9BB3",
    }
});

export default LogoScreen;
