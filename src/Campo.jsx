import './css/Campo.css'

const Campo = (props) => {
    return (
        <div className="campo">
            <label htmlFor="">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default Campo;