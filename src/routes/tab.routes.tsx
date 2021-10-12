import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Cadastro } from '../screens/Cadastro';

const AppTab = createBottomTabNavigator();

const AuthRoutes = ( ) => {
    return (
        <AppTab.Navigator 
            tabBarOptions={{
                labelPosition: 'beside-icon',
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 80
                },
            }}>
                <AppTab.Screen 
                    name="Carrinho"
                    component={Cadastro}
                    options={{
                        tabBarIcon: (({ size, color }) => (
                            <MaterialIcons 
                                name='shopping-cart'
                                size={size}
                                color={color}
                            />
                        ))
                    }}
                />

            </AppTab.Navigator>
    )
}

export default AuthRoutes;