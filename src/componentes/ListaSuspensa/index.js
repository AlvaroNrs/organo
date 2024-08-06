import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    
    /* Para uma lista de iterações no React, deve-se fazer da sequinte forma
    O map retorna um novo array de elementos, baseado no que retornamos na função passada por callback.
    */

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}  
            </select>
        </div>
    );
}

export default ListaSuspensa;