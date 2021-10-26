import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import actionCreaters from '../store/actions';
import AddImageComp from './AddImageComp';


export default function AddForm({ item }) {
    const navigation = useNavigation();

    const [image, setImage] = useState(item ? item.uri: null);
    const [title, setTitle] = useState(item ? item.title: null);
    const [city, setCity] = useState(item ? item.city: null);
    const [country, setCountry] = useState(item ? item.country: null);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const validate = () => {
        setError(true);
        if(!title || title.length > 70) {
            setError({ titleError: 'Please enter a valid title' });
            return true;
        } 
        else if(!city || city.length > 30) {
            setError({ cityError: 'Please enter a valid city' });
            return true;
        } 
        else if(!country || country.length > 50) {
            setError({ countryError: 'Please enter a valid country' });
            return true;
        } 
        else if (!image) {
            setError({ imageError: 'Please select an Image' })
            return true;
        } 
        else return false;
    }

    const onSubmit = () => {
        const init = validate();
        if (init) return false;
        else {
            if (item) {
                dispatch({ type: actionCreaters.addPost, payload: {
                    uri: image,
                    title,
                    city,
                    country,
                    key: item.key
                } });
                navigation.navigate('Post');
            }

            else {
                dispatch({ type: actionCreaters.addPost, payload: {
                    uri: image,
                    title,
                    city,
                    country,
                    key: Math.floor(Math.random() * 999999990 + 10)
                } });

                navigation.navigate('Post');
            }
        };
    }

    return (
        <View style={styles.container} >
            <AddImageComp image={image} setImage={setImage} error={error} />
            <Input
                value={title}
                onChangeText={setTitle}
                placeholder='Title'
                leftIcon={
                <Icon
                    name='email'
                    type='material-icon'
                    size={24}
                    color='#eee'
                />
                }
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorStyle}
                errorMessage={error?.titleError}
            />
            <Input
                value={city}
                onChangeText={setCity}
                placeholder='City Name'
                leftIcon={
                <Icon
                    name='lock'
                    type='foundation'
                    size={24}
                    color='#eee'
                />
                }
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorStyle}
                errorMessage={error?.cityError}
            />
            <Input
                value={country}
                onChangeText={setCountry}
                placeholder='Country Name'
                leftIcon={
                <Icon
                    name='lock'
                    type='foundation'
                    size={24}
                    color='#eee'
                />
                }
                containerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorStyle}
                errorMessage={error?.countryError}
            />
            <Text
                style={styles.text}
            >{error?.imageError}</Text>

            <Button
                title={ item ? 'Edit Post' : 'Add Post'}
                onPress={onSubmit}
                titleStyle={{ letterSpacing: 1, marginLeft: 10, fontSize: 20}}
                buttonStyle={styles.finishButton}
                icon={
                    <Icon 
                        name='image'
                        type='feather'
                        color='#fff'
                    />
                }
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        alignItems: 'center'
    },
    inputContainer: {
        width: 350,
    },

    inputStyle: {
        marginHorizontal: 10,
        color: '#eee'
    },

    errorStyle: {
        color: 'salmon', 
        textAlign: 'center',
        letterSpacing: 2,
        fontSize: 15
    },
    finishButton: {
        paddingVertical: 10,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#336699',
        borderColor: '#fff',
        marginTop: 20,
        paddingHorizontal: 20
    },
    text: { fontSize: 16, color: 'salmon', letterSpacing: 2 }
})