import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Menus, Bucket, More} from './screens/index.js'
import {CartProvider} from './CartContext';
import {EverydayValue, MakeItaMeal, MidnightDeals,Promotions,Sharing,SignatureBoxes, Snacks} from './foodScreens/index';

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
          <Tab.Screen name="Menu" component={Menus} />
          <Tab.Screen name="Bucket" component={Bucket} />
          <Tab.Screen name="More" component={More} />
          <Tab.Screen name="EverydayValue" component={EverydayValue}  options={{tabBarButton: () => null,}}/>
          <Tab.Screen name="MakeItaMeal" component={MakeItaMeal}  options={{tabBarButton: () => null,}}/>
          <Tab.Screen name="SignatureBoxes" component={SignatureBoxes}  options={{tabBarButton: () => null,}}/>          
          <Tab.Screen name="Sharing" component={Sharing}  options={{tabBarButton: () => null,}}/>
          <Tab.Screen name="Promotions" component={Promotions}  options={{tabBarButton: () => null,}}/>
          <Tab.Screen name="MidnightDeals" component={MidnightDeals}  options={{tabBarButton: () => null,}}/>
          <Tab.Screen name="Snacks" component={Snacks}  options={{tabBarButton: () => null,}}/>
     </Tab.Navigator>
   </NavigationContainer>
  
   </CartProvider>
  );
}
