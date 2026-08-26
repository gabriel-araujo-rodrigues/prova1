import './css/Campo.css'

const Campo = (props) => {


    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
};

    return (
        <div className="campo">
            <label htmlFor="">{props.label}</label>
            <input value = {props.valor} onChange={aoDigitado} type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Campo;