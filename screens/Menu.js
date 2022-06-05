import { View, Text, SafeAreaView,FlatList,StatusBar } from 'react-native'
import React from 'react'
import { Menu } from '../constants/data'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Menus = () => {
  
  
  const MenuHeader = () => {
  
    return(
      <View 
          style=
                {{flexDirection:"row",
                  flex:1,
                  alignItems:'center',
                  height:50, 
                  borderBottomWidth:1,
                  paddingLeft:20,
                  backgroundColor:'white',
                  width:'100%'
                }}>
                <Text style={{fontWeight:'bold'}}>Menus</Text>
      </View>
    )
  }


  return (
    <SafeAreaView style={{flex:1}}> 
    <StatusBar/>   
    <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center', backgroundColor:'lightgray'}}>
     
      
        <FlatList
            data={Menu}
            renderItem={({item})=> 
              <View style={{display:'flex',padding:25, flexDirection:'row',backgroundColor:'white',paddingHorizontal:10, marginVertical:10,flex:1, justifyContent:'space-between'}}>                
                  <Text style={{flex:1}}>{item.id}</Text>
                  <Text style={{flex:4}}>{item.name}</Text>
                  <FontAwesome name='chevron-circle-right' style={{fontSize:20,paddingRight:20,color:'grey'}}/>

              </View>
            }
            keyExtractor={(item)=> item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<MenuHeader />}
            style={{
              width:'100%'
            }}
          />
     
    </View>
</SafeAreaView>
  )
}

export default Menus;