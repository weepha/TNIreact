import { View, Text, ListRenderItem, Button, ActivityIndicator } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { ListItem, Avatar } from "@rneui/themed";

import { findAllProduct } from "../services/product-service";
import { FlatList } from "react-native-gesture-handler";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  //1.กำหนก state
  const [product, setProduct] = useState<any[]>([]);
  const [loading,setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      // console.log(response.data.data);
      // 2. setState
      setProduct(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );
  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem 
        bottomDivider  
        onPress={() => {
          navigation.navigate("Detail",{
            id: item.id,
            title: item.title,
          });
            }}>
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success"/>
        
        </ListItem>
      </>
    );
  };

  if(loading){
    return(
      <View>
        <ActivityIndicator size="large" color={"#3498db"}/>
      </View>
    )
  }

  return (
    <View>
      {/* <Text>{JSON.stringify(product)}</Text>; */}
      <FlatList
        data={product}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        onRefresh={async()=>{await getProduct();}}
        refreshing={loading}
      />
    </View>
  );
};

export default ProductScreen;
