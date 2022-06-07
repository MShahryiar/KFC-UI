import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { AutoComplete } from 'antd';

const Bucket = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    
        <View style={{flex:1}}>
         
            <View style={{marginVertical:15, marginHorizontal:15, height:350}}>
                <FontAwesome name="bitbucket" style={{fontSize:200,textAlign:'center',paddingTop:50,color:'lightgray'}}/>
                <Text style={{textAlign:'center', paddingVertical:15}}>Hungry? Add something to your bucket !!!</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>alert("Pressed")}
                >
                  <Text style={{color:'white'}}>START YOUR ORDER</Text>
                </TouchableOpacity>
            </View>
         
        </View>
    </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({
  
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 20,
    justifyContent:'center',
    width:'50%',
    marginLeft:'25%',
  },});
export default Bucket