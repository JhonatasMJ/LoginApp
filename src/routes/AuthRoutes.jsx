import login from "../pages/login.jsx";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../pages/Home.jsx"
import styles from '../styles/StyleMenu.jsx';


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <>
      <Tab.Navigator style={styles.menu}
        initialRouteName="Home"
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

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: styles.menu,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        })}
      >
            <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
      </Tab.Navigator>
    </>
  );
};



export default AuthRoutes;
