import React, { Component } from 'react'
import {View, Image, TouchableHighlight, Text} from 'react-native'

export default class Atributo extends Component {
    constructor(props){
        super(props);
        this.state = { marcado: '0' }
    }

    marcar = () => {
      switch(this.state.marcado){
        case '0':
          this.setState({ marcado: '1' });
          break;
        case '1':
          this.setState({ marcado: '2' });
          break;
        case '2':
          this.setState({ marcado: '3' });
          break;
        case '3':
          this.setState({ marcado: '0' });
          break;
      }
    };
    
    render(){
      switch(this.state.marcado){
        case '0':
          return this.viewDesarcada();
        case '1':
          return this.viewMarcadaUm();
        case '2':
          return this.viewMarcadaDois();
        case '3':
          return this.viewMarcadaTres();
        default:
        return this.viewDesarcada();
      }
    }
    
    viewDesarcada = () => (
      <View style={Styles.container}>
        <Text>{this.props.estado}</Text>
        <TouchableHighlight onPress={ this.marcar } underlayColor='#fff' >
          <Image source={require('../resources/ponto_volatil_branco.png')}/>
        </TouchableHighlight>
      </View>
    );

    viewMarcadaUm = () => (
        <View style={Styles.container}>
          <Text>{this.props.estado}</Text>
          <TouchableHighlight onPress={ this.marcar } underlayColor='#fff' >
            <Image source={require('../resources/ponto_volatil_marcado_um.png')}/>
          </TouchableHighlight>
        </View>
    );

    viewMarcadaDois = () => (
        <View style={Styles.container}>
          <Text>{this.props.estado}</Text>
          <TouchableHighlight onPress={ this.marcar } underlayColor='#fff' >
            <Image source={require('../resources/ponto_volatil_marcado_dois.png')}/>
          </TouchableHighlight>
        </View>
    );
    
    viewMarcadaTres = () => (
        <View style={Styles.container}>
          <Text>{this.props.estado}</Text>
          <TouchableHighlight onPress={ this.marcar } underlayColor='#fff' >
            <Image source={require('../resources/ponto_volatil_marcado_tres.png')}/>
          </TouchableHighlight>
        </View>
    );
      
}

const Styles = {
  container: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  }
}