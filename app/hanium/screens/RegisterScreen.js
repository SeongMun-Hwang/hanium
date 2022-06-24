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
import {Button, Icon, IndexPath, Input, Layout, Select, SelectItem, Text} from "@ui-kitten/components";

const RegisterScreen: () => Node = ({navigation}) => {

    const [email, setEmail] = useState();
    const [firstPassword, setFirstPassword] = useState();
    const [secondPassword, setSecondPassword] = useState();
    const [name, setName] = useState();
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const [checkPassword, setCheckPassword] = useState(false);

    const data = [
        'Admin',
        'User',
    ];

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

    const renderOption = (title) => (
        <SelectItem title={title}/>
    );

    const displayValue = data[selectedIndex.row];

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
                    style={styles.inputArea}
                    onChangeText={nextValue => setEmail(nextValue)}
                />
                <Input
                    value={firstPassword}
                    size='large'
                    label='Password'
                    placeholder='Place your Text'
                    style={styles.inputArea}
                    accessoryRight={renderIcon}
                    secureTextEntry={secureTextEntry}
                    onChangeText={nextValue => setFirstPassword(nextValue)}
                />
                <Input
                    value={secondPassword}
                    size='large'
                    placeholder='Place your Text'
                    style={styles.inputArea}
                    secureTextEntry={secureTextEntry}
                    onChangeText={nextValue => setSecondPassword(nextValue)}
                />
                {
                    checkPassword ? <Text style={styles.captionText}>비밀번호가 일치하지 않습니다.</Text>:<Text></Text>
                }
                <Input
                    style={styles.inputArea}
                    label='Name'
                    size='large'
                    placeholder='Name'
                    style={styles.inputArea}
                    onChangeText={nextValue => setName(nextValue)}
                />
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayValue}
                    label='Role'
                    size='large'
                    style={styles.inputArea}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    {data.map(renderOption)}
                </Select>
                <Button style={styles.buttonArea}>
                    <Text>회원가입</Text>
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
        marginTop: hp(1),
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
        color: "#fd4c4c",
    },
});

export default RegisterScreen;
