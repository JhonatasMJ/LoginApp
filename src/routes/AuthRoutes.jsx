import login from "../pages/login.jsx";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from '../styles/StyleMenu.jsx';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <>
      <Tab.Navigator style={styles.menu}
        initialRouteName="Splash"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "home-sharp"
                : "home-outline";
            } else if (route.name === "login") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: styles.menu,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="login"
          component={login}
          options={{ title: "Login" }}
        />
      </Tab.Navigator>
    </>
  );
};



export default AuthRoutes;
