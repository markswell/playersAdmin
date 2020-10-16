import React, { Component } from 'react';
import { View, Text,TouchableHighlight, Image } from 'react-native';

export default class ForcaVontade extends Component{
    render(){
        return (
            <View >
                <Text style={Styles.titulo}>Força de vontade</Text>
                <FVPermamente fvontade={ this.props.fvontade } />
            </View>
        );
    }
}

class FVPermamente extends Component{

    constructor(props){
        super(props);
        this.state = { valor: 1 }
        this.valorFv = [];
    }


    componentWillMount() {
      for(var i = 1; i <= this.props.fvontade; i++){
        this.valorFv.push(i);
      }
    }
    

    render(){
        return (
            <View style={ Styles.container }>
                { this.valorFv.map(fv => {
                    if( parseInt(this.state.valor) >= fv){
                        return this.getClicado(fv);
                    }else{
                        return this.getNaoClicado(fv);
                    }
                }) }
                
            </View>
        );
    }

    getClicado(fv){
        return (
            <View key={fv}>
                <TouchableHighlight underlayColor='#fff' onPress={ () => {
                    if(this.state.valor === 1 && fv === 1){
                        this.setState({valor: 0 });
                    }
                    else{
                        this.setState({valor: fv });
                    }
                } }>
                    <Image source={ require('../resources/ponto_permanente_preenchido.png') } style={ {width: 30, height: 35}} />
                </TouchableHighlight>
            </View>
        );
    }
    getNaoClicado(fv){
        return (
            <View key={fv} >
                <TouchableHighlight underlayColor='#fff' onPress={ () => {
                   if(this.state.valor === 1 && fv === 1){
                        this.setState({valor: 0 });
                    }
                    else{
                        this.setState({valor: fv });
                    }
                } }>
                    <Image source={  require('../resources/ponto_permanente_branco.png') } style={ {width: 30, height: 35}}/>
                </TouchableHighlight>
            </View>
        );
    }

}


const Styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
    }
}