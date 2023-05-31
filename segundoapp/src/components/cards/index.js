import React from 'react'
import {Text, View, Image, StyleSheet, Linking} from 'react-native'

export default function Card({title, text, img, link}) {
    return(
        <View style={jose.container}>
            <Text style={[jose.p, jose.pTitle]}>{title}</Text>
            <Text style={jose.p}>{text}</Text>
            
            <View style={jose.imgContainer}>
                <Image style={jose.image} source={img}/>
            </View>

            <Text style={[jose.link, jose.p]} onPress={() => {
                Linking.openURL(link);
            }}>Site {title}</Text>
        </View>
    )
}

const jose = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        width: 300,
        height: 200,
        marginBottom: 25,
        padding: 10,
        borderRadius: 15,

    },

    p: {
        textAlign: 'center',
    },

    pTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    imgContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 35,
    },

    image: {
        width: 70,
        height: 70,
    },

    link: {
        color: '#00f',
        textDecorationLine: 'none',
    }
})