import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./view/Home.jsx";




const Stack= createNativeStackNavigator();

export default function App() {
  
  return (
 <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}   options={{ title: 'calculator',
      headerShown: true
     }}/>

        
      </Stack.Navigator>
    </NavigationContainer> 

    
  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // paddingTop:40,
//     flexDirection:'row',
//     width:"100%"
    
//   }

// });


























