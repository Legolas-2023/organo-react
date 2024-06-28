import './Listas.css'

const Listas = (props) =>{
    return(
        <div className='listas'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                    }
                    )}
            </select>
        </div>
    )
}

export default Listas