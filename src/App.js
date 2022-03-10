import React, { useState } from 'react';
import './App.css';


function App() {

    const [ Valor, setValor ] = useState(0);
    const [ user, setUser ] = useState({
      id: 1,
      name: 'Victor Augusto',
      foto: 'https://leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/04-1.jpg'

    });

    function funcAumentar(){
    setValor(Valor + 1);
  }

    function funcDiminuir(){
    setValor(Valor -1);
  }

  return(
      <>
          <div>Quantidade de Itens no carrinho<b>{ Valor } </b></div>
          <button onClick={ funcAumentar}>Adicione item ao carrinho</button>
          <button onClick={ funcDiminuir}>Remover item do carrinho</button>

          <hr/>
    
         <div className='Usuario'> Nome do adasdsadaUsuário: <b>{ user.name }</b>
            <img src={ user.foto } />  
            </div>
      </>
        
    );
}

export default App;
