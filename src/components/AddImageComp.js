import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Image } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';


export default function AddImageComp({ image, setImage }) {
    
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.cancelled) setImage(result.uri);
    }
    return (
        <View style={styles.container} >
            <View style={[styles.addView, { transform: [{ scale: image ? 0.8: 1 }] }]} >
                <Icon 
                    name='images'
                    type='entypo'
                    size={25}
                    color='#fff'
                />
                <Button 
                    onPress={pickImage}
                    titleStyle={{ letterSpacing: 1, marginLeft: 10 }}
                    buttonStyle={styles.button}
                    icon={
                        <Icon
                            name='cloudupload'
                            type='ant-design'
                            color='#fff'
                            size={30}
                        />
                    }
                />
            </View>
            {
                image &&
                <Image
                    source={{ uri: image }} style={styles.image}
                />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 80,
    },
    addView: {
        backgroundColor: '#ddd',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'center'
    },
    button: {
        width: 100,
        height: 40,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#336699',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 2
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 20
    },
})