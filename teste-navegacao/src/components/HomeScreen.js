import React from "react";
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return(
        <View>
            <Text>Tela Principal</Text>
            <Button title='Ir para Detalhes'
            onPress={() => navigation.navigate('Detail')}/>
        </View>
    );
}
