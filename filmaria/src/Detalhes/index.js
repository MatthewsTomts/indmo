import React from "react";
import { TouchableOpacity, View, Text, StyleSheet} from "react-native";

function Detalhes(props) {
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                    <Text style={styles.texto}>Voltar</Text>                    
                </TouchableOpacity>
                
                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.tituloSinopse}>Sinopse</Text>
                <Text style={styles.sinopse}>{props.filme.sinopse}</Text>

            </View>
        </View>
    );
}

export default Detalhes;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 60,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#aaa",
    },

    modalContainer: {
        width: "80%",
        height: "90%",
        backgroundColor: "#35233b",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },

    btnVoltar: {
        backgroundColor: "#9562a6",
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },

    texto: {
        fontSize: 14
    },

    titulo: {
        textAlign: "center",
        color: "#eee",
        padding: 10,
        fontSize: 26,
        fontWeight: "bold",
        letterSpacing: 2
    },
    
    tituloSinopse: {
        color: "#eee",
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: "bold"
    },

    sinopse: {
        color: "#eee",
        marginLeft: 10,
        marginRight: 10
    },
})