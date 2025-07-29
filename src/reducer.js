export const ADICIONAR_INTEGRANTE = "ADICIONAR_INTEGRANTE"

const reducer = (estado, acao) => {
    switch (acao.tipo) {
        case ADICIONAR_INTEGRANTE:
            if (acao.colaborador.nome < 2) {
                alert("O Nome do colaborador deve ter pelo menos 2 caracteres")
                return estado
            }
            if (acao.colaborador.cargo < 1) {
                alert("O colaborador deve ter um Cargo")
                return estado
            }
            if (acao.colaborador.imagem < 1) {
                alert("O colaborador deve ter uma Foto")
                return estado
            }
            if (acao.colaborador.time < 1) {
                alert("O colaborador deve pertencer a um Time")
                return estado
            }
            return [...estado, acao.colaborador]
        default:
            return estado
    }
}

export default reducer