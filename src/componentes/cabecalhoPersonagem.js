import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CabecalhoPersonagem extends Component{

    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <View style={ Styles.container }>
                <Text style={ Styles.font_30 }>{this.props.nome}</Text>
                <Text style={ Styles.font_30 }>Clã: {this.props.cla}</Text>
                <Text style={ Styles.font_30 }>Geração: {this.props.geracao}</Text>
            </View>
        );

    }

}

const Styles = {
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginLeft: 5
    },
    font_30: {
        fontSize: 30
    }
}