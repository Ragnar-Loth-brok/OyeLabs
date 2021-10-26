import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AddForm from '../components/AddForm';
import Constants from 'expo-constants';


export default function AddScreen({ route }) {

    const { item } = route.params;
    return (
        <View style={styles.container} >
            <AddForm item={item} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#2c3840',
        marginTop: Constants.statusBarHeight
    },
})

