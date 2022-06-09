import { View, Text, SafeAreaView,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import MenuHeader from '../components/MenuHeader'

const More = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar/>
    <MenuHeader title='More'/>
    <View style={{flex:6, backgroundColor:'lightgray'}}>
    <View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly'}}>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40 }}><Text style={{textAlign:'center'}}>My Orders</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40, paddingHorizontal:65}}><Text style={{textAlign:'center'}}>My Profile</Text></View></TouchableOpacity>
      </View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly'}}>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40 , paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Store Location</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40, paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Contact Us</Text></View></TouchableOpacity>
      </View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly'}}>
      <TouchableOpacity><View style={{backgroundColor:'white',justifyContent:'center',margin:10,padding:40 , paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Contact us</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40, paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Change Password</Text></View></TouchableOpacity>
      </View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly'}}>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40 , paddingHorizontal:80}}><Text style={{textAlign:'center'}}>About Us</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40, paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Mitao Bhook</Text></View></TouchableOpacity>
      </View>
      <View style={{width:'100%',flexDirection:'row',justifyContent:'space-evenly'}}>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40 , paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Our Secret Recipe</Text></View></TouchableOpacity>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40, paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Privacy policy</Text></View></TouchableOpacity>
      </View> 
      <View style={{width:'100%'}}>
      <TouchableOpacity><View style={{backgroundColor:'white', justifyContent:'center',margin:10,padding:40 , paddingHorizontal:80}}><Text style={{textAlign:'center'}}>Our Secret Recipe</Text></View></TouchableOpacity>
      </View>     
    </View>
    <View style={{flex:1,backgroundColor:'lightgray', flexDirection:'row', justifyContent:'flex-end',alignItems:'center'}}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity><View style={{backgroundColor:'red',width:150, borderRadius:50, justifyContent:'center',margin:10,padding:15}}><Text style={{textAlign:'center',color:'white'}}>Log out</Text></View></TouchableOpacity>
      </View>       
    </View>
    
</SafeAreaView>
  )
}

export default More