import { View, Text, SafeAreaView, Image, StatusBar} from 'react-native'
import React from 'react'
import main from '../assets/main/top.jpg';
import right from '../assets/main/right.png';
import left from '../assets/main/left.jpg';
import CartContext from '../CartContext';
import { useContext } from 'react';


const Home = () => {

  const {item} = useContext(CartContext);
  const {addToCart} = useContext(CartContext);
  const {items}  = useContext(CartContext);

  return (
    <SafeAreaView style={{flex:1}}>    
    <StatusBar backgroundColor={'red'}/>
        <View style={{flex:1,justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
         
        <View style={{flex:4, width:'100%'}}>
          <Image
            source={main}
            style={{width:'100%', height:'100%', padding:20}}
          />
        </View>
        <View style={{flex:2, flexDirection:'row', width:'100%'}}>
        <View style={{flex:1, paddingHorizontal:10, paddingVertical:20}}>
            {/* <TouchableOpacity
                onPress={()=>addToCart('nuggets', '100', '2')}
              // source={left}
              // style={{width:'100%', height:'100%'}}
              >
                  <Text>Spicy Nuggets</Text>
              </TouchableOpacity> */}
               <Image
              source={left}
              style={{width:'100%', height:'100%'}}/>
          </View>
          <View style={{flex:1, paddingHorizontal:10, paddingVertical:20}}>
            <Image
              source={right}
              style={{width:'100%', height:'100%'}}/>
          </View>
          </View>
         

        </View>         
         
        {/* <View >
          <Text>CartContextValue Item : {item}, {items.map((foodie)=> (
            <Text key={foodie}> {foodie.name} + {foodie.price} + {foodie.quantity} | </Text>
          ))} </Text> 
        </View> */}
    </SafeAreaView>
  )
}

export default Home