import { View, Text, SafeAreaView,FlatList,StatusBar } from 'react-native'
import React from 'react'
import { Menu } from '../constants/data'

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
                  
                  width:'100%'
                }}>
                <Text style={{fontWeight:'bold'}}>Menus</Text>
      </View>
    )
  }


  return (
    <SafeAreaView style={{flex:1}}> 
    <StatusBar/>   
    <View style={{flex:1, width:'100%',justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
     
      
        <FlatList
            data={Menu}
            renderItem={({item})=> 

              <View style={{display:'flex', flexDirection:'row',backgroundColor:'lightgray', padding:20, marginVertical:10,flex:1, justifyContent:'space-evenly'}}>
                
                  <Text style={{flex:1}}>{item.id}</Text>
                  <Text style={{flex:1}}>{item.name}</Text>
                  <Text style={{flex:1}}>Icon</Text>
              

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