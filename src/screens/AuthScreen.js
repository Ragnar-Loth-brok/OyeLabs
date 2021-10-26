import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import Constants from 'expo-constants';

import Auth from '../components/Auth'

export default function AuthScreen({ navigation }) {
    const animation = useRef(new Animated.Value(0)).current;

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 0]
    })

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: false,
                damping: 5,
            }).start()
        })
        return unsubscribe;
    }, [navigation])

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => animation.setValue(0))
        return unsubscribe;
    }, [navigation])

    return (
        <View style={styles.bgView} >
            <Animated.Text style={[styles.title, { transform: [{ translateY }]}]} >OYELABS</Animated.Text>
            <Auth />
        </View>
    )
}


const styles = StyleSheet.create({
    bgView: {
        backgroundColor: '#2c3840',
        marginTop: Constants.statusBarHeight,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        marginVertical: 100,
        color: '#fff',
        letterSpacing: 5,
        fontWeight: '900',
        fontSize: 40,
        paddingHorizontal: 20,

    },
})
