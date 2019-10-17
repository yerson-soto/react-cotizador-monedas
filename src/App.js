import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import axios from 'axios';

class App extends Component {
    state = {  
        monedas: []
    }

    componentDidMount() {
        this.obtenerMonedas();
    }

    obtenerMonedas = async () => {
        const url = `https://api.coinmarketcap.com/v2/ticker/`;

        await fetch(url)
            .then(respuesta => {
                console.log(respuesta.json())
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() { 
        return (  
            <div className="container">
                <Header
                    titulo="Cotizador de Criptomonedas"
                />

                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light pb-4 contenido-principal">
                        <Formulario

                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;



