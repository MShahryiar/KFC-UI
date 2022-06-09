import {View, Text} from 'react-native';

const MenuHeader = (props) => {  
    return(
      <View 
          style=
                {{
                  paddingTop:20,
                  paddingLeft:20,
                  backgroundColor:'white',
                  width:'100%',
                  marginBottom:10                  
                }}>
                <Text style={{fontWeight:'bold'}}>{props.title}</Text>
      </View>
    )
  }

export default MenuHeader;

