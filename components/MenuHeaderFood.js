import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuHeaderFood = (props) => {
    const navigation = useNavigation();
  return (
         <View style={{display:'flex',padding:25, flexDirection:'row',backgroundColor:'white',paddingHorizontal:10, marginVertical:4,flex:1, justifyContent:'space-between'}}>                

                <View style={{flex:1}}>
                <TouchableOpacity style={{backgroundColor:'green',flexDirection:'row'}}onPress={() => navigation.goBack()}>
                <FontAwesome name='angle-left' style={{fontSize:25,paddingRight:20,color:'black'}}/>
                </TouchableOpacity>
                <Text style={{flex:4,fontSize:16}}>{props.title}</Text>
                
                </View>         
    </View>
  )
}

export default MenuHeaderFood;