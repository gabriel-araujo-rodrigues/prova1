import './css/App.css';
import Formulario from './Formulario';
import CardProduto from './CardProduto';
import { useState } from 'react';

function App(){

  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  return (
    <div>
      <header className='container'>
        <h1>Loja</h1>
      </header>

      <Formulario aoSalvar={adicionarProduto} />

      <div className="lista-produtos">
        {produtos.map((produto, index) => (
          <CardProduto key={index} produto={produto} />
        ))}
      </div>
    </div>
  )
}

export default App;
