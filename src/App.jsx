import './css/App.css';
import Formulario from './Formulario';
import CardProduto from './CardProduto';
import { useState } from 'react';

const secoes = [
  { nome: 'Computadores', cor: '#DCE7FF' },
  { nome: 'Acessórios', cor: '#FFE7D6' },
  { nome: 'Impressoras', cor: '#E4F7DF' },
  { nome: 'Games', cor: '#F3E0FF' },
  { nome: 'Gadgets', cor: '#FFF3C4' },
];

function App(){

  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  const removerProduto = (index) => {
    setProdutos(produtos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header className='container'>
        <h1>Loja</h1>
      </header>

      <Formulario aoSalvar={adicionarProduto} />

      {secoes.map((secao) => {
        const produtosDaSecao = produtos
          .map((produto, index) => ({ ...produto, index }))
          .filter((produto) => produto.secao === secao.nome);

        if (produtosDaSecao.length === 0) {
          return null;
        }

        return (
          <div key={secao.nome} className="secao-loja" style={{ backgroundColor: secao.cor }}>
            <h2>{secao.nome}</h2>

            <div className="lista-produtos">
              {produtosDaSecao.map((produto) => (
                <CardProduto
                  key={produto.index}
                  produto={produto}
                  aoExcluir={() => removerProduto(produto.index)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default App;
