import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    /*
    O useState é uma ferramenta específica do React para gerenciar estados, permitindo que um componente reaja a mudanças no estado e se renderize novamente. Pode, por exemplo, ser utilizado para modificar o estado de campo no ciclo de vida do React, enquanto uma let pode apenas ser utilizada para armazenar um valor a uma variável, sem mudar a renderização do componente.
    */
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        //console.log('Form foi submetido => ', nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({nome, cargo, imagem, time});
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    /* Função no submit do formulário
    É buscado onSubmit ao invés do click do botão pois assim pode-se fazer as verificações
    dos campos do formulário
    */
    /* Outra forma de passar parâmetros para o componente */
    return (
        <section  className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio="true" label="Nome" placeholder="Digite seu nome"
                valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio="true" label="Cargo" placeholder="Digite seu cargo"
                valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"
                valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa label="Time" itens={props.times}
                valor={time} aoAlterado={valor => setTime(valor)}/>   
                <Botao texto="Criar Card">
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario