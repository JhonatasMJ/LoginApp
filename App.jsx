import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import { AuthProvider } from "./src/contexts/auth";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
