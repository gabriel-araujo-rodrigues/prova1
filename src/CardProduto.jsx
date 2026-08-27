import './css/CardProduto.css';

const logos = {
    'HP': 'https://tse2.mm.bing.net/th/id/OIP.v-7OY70K3Gkiwng7cD95xgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'Dell': 'https://tse1.mm.bing.net/th/id/OIP.hCmjYVL13ZIsrZcOEYJaJAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'Positivo': 'https://th.bing.com/th/id/R.8b7540aa3b4bf50695e72298bbede292?rik=oq%2fVXSSOvqnJww&pid=ImgRaw&r=0',
    'Asus': 'https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png',
    'Xing Ling genérico': 'https://thumbs.dreamstime.com/b/homem-chin%C3%AAs-dos-desenhos-animados-que-senta-se-com-uma-placa-70027649.jpg',
};

const CardProduto = (props) => {

    const { nome, preco, marca, condicao } = props.produto;

    const precoFormatado = Number(preco).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <div className="card-produto">
            <div className="marca-logo-container">
                <img
                    className="marca-logo"
                    src={logos[marca]}
                    alt={`Logo ${marca}`}
                />
            </div>
            <h3>{nome}</h3>
            <p className="preco">{precoFormatado}</p>
            <span className={`condicao-tag ${condicao === 'Nova' ? 'nova' : 'usada'}`}>
                {condicao}
            </span>
            <button className="botao-excluir" onClick={props.aoExcluir}>
                Excluir
            </button>
        </div>
    )
}

export default CardProduto;
