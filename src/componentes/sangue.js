import React, { Component } from 'react';
import { View, Text,TouchableHighlight, Image } from 'react-native';

export default class Sangue extends Component{
    render(){
        return (
            <View >
                <Text style={Styles.titulo}>Sangue</Text>
                <SanguePreencher />
            </View>
        );
    }
}

class SanguePreencher extends Component{

    constructor(props){
        super(props);
        this.state = { valor: 1 }
    }

    valorFv = [1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40,
                41,42,43,44,45,46,47,48,49,50]

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
                    <Image source={ require('../resources/ponto_volatil_cheio.png') } style={ {width: 40, height: 45,}} />
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
                    <Image source={  require('../resources/ponto_volatil_branco.png') } style={ {width: 40, height: 45,}}/>
                </TouchableHighlight>
            </View>
        );
    }

}


const Styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
    }
}