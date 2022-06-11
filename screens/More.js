import { View, Text, SafeAreaView,StatusBar } from 'react-native'
import MenuHeader from '../components/MenuHeader'
import MoreButtonTop from '../components/MoreButton'
import MoreButtonBottom from '../components/MoreButton'

const More = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <StatusBar/>
    <MenuHeader title='More'/>
    <View style={{flex:1, backgroundColor:'lightgray'}}>
            <MoreButtonTop text="My Orders" leftIcon="icon" rightIcon="angle-right"/>
            <MoreButtonTop text="My Profile"  leftIcon="icon" rightIcon="angle-right"/>
            <MoreButtonTop text="Store Location" leftIcon="icon" rightIcon="angle-right"/>
            <MoreButtonTop text="Contact us"  leftIcon="icon" rightIcon="angle-right"/>
            <MoreButtonTop text="Change password" leftIcon="icon" rightIcon="angle-right"/>
            <MoreButtonTop text="About Us" leftIcon="icon"/>
            <MoreButtonTop text="Mithao Bhook" leftIcon="icon"/>
            <MoreButtonTop text="Our secret recipe" leftIcon="icon"/>
            <MoreButtonTop text="Privacy policy" leftIcon="icon"/>
            <MoreButtonTop text="Terms and conditions" leftIcon="icon"/>
            <MoreButtonTop text="Logout" leftIcon="icon"/>
         
            
    </View>
    
</SafeAreaView>
  )
}

export default More