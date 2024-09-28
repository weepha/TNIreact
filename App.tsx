import "react-native-gesture-handler";

import React, { useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePostScreen from "./screens/CreatePostScreen";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";

import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Toast from "react-native-toast-message";

import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector,useAppDispatch } from "./redux-toolkit/hooks";
import { ActivityIndicator } from "react-native";
import{View} from "react-native"
import { selectAuthState,setLoadiong, setLogin, setProfile } from "./auth/auth-slice";
import { getProfile } from "./services/auth-service";


const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Products" component={ProductScreen} />
      <ProductStack.Screen name="Details" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Products"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
    </LoginStack.Navigator>
  );
}
const App = (): React.JSX.Element => {
  //ใช้ useAppSelector เพื่อดึง state จาก store
  const {isLogin,isLoading} = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const checkLogin = async()=>{
    try {

      dispatch(setLoadiong(true));
      const response = await getProfile();
      // if(response?.status === 20){
      if(response?.data.data.user){
        dispatch(setLogin(true));
        dispatch(setProfile(response.data.data.user))
      }
      else {
        dispatch(setLogin(false))
      }

    }catch (error){
      console.log(error)
    }finally{
      dispatch(setLoadiong(false));
    }

  }
  useFocusEffect(
    React.useCallback(()=>{
      checkLogin();
    },[])
  )



  if(isLoading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='large' color='blue'/>
      </View>
    )
  }
  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>

      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
export default AppWrapper;
