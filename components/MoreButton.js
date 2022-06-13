import {Text,TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MoreButton = (props) => {
  return (
    <TouchableOpacity style={{flex:1,maxHeight:50,backgroundColor:'white',padding:15,alignItems:'center',justifyContent:'space-between', flexDirection:'row'}}>
    <Text style={{flex:1 , fontSize:13}}>{props.leftIcon}</Text>
    <Text style={{flex:4 ,fontSize:13}}>{props.text}</Text>
    <FontAwesome name={props.rightIcon} style={{fontSize:25,color:'gray'}}/>        
  </TouchableOpacity>
  )
}

export default MoreButton;
