import Campo from './Campo';
import ListaSuspensa from './ListaSuspensa';
import './css/Formulario.css';
import Botao from './Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const secoes = [
        'Computadores',
        'Acessórios',
        'Impressoras',
        'Games',
        'Gadgets'
    ];

    const marcas = [
        'HP',
        'Dell',
        'Positivo',
        'Asus',
        'Xing Ling genérico'
    ];

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [secao, setSecao] = useState('');
    const [marca, setMarca] = useState('');
    const [condicao, setCondicao] = useState('Nova');

    const salvar = (e) => {
        e.preventDefault();

        if (!secao || !marca) {
            alert('Selecione a seção e a marca do produto.');
            return;
        }

        const produto = { nome, preco, secao, marca, condicao };
        props.aoSalvar(produto);

        // limpa o formulário depois de inserir
        setNome('');
        setPreco('');
        setSecao('');
        setMarca('');
        setCondicao('Nova');
    };

    return (
        <div className='formulario'>
            <form onSubmit={salvar}>
                <h2>Dados do Produto</h2>
                <ListaSuspensa valor = {secao} aoAlterado = {valor => setSecao(valor)} label = "Seção" itens = {secoes} />
                <ListaSuspensa valor = {marca} aoAlterado = {valor => setMarca(valor)} label = "Marca" itens = {marcas} />
                <Campo valor = {nome} aoAlterado = {valor => setNome(valor)} type = "text" label = "Nome" placeholder = "Digite o nome do produto" />
                <Campo valor = {preco} aoAlterado = {valor => setPreco(valor)} type = "number" label = "Preço" placeholder = "Digite o preço" />

                <div className="condicao">
                    <label>
                        <input
                            type="radio"
                            name="condicao"
                            value="Nova"
                            checked={condicao === 'Nova'}
                            onChange={e => setCondicao(e.target.value)}
                        />
                        Nova
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="condicao"
                            value="Usada"
                            checked={condicao === 'Usada'}
                            onChange={e => setCondicao(e.target.value)}
                        />
                        Usada
                    </label>
                </div>

                <Botao texto = "Inserir produto" />
            </form>
        </div>
    )
}

export default Formulario
