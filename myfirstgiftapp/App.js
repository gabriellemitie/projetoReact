import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useFonts} from 'expo-font';
import Home from './src/screens/home';
import Kids from './src/screens/kids';
import Teenagers from './src/screens/teenagers';
import Adults from './src/screens/adults';
import MeusPresentes from './src/screens/sacola';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "TiltNeon-Regular": require('./assets/fonts/TiltNeon-Regular.ttf')
  });
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Home} 
        options={{headerShown: false, tabBarIcon: ({color, size}) => (<AntDesign name="home" color={"black"} size={24}/>)}}
        />
      <Tab.Screen name="Crianças" component={Kids} 
        options={{headerShown: false,  tabBarIcon: ({color, size}) => (<Entypo name="rainbow" size={24} color="black" />)}}/>
      <Tab.Screen name="Adolescentes" component={Teenagers} 
        options={{headerShown: false, tabBarIcon: ({color, size}) => (<Ionicons name="headset-outline" size={24} color="black" />)}}/>
        <Tab.Screen name="Adultos" component={Adults} 
        options={{headerShown: false, tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="bottle-wine-outline" size={24} color="black" />)}}/>
        <Tab.Screen name="Meus Presentes" component={MeusPresentes} 
        options={{headerShown: false, tabBarIcon: ({color, size}) => (<AntDesign name="gift" size={24} color="black" />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}