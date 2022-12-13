import React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, Image, Text, View, StyleSheet, StatusBar, Dimensions, Pressable } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import EmailRegister from './EmailRegister';
// Get width and height of users display
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function Login({navigation}): any {

    async function googleLogin() {
        console.log('google');
    };

    async function emailRegister() {
        navigation.navigate('EmailRegister');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.splash} source={require('../../assets/splash.jpg')}></Image>
            </View>

            <View style={styles.logInContainer}>
                
                <Pressable onPress={googleLogin} style={styles.googleLogin}>
                    <Image style={styles.googleIcon} source={require('../../assets/google.png')}></Image>
                    <Text style={styles.googleText}>Login/Register with Google</Text>
                </Pressable>

                <Pressable onPress={emailRegister} style={styles.emailRegister}>
                    <Text>Register with email</Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    },

    splash: {
        flex: 1,
        height: undefined, 
        width: undefined
    },

    imageContainer: {
        position: 'absolute',
        width: deviceWidth * 1.1,
        height: deviceHeight * 1.1
    },

    logInContainer: {
        // flex: 4,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        height: deviceHeight * 0.25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    googleLogin: {
        backgroundColor: '#1A1A1A',
        width: '80%',
        height: '20%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    emailRegister: {
        backgroundColor: 'lightgray',
        width: '80%',
        height: '20%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    googleText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10
    },

    googleIcon: {
        height: 20,
        width: 20
    }
  });