import React, { Component } from 'react';
import { View, Text,TouchableHighlight, TextInput, Picker, StyleSheet } from 'react-native';


export default class Cadastro extends Component{

    constructor(props){
        super(props);
        this.state = {nome : '', fvontade: 0, geracao: 12, vitalidadeExtra: 0}
    }

    render(){
        return (
            <View style={ Styles.container }>
                <Text style={ Styles.titulo}>Personagem</Text>
                <View style={  Styles.containerInterno }>
                    <TextInput style={  Styles.input }
                        keyboardType={'numeric'}
                        onChangeText={nome =>{ this.setState({nome: nome });}}
                        placeholder='Nome personagem'/>
                    { this.geracao() }
                    <TextInput style={ Styles.input }
                        keyboardType={'numeric'}
                        onChangeText={fvontade =>{ this.setState({fvontade: fvontade }); }}
                        placeholder='0'/>
                    <TextInput style={  Styles.input }
                        keyboardType={'numeric'}
                        onChangeText={vitalidadeExtra =>{ this.setState({vitalidadeExtra: vitalidadeExtra }); }}
                        placeholder='0'/>
                    <TouchableHighlight style={  Styles.botao }
                        onPress={()=>{}}>
                        <Text style={  Styles.botaoTexto }>Salvar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    geracao = () => (
        <Picker style={  Styles.select }
            selectedValue={ this.state.geracao  }
            onValueChange={ (value, index)=>{
            this.setState({geracao: value})
        } } >
            <Picker.Item label='12ª geração' value={12} />
            <Picker.Item label='11ª geração' value={11} />
            <Picker.Item label='10ª geração' value={10} />
            <Picker.Item label='9ª geração' value={9} />
            <Picker.Item label='8ª geração' value={8} />
            <Picker.Item label='7ª geração' value={7} />
            <Picker.Item label='6ª geração' value={6} />
            <Picker.Item label='5ª geração' value={5} />
            <Picker.Item label='4ª geração' value={4} />
        </Picker>
    );

}


const Styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 35,
        textAlign: 'center',
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        backgroundColor: '#E10202',
        borderRadius: 15,
        height: 50,
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 25,
    },
    input: {
        backgroundColor: '#DDD',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
    },
    select: {
        margin:10,
    },
    containerInterno: {
        flex: 1,
        justifyContent: 'center'
    },
  });
  