import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSideBar extends React.Component {
    render(){
        return(
            <View>
                <DrawerItems {...this.props}>

                </DrawerItems>
                <TouchableOpacity
                onPress = {()=>{
                    firebase.auth().signOut(
                        this.props.navigation.navigate("HomeScreen")
                    )
                }}>
                    <Text>log out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}