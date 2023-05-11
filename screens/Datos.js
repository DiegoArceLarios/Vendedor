import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground,Image} from "react-native";


const fondo = require('../assets/bebidas1.png');



export default class Datos extends Component{

    constructor(){
        super();
        this.setState={
            ganacias: '0',
        }
    }

    render(){

        return(
        <View style={styles.container}>
            <View style={styles.container}>        
            <ImageBackground
                source={fondo} style={styles.image}
            />
            </View>

            <View style={styles.contatiner2}>
                <Text style={styles.texto}>
                    Ganancias: 0
                </Text>

            </View>
        </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    contatiner2:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        marginLeft: 0,
        paddingTop: 50,
        width: '100%',
        height: '150%',
        resizeMode: 'cover',
    },
    texto:{
        fontSize: 20,
        color: 'white',
        marginBottom: 100,
        flex: 10,
        fontWeight: 'bold',
        fontSize: 30,

    }
})