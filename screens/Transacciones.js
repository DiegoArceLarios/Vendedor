import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput,ImageBackground,Image} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner"; 
import db from "../config";

const bgImage = require("../assets/bebidas.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class Transacciones extends Component{
    constructor(props){
      super(props);
      this.state={
        precio: 0,
        precioShirly: 20,
        precioMojito: 30,
        precioBebida: 40,
        shirleys: 0,
        mojitos: 0,
        otras: 0,
        actualizar: 0,
        valor: '',
      }
    }

    componentWillUpdate(){
      const {venta,shirleys,valor,precio}= this.state;
      console.log(this.state.precio);
      this.setState({valor:parseInt(valor)});
      this.setState({precio:precio+value});

      
    }

    


    render(){
      const {precioShirly,precio,precioBebida,shirleys,mojitos,otras,precioMojito,actualizar,valor}=this.state; 
      return(
        <View style={styles.caja}>        
          <ImageBackground
            source={bgImage} style={styles.image}
          />
            <View style={styles.caja2}> 
              <TextInput
                style={styles.teclado}
                placeholder={'Precio'}
                placeholderTextColor={"#FFFFFF"}
                value={valor}
                onChange={value=>this.setState({valor:value})}
              />
            </View>
                <View style={styles.caja2}>
                <TouchableOpacity style={styles.boton1} 
                onPress={()=> this.setState({shirleys:shirleys+1,precio:precio+precioShirly})}>
                    <Text style={styles.textoDelBoton123}> 
                      Shirley Temple
                    </Text>
                    <Text style={styles.textoDelBoton123}> 
                      {this.state.shirleys}
                    </Text>
                  </TouchableOpacity>                  
                </View>
                <View style={styles.caja2}>
                <TouchableOpacity style={styles.boton2}
                onPress={()=> this.setState({mojitos:mojitos+1,precio:precio+precioMojito})}>
                    <Text style={styles.textoDelBoton123}> 
                      Mojito Virgen
                    </Text>
                    <Text style={styles.textoDelBoton123}> 
                      {this.state.mojitos}
                    </Text>
                  </TouchableOpacity>
                  
                </View>
                <View style={styles.caja2}> 
                <TouchableOpacity style={styles.boton3}
                onPress={()=> this.setState({otras:otras+1,precio:precio+precioBebida})}>
                    <Text style={styles.textoDelBoton123}> 
                      Bebida
                    </Text>
                    <Text style={styles.textoDelBoton123}> 
                      {this.state.otras}
                    </Text>
                  </TouchableOpacity>
                  
                </View>

                <View style={styles.caja2}> 
                <TouchableOpacity style={styles.boton4}
                onPress={()=> this.setState({actualizar:actualizar+1})}>
                    <Text style={styles.textoDelBotonA}> 
                      Update
                    </Text>
                  </TouchableOpacity>

                </View>

                <View style={styles.caja2}> 
                <TouchableOpacity style={styles.boton5}
                onPress={()=> this.setState({precio: 0,shirleys:0,mojitos:0,otras:0})}>
                    <Text style={styles.textoDelBotonA}> 
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>     

                <View style={styles.caja2}>
                  <TouchableOpacity style={styles.boton}>
                    <Text style={styles.textoDelBoton}>
                      Hola
                    </Text>
                  </TouchableOpacity>
                </View>
                
        </View>
        
      );
    }
    
  };
  const styles = StyleSheet.create({
    teclado:{
      borderWidth: 5,
      borderColor: "white",
      borderRadius: 5,
      padding: 10,
      marginBottom: 800,
      width: "60%",
      height: 50,
      color: "white",
      backgroundColor: "#33CC33",
      fontSize: 18,
    },
    texto:{
      flex: 1,
      color: 'black',
      marginTop: 100,
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold',
    },
    image:{
      marginLeft: 0,
      margintop: 0,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    caja:{
      flex: 1,
    },
    caja2:{
      flex: 0.5,
      justifyContent: "center",
      alignItems: 'center',

    },
    boton:{
      backgroundColor: '#1C6E1C',
      width: 150,
      height: 150,
      borderRadius: 560,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 200,
      borderColor: 'white',
      borderWidth: 4,
    

    },
    boton1:{
      backgroundColor: '#FFFFFF',
      width: 110,
      height: 110,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 500,
      marginRight: 230,
      borderColor: 'black',
      borderWidth: 4,
    

    },
    boton2:{
      backgroundColor: '#FFFFFF',
      width: 110,
      height: 110,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 500,
      borderColor: 'black',
      borderWidth: 4,
    


    },
    boton3:{
      backgroundColor: '#FFFFFF',
      width: 110,
      height: 110,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 500,
      marginLeft: 230,
      borderColor: 'black',
      borderWidth: 4,

    },
    boton4:{
      backgroundColor: '#FFFFFF',
      width: 80,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 200,
      marginLeft: 250,
      borderColor: 'blue',
      borderWidth: 4,

    },
    boton5:{
      backgroundColor: '#FFFFFF',
      width: 80,
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 200,
      marginRight: 250,
      borderColor: 'blue',
      borderWidth: 4,

    },
    textoDelBoton:{
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      
    },
    textoDelBoton123:{
      color: 'Black',
      fontSize: 20,
      fontWeight: 'bold',
      
    },
    textoDelBotonA:{
      color: 'Black',
      fontSize: 15,
      fontWeight: 'bold',
      
    },
    
  })