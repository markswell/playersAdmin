import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Atributo  from './atributiVitalidade';

export default class Vitalidade extends Component{

  contagem = ['Escoriado Ok','Machucado -1','Ferido -1','Ferido Gravemente -2','Espancado -2','Aleijado -5','Topor']

  render(){
    return (
      <View style={Styles.container}>
        <View style={Styles.containerMenor}></View>
        <View style={Styles.containerMenor}>
          <Text style={Styles.titulo}>Vitalidade</Text>
          { this.contagem.map((c)=>(<Atributo estado={c} key={c}/>)) }
        </View>
      </View>
    );
  }
}

const Styles = {
  container: {
    flexDirection: 'row',
    
  },
  containerMenor: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 35,
  }
}