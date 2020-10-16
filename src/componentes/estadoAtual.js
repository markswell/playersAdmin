import React, { Component } from 'react';
import { View } from 'react-native';
import CabecalhoPersonagem  from './cabecalhoPersonagem';
import ForcaVontade  from './forcaVontade';
import Sangue  from './sangue';
import Vitalidade  from './vitalidade';

export default class EstadoAtual extends Component{

  render() {
    return (
      <View>
        <CabecalhoPersonagem nome={'Altair'} cla={'Assamita'} geracao='8ª'/>
        <ForcaVontade fvontade={10} />
        <Sangue psangue={10}/>
        <Vitalidade />
      </View>
    );
  }
}
