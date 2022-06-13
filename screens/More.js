import { View, Text, SafeAreaView,StatusBar } from 'react-native'
import MenuHeader from '../components/MenuHeader'
import MoreButton from '../components/MoreButton'

const More = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar/>
    <MenuHeader title='More'/>
    <View style={{flex:1, backgroundColor:'lightgray'}}>
            <MoreButton text="My Orders" leftIcon="icon" rightIcon="angle-right"/>
            <MoreButton text="My Profile"  leftIcon="icon" rightIcon="angle-right"/>
            <MoreButton text="Store Location" leftIcon="icon" rightIcon="angle-right"/>
            <MoreButton text="Contact us"  leftIcon="icon" rightIcon="angle-right"/>
            <MoreButton text="Change password" leftIcon="icon" rightIcon="angle-right"/>
            <MoreButton text="About Us" leftIcon="icon"  />
            <MoreButton text="Mithao Bhook" leftIcon="icon"/>
            <MoreButton text="Our secret recipe" leftIcon="icon"/>
            <MoreButton text="Privacy policy" leftIcon="icon"/>
            <MoreButton text="Terms and conditions" leftIcon="icon"/>
            <MoreButton text="Logout" leftIcon="icon"/>
         
            
    </View>
    
</SafeAreaView>
  )
}

export default More