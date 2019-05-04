import React, { Component } from 'react'
import {View, Image, TouchableHighlight} from 'react-native'

export default class Atributo extends Component {
    constructor(props){
        super(porps);
    }

    render(){
        return (
        <View>
            <TouchableHighlight onPress={ () => {} }>
                <Image source={require( './src/resources/ponto_volatil_branco.png')}/>          
            </TouchableHighlight>
        </View>
        )
    }
}