import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux';

import CardComp from '../components/CardComp';
import data from '../data';


export default function MainScreen({ navigation }) {

    const state = useSelector(state => state);

    return (
        <View style={styles.container} >
            <FlatList 
                style={styles.list}
                data={data}
                renderItem={({ item }) => <TouchableOpacity
                    onPress={() => navigation.navigate('Edit', { item: item })}
                >
                        <CardComp item={item} />
                    </TouchableOpacity>}
            />
            <Button

                onPress={() => navigation.navigate('Edit', { item: null })}
                icon={{
                  name: 'plus',
                  type: 'entypo',
                  size: 70,
                  color: 'white',
                }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 100,
                  width: 100,
                  
                  height: 100,
                }}
                containerStyle={{
                    position: 'absolute',
                    bottom: 20,
                    alignSelf: 'center',
                    zIndex: 9
                }}
              />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
    },

    list: {
      width: '90%',
      backgroundColor: 'transparent',
    },
  });
  
