import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = { value: props.initialValue}
    }
    //props não é alterado
    //Para isso cria-se uma nova classe para poder incrementar e evoluir a informação 
    //Neste caso a informação props.initialValue se tornou state.value
    sum(delta) {
        this.setState({ value: this.state.value + delta})
    }
    
    render(){
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h1>{this.state.value}</h1>
                <h2>Valor Inicial: {this.props.initialValue}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>inc</button>
            </div>
        )
    }
} 