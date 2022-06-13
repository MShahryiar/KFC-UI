import { View, Text,SafeAreaView,StatusBar,FlatList,Image } from 'react-native'
import React from 'react'
import MenuHeaderFood from '../components/MenuHeaderFood'
import { Everyday } from '../constants/data'



const EverydayValue = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'lightgray'}}>
      <StatusBar/>
      <MenuHeaderFood title="Everyday Value"/>
      <View style={{flex:10, width:'100%',justifyContent:'center', alignItems:'center', backgroundColor:'lightgray'}}>
     
       
     <FlatList
         data={Everyday}
         renderItem={({item})=><><Image style={{marginVertical:10, height:250,width:'95%', marginHorizontal:10}} source={item.source}/><Text>{item.name}</Text><Text>{item.price}</Text></>
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

export default EverydayValue