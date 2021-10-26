import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';


export default function Auth() {
    const navigation = useNavigation();
    const [ email, setEmail ] = useState(null);
    const [ password, setPassword ] = useState(null);
    const [ error, setError ] = useState({ passError: null, emailError: null});

    const onSubmit = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            setError({ emailError: 'Invalid Email' });
            return false;
        }

        else if (!password || password.length < 6) {
            setError({ passError: 'Invalid Password' });
            return false;
        }

        else {
            setError({
                email: null,
                passError: null
            })
            
            navigation.navigate('Home')
        }
    }

    

    return (
        <View style={styles.container} >
            <Input
                value={email}
                onChangeText={setEmail}
                placeholder='Enter a valid email'
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
                errorMessage={error.emailError}
            />
            <Input
                value={password}
                onChangeText={setPassword}
                placeholder='Enter password (Min 6 characters)'
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
                errorMessage={error.passError}
            />

            <Button
                title="LOGIN"
                onPress={onSubmit}
                titleStyle={{
                  letterSpacing: 2,
                  fontSize: 20
                }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 300,
                  height: 50,
                  alignSelf: 'center',
                  marginTop: 70
                }}
              />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: '20%'
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
    }
})
