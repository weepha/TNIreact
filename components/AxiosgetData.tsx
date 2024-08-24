import { View, Text ,StyleSheet,FlatList,ActivityIndicator} from "react-native";
import React,{useState,useEffect} from "react";
import axios from "axios";
//Define typess for the data structure
type User = {
    id : number
    name : string
    email : string
}
const AxiosgetData = (): React.JSX.Element => {
    const[users,setUser] = useState<User[]>([]);
    const[loading,setLoading] = useState<boolean>(true)
    const[error,setError] = useState<string|null>(null)

    //get Data by axios
    //รอดึงข้อมูลให้เสร็จก่อน
    const fetchData = async ()=>{
        try{
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            setUser(response.data);

        }catch{
            setError('Fild to fetch users');

        }finally{
            setLoading(false);

        }

    }
    useEffect(()=>{
        fetchData();


    },[])
    if(loading){
        return(
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    }
    if(error){
        < View style={styles.centered}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    }
  return (
    <FlatList
    contentContainerStyle = {styles.container}
    data={users}
    renderItem={({item})=>(
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>

    )
    }
    keyExtractor={item=>item.id.toString()}
    
    />
  );
};

export default AxiosgetData;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
