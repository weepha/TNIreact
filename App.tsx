// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";

import React, { useState } from "react";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AboutScreen from "./screens/AboutScreen";

import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";

import DetailScreen from "./screens/DetailScreen";
import Toast from "react-native-toast-message";

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
      <ProductStack.Screen name="Detail" component={DetailScreen} />
    </ProductStack.Navigator>
  );
}
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        //Global
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginStackScreen} />
    </LoginStack.Navigator>
  );
}

const App = (): React.JSX.Element => {
  const [isLogin] = useState(false);
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <HeaderButtonsProvider stackType="native">
            {isLogin ? (
              <Drawer.Navigator
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <MenuScreen {...props} />}
              >
                <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
                <Drawer.Screen
                  name="ProductStack"
                  component={ProductStackScreen}
                />
              </Drawer.Navigator>
            ) : (
              <LoginStackScreen />
            )}
          </HeaderButtonsProvider>
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </>
  );
};

export default App;
