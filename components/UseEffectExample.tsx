import { View, Text , Button} from 'react-native'
import React,{useEffect,useState} from 'react'



const useEffectExample = ():React.JSX.Element => {
    const [const1, setCount1] = useState(0);
    const [const2, setCount2] = useState(0);
  
    useEffect(() => {
      console.log("use Effect1 - Runs after every render");
    });
    useEffect(() => {
      console.log("use Effect2 - Runs only when count1 changes ");
    }, [const1]);
  
    useEffect(() => {
      console.log("use Effect3 - Run only once afer the first render ");
    }, []);
    return (
      <View style={{ marginTop: 50 }}>
        <Text style={{ marginTop: 50 }}>Count1: {const1}</Text>
        <Button title="Increment Count1" onPress={() => setCount1( const1 + 1)} />
        <Text>{"\n\n"}</Text>
        <Text>Count2: {const2}</Text>
        <Button title="Increment Count2" onPress={() => setCount2(const2 + 1)} />
      </View>
    );
}

export default useEffectExample