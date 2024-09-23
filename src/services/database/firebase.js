
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMkhDsaRegWxkSpz4TSdhGLTNSj4Of_gk",
  authDomain: "app-jhonatas-aula.firebaseapp.com",
  projectId: "app-jhonatas-aula",
  storageBucket: "app-jhonatas-aula.appspot.com",
  messagingSenderId: "592024932544",
  appId: "1:592024932544:web:fcdeae709cc2d5fad4dd25"
};
const app = initializeApp(firebaseConfig);
 
export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
 
});