import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login"
import Perfil from "../screens/Perfil"
import Devs from "../screens/Devs";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator 
            initialRouteName="login" 
            screenOptions={{
                headerStyle:{backgroundColor:"#6b8a9c"},
                headerTitleAlign:"center",
                headerTintColor:"white",
                headerTitleStyle:{fontSize:30}
            }}
        >
            <Stack.Screen name="login" component={Login} options={{title:"Inicio"}}/>
            <Stack.Screen name="perfil" component={Perfil} options={{title:"Perfil"}}/> 
            <Stack.Screen name="devs" component={Devs} options={{title:"Devs"}}/>
        </Stack.Navigator>
    )
}