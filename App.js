import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import EstadoAtual from './src/componentes/estadoAtual';

export default class App extends Component {

  constructor(props){
    super(props); 
  }

  render() {
    return (
      <ScrollView>
        <EstadoAtual/>
      </ScrollView>
    );
  }
  
}


