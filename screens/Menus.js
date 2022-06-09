import { View, Text, SafeAreaView,FlatList,StatusBar, TouchableHighlight } from 'react-native'
import React from 'react'
import { Menu } from '../constants/data'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import EverydayValue from '../foodScreens/EverydayValue';
import MenuHeader from '../components/MenuHeader';

const Menus = () => {
  const navigation = useNavigation();


  return (
   
    <SafeAreaView style={{flex:1}}> 
        <StatusBar/>   
        <MenuHeader title="Menus"/>
    <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center', backgroundColor:'lightgray'}}>
     
       
        <FlatList
            data={Menu}
            renderItem={({item})=><TouchableHighlight  activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() =>navigation.navigate(item.to)} style={{flex:1}}>
              <View style={{display:'flex',padding:25, flexDirection:'row',backgroundColor:'white',paddingHorizontal:10, marginVertical:4,flex:1, justifyContent:'space-between'}}>                
                

                  <View style={{flex:1, flexDirection:'row'}}>
                  <Text style={{flex:1,color:'gray'}}>{item.id}</Text>
                  <Text style={{flex:4}}>{item.name}</Text>
                  <FontAwesome name='angle-right' style={{fontSize:25,paddingRight:20,color:'gray'}}/>
                  </View>
                
                  

              </View>
              </TouchableHighlight>
            }
            keyExtractor={(item)=> item.id}
            showsVerticalScrollIndicator={false}
            // ListHeaderComponent={<MenuHeader />}
            style={{
              width:'100%'
            }}
            
          />
    </View>
</SafeAreaView>
  )
}

export default Menus;