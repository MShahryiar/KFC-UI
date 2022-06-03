import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Bucket from './screens/Bucket' ;
import More from './screens/More';
import {CartProvider} from './CartContext';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <CartProvider>
   <NavigationContainer theme={DefaultTheme}>
     <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarLabelPosition:"beside-icon",
        tabBarLabelStyle:{
          fontWeight:"700",
          fontSize:15
        },
        tabBarIconStyle:{display:"none"},
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'grey',
        tabBarActiveBackgroundColor:'white',

        
      }}
      initialRouteName="Home">
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="Bucket" component={Bucket} />
          <Tab.Screen name="More" component={More} />
     </Tab.Navigator>
   </NavigationContainer>
   </CartProvider>
  );
}
