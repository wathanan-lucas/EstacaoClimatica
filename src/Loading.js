import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center borded rounded p-3'
        style={{width: '3rem', height: "3rem"}}>
            <span className='visually-hidden'>Carregando</span>
      </div>
    )
  }
}

export default Loading