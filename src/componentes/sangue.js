import React, { Component } from 'react';
import { View, Text,TouchableHighlight, Image } from 'react-native';

export default class Sangue extends Component{
    render(){
        return (
            <View >
                <Text style={Styles.titulo}>Sangue</Text>
                <SanguePreencher psangue={ this.props.psangue }/>
            </View>
        );
    }
}

class SanguePreencher extends Component{

    constructor(props){
        super(props);
        this.state = { valor: 1 };
        this.valorSangue = [];
    }

    componentWillMount() {
        for(var i = 1; i <= this.props.psangue; i++){
          this.valorSangue.push(i);
        }
      }

    render(){
        return (
            <View style={ Styles.container }>
                { this.valorSangue.map(fv => {
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
                    <Image source={ require('../resources/ponto_volatil_cheio.png') } style={ {width: 30, height: 35,}} />
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
                    <Image source={  require('../resources/ponto_volatil_branco.png') } style={ {width: 30, height: 35,}}/>
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
        margin: 5,
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
    }
}