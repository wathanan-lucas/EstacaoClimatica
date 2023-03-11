import 'bootstrap/dist/css/bootstrap.min.css'
// imr
import React from 'react'
// imrd
import ReactDOM from 'react-dom'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'

class App extends React.Component{
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemErro: null
  }
  
  
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacao: null,
  //     data: null,
  //     icone: null
  //   }
  //   console.log('constructor')
  // }

  componentDidMount(){
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //23/06
    const d1 = new Date(anoAtual, 5, 23)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date (anoAtual, 11, 22)
    //21/03
    const d4 = new Date (anoAtual, 2, 21)
    const sul = latitude < 0
    if (data >= d1 && data < d2)
      return sul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return sul ? 'Primavera' : 'Outono'
    if (data >= d4 && data < d1)
      return sul ? 'Outono' : 'Primavera'
    return sul ? 'Verão' : 'Inverno'
  }
  icones = {
    'Primavera': 'fa-seedling',
    'Verão': 'fa-umbrella-beach',
    'Outono': 'fa-tree',
    'Inverno': 'fa-snowman'
  }
  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (posicao) => {
        const data = new Date()
        const estacao = this.obterEstacao(data, posicao.coords.latitude)
        const icone = this.icones[estacao]
        this.setState({
          latitude: posicao.coords.latitude,
          longitude: posicao.coords.longitude,
          estacao: estacao,
          data: data.toLocaleString(),
          icone: icone
        })

      },
      (erro) => {
        console.log(erro)
        this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
      }  
    )
  }
  render(){
    console.log('render')
    return (
      // .container.border{teste}
      <div className="container mt-2">
        {/* .row.justify-content-center */}
        <div className="row justify-content-center">
         <div className="col-12 col-md-8">
          {/* .card>.card-body */}

          {
            (!this.state.mensagemDeErro && !this.state.latitude) ?
    
            <Loading />
            :

            this.state.mensagemErro ?

            <p className="border rounded p-2 fs-1 texte-center">
              É preciso dar acesso à localização. 
            </p>
            :

            <EstacaoClimatica 
              icone = {this.state}
              estacao = {this.state.estado}
              latitude = {this.state.latitude}
              longitude = {this.state.longitude}
              data = {this.state.data}
              mensagemDeErro = {this.state.mensagemErro}
              obterLocalizacao = {this.obterLocalizacao}
            />
          }
         

         </div>         
        </div>
      </div>
    )
  }
  
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)