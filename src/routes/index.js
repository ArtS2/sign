import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Cadastro from '../pages/cadastro'
import Login from '../pages/login'
import Inicio from '../pages/inicio'
import Perfil from '../pages/perfil'
import Config from '../pages/configuracao/configuracao'
import Tarefa from '../pages/tarefa'
import Dicas from '../pages/Dicas'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="login"
            component={Login}
            options={ {HeadersShown:false}}
            />
            <Stack.Screen
            name="cadastro"
            component={Cadastro}
            options={ {HeadersShown:false}}
            />
            <Stack.Screen
            name="inicio"
            component={Inicio}
            options={ {HeadersShown:false}}
            />
            <Stack.Screen
            name="perfil"
            component={Perfil}
            options={ {HeadersShown:false}}
            />
             <Stack.Screen
            name="Config"
            component={Config}
            options={ {HeadersShown:false}}
            />
             <Stack.Screen
            name="Tarefa"
            component={Tarefa}
            options={ {HeadersShown:false}}
            />
            <Stack.Screen
            name="Dicas"
            component={Dicas}
            options={ {HeadersShown:false}}
            />

        </Stack.Navigator>
    )
}