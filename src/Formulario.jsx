import Campo from './Campo';
import ListaSuspensa from './ListaSuspensa';
import './css/Formulario.css';


const Formulario = () => {

    const secoes = [
        'Eletrônicos',
        'Cozinha',
        'Eletrodomésticos',
        'Jardim'
    ];

    return (
        <div className='formulario'>
            <form>
                <h2>Dados do Produto</h2>
                <ListaSuspensa label = "Seção" itens = {secoes} />
                <Campo type = "texto" label = "Nome" placeholder = "Digite o nome do produto" />
                <Campo type = "number" label = "Preço" placeholder = "Digite o preço" />  
            </form>
        </div>
    )
}

export default Formulario