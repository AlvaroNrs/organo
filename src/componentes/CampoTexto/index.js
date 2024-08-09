import './CampoTexto.css';

//Implicitamente, a função recebe parâmetros
const CampoTexto = (props) => {

/* Apenas fazer um data biding desta forma não funcionaria visualmente.
É necessário manter um estado dentro de uma função
let valor = 'Álvaro';
Isto é feito assim:
Getter e Setter para participar do Ciclo de Vida interno do React
*/

const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
}

    /*
    Exemplo de concatenação:
    const exemplo = `${props.label}...`;
    */
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            {/* Data Biding */}
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio === true} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto