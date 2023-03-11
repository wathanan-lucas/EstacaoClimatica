import React, { Component } from 'react'

import ReactDOM from 'react-dom'

export class EstacaoClimatica extends Component {
  state = {
    data: null
  }

  timer = null

  componentDidMount() {
    this.timer = setInterval(() => {
        this.setState({data: new Date().toLocaleDateString()})
    }, 1000)
  }
  
componentWillUnmount() {
    clearInterval(this.timer)
}

    render() {

    console.log(this.props.estacao)
    return (
        <div className="card">
        <div className="card-body">
          
          <div 
            className="d-flex align-items-center border rounded mb-2"
            style={{height: '6rem'}}>
            <i className={`fas fa-5x ${this.props.icone.icone}`}></i>
            <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
          </div>
          <div>
            <p className="text-center">
              {
                this.props.latitude ?
                `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.props.data}.`
                : this.props.mensagemDeErro ?
                `${this.props.mensagemDeErro}`
                :
                `Clique no botão para saber a sua estação climática`
              }
            </p>
          </div>
          <button 
            onClick={this.props.obterLocalizacao}
            className="btn btn-outline-primary w-100 mt-2">
              Qual a minha estação
          </button>
          {/* button.btn.btn-outline-danger.w-100.mt-2{Desmontar componente} */}
          <button 
            className="btn btn-outline-danger w-100 mt-2"
            onClick={() => ReactDOM.unmountComponentAtNode(document.querySelector('#root'))}>
            Desmontar componente
          </button>
        </div>
      </div>
    )
  }
}

export default EstacaoClimatica