import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Vitalidade from './src/componentes/vitalidade'
import ForcaVontade from './src/componentes/forcaVontade'
import Sangue from './src/componentes/sangue'

export default class App extends Component {

  constructor(props){
    super(props); 
  }

  render() {
    return (
      <ScrollView>
        <ForcaVontade />
        <Sangue />
        <Vitalidade />
      </ScrollView>
    );
  }
  
}


