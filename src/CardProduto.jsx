import './css/CardProduto.css';

const CardProduto = (props) => {

    const { nome, preco, marca, condicao } = props.produto;

    const precoFormatado = Number(preco).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <div className="card-produto">
            <div className="marca-circulo">
                {marca.charAt(0)}
            </div>
            <h3>{nome}</h3>
            <p className="preco">{precoFormatado}</p>
            <span className={`condicao-tag ${condicao === 'Nova' ? 'nova' : 'usada'}`}>
                {condicao}
            </span>
        </div>
    )
}

export default CardProduto;
