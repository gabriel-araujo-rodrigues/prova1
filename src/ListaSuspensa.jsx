import './css/ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const aoEscolhido = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
                <select value={props.valor} onChange={aoEscolhido}>
                    <option value="" disabled>Selecione {props.label ? props.label.toLowerCase() : ''}</option>
                    { props.itens.map( item => <option key = {item} value = {item}>{item}</option>) }
                </select>
        </div>

    )

}

export default ListaSuspensa;
