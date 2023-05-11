import React,{Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Transacciones from "../screens/Transacciones";
import Datos from "../screens/Datos";

const Tab = createBottomTabNavigator();

export default class Boton_de_cambio extends Component{
    render(){
        return(
            <NavigationContainer >
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
              
                          if (route.name === 'Cobrar') {
                            iconName = focused
                              ? 'calculator'
                              : 'close';
                          } else if (route.name === 'Registro') {
                            iconName = "menu";
                          }
              
                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'white',
                        tabBarInactiveTintColor: '#92D050',
                        tabBarLabelStyle: {
                            fontSize: 20,
                            fontFamily: "Rajdhani_600SemiBold"
                        },
                        tabBarLabelPosition: "beside-icon",
                        tabBarItemStyle: {
                            marginTop: 25,
                            marginBottom: 25,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#92D050"
                        },
                        tabBarStyle: {
                            height: 130, 
                            backgroundColor: "#6DA945"   
                        },
                        headerShown: false
                      })}
                      
                    >
                    <Tab.Screen name = "Cobrar" component={Transacciones}/>
                    <Tab.Screen name = "Registro" component={Datos}/>  
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}