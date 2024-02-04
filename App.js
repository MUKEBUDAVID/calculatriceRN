import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View ,Image,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Test from "./Test"
import Details from './Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

<NavigationContainer  >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home}   options={{ title: '',
      
      headerStyle: {
        backgroundColor: '#f4691e',
       },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        

      },
      headerTitle:(props) =>  <Image source={ require('./assets/favicon.png') } /> ,
      headerRight: () => (
        <Button title="Update count" />
      ),
      headerShown: true
     
      
      }}/>

        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Details" component={Details}  />
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
