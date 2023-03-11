import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center borded rounded p-3'
        style={{width: '3rem', height: "3rem"}}>
            <div className='spinner-border text-primary'>
                <span className='visually-hidden'>Carregando</span>
            </div>
            <p className='mt-3 text-primary'>{this.props.mensagem}</p>
      </div>
    )
  }
}

Loading.defaultProps = {
    mensagem: 'Carregando'
}

export default Loading