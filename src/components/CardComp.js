import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Card, Image } from 'react-native-elements';

export default function CardComp({ item }) {

    const randomLikes = Math.floor(Math.random() * 51);

    return (
        <Card>
            <View style={styles.itemView}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: item.uri }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <View style={styles.textView}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.place, { marginBottom: 10 }]}>{item.city}, {item.country}</Text>
                    <Text style={[styles.place, styles.likes]}>{randomLikes} Likes</Text>
                </View>
            </View>
          </Card>
    )
}


const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
    },
    textView: {
        // flexDirection: 'column',
    },

    image: {
        width: 100,
        height: 80,
        resizeMode: 'cover',
        marginRight: 10,
    },

    title: {
        maxWidth: 250,
        fontSize: 20,
        color: '#666',
        textTransform: 'capitalize',
    },

    place: {
        fontSize: 15,
        color: '#888',
        textTransform: 'capitalize',
    },

    likes: {
        position: 'absolute',
        bottom: -5,
        textTransform: 'capitalize',
    }
});