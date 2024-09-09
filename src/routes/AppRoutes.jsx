import Login from "../pages/login.jsx";
import Register from "../pages/register.jsx";
import Home from "../pages/Home.jsx";
import Splash from "../pages/Splash.jsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const AppRoutes = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      /> 
       <Stack.Screen 
        name="Login"
        component={Login}
        options={{title:'Login Acesso',
          headerLeft: () => false
        }}
      />
      <Stack.Screen 
      name="Register" 
      component={Register}
      options={{title:'Registro Acesso'}}
       />    
    </Stack.Navigator>
  );
}



export default AppRoutes;