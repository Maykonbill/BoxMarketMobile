import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import { Login } from '../screens/Login';
import { Cadastro } from '../screens/Cadastro';
import { ListaMercados } from '../screens/ListaMercados';
import { ListaCategoria } from '../screens/ListaCategoria';
import { ListaProdutos2 } from '../screens/ListaProdutos2';
import { FormasPagamento } from '../screens/FormasPagemento';
import { AddCard } from '../screens/AddCard';
import AuthRoutes from './tab.routes';
import { ListaProdutos1 } from '../screens/ListaProdutos1';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        initialRouteName="Login"
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <stackRoutes.Screen 
            name='Login'
            component={Login}
        />

        <stackRoutes.Screen 
            name='Cadastro'
            component={Cadastro}
        />

        <stackRoutes.Screen 
            name='ListaMercados'
            component={ListaMercados}
        />

        <stackRoutes.Screen 
            name='ListaCategoria'
            component={ListaCategoria}
        />

        <stackRoutes.Screen 
            name='ListaProdutos1'
            component={ListaProdutos1}
        />

        <stackRoutes.Screen 
            name='ListaProdutos2'
            component={ListaProdutos2}
        />

        <stackRoutes.Screen 
            name='FormasPagamento'
            component={FormasPagamento}
        />

        <stackRoutes.Screen 
            name='AddCard'
            component={AddCard}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;