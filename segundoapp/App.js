import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import Card from './src/components/cards';

import img_mysql from './imagens/mysql.png';
import img_react from './imagens/react.png';
import img_php from './imagens/php.png';
import img_reactNative from './imagens/react-native.png';

export default function App() {
    return (
        <ScrollView style={styles.container} 
        contentContainerStyle={styles.contentContainer}>
        <Card
            title={"MySql"}
            text={"texto"}
            img={img_mysql}
            link={"https://www.mysql.com/"}
        />
        <Card
            title={"React"}
            text={"texto"}
            img={img_react}
            link={"https://react.dev/"}
        />
        <Card
            title={"PHP"}
            text={"texto"}
            img={img_php}
            link={"https://www.php.net/"}
        />
        <Card
            title={"React Native"}
            text={"texto"}
            img={img_reactNative}
            link={"https://reactnative.dev/"}
        />
        <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },

    contentContainer: {
        alignItems: 'center', 
        justifyContent: 'center'
    }
});
