import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import Vitalidade from './src/componentes/vitalidade';
import ForcaVontade from './src/componentes/forcaVontade';
import Sangue from './src/componentes/sangue';
import CabecalhoPersonagem from './src/componentes/cabecalhoPersonagem'

export default class App extends Component {

  constructor(props){
    super(props); 
  }

  render() {
    return (
      <ScrollView>
        <CabecalhoPersonagem nome={'Altair'} cla={'Assamita'} geracao='8ª'/>
        <ForcaVontade fvontade={10} />
        <Sangue psangue={10}/>
        <Vitalidade />
      </ScrollView>
    );
  }
  
}


