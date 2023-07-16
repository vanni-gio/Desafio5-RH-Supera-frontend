import { Conta } from "../../types/Conta";
import { EnumTipoTransferencia } from "../../types/TipoTransferencia";
import { Transferencia } from "../../types/Transferencia";
import { MDBDataTable } from 'mdbreact';


interface PropsTabelaTransferencias  {
    dadosTabela: Transferencia[];
}

interface RowsDataTable {
    dataTransferencia: string;
    valor: string;
    tipo: string;
    nomeOperadorTransferencia: string;
    cpf: string;
    nroConta: number;
    saldoConta?: number;
}

const formatTiposTransferencia = (tipo: EnumTipoTransferencia) => {
   
 
    switch (tipo) {
        case EnumTipoTransferencia.DEPOSITO:
            return 'Depósito';
        case EnumTipoTransferencia.TRANSFERENCIA_ENTRADA:
            return 'Transferência de Entrada';
        case EnumTipoTransferencia.SAQUE:
            return 'Saque';
        case EnumTipoTransferencia.TRANSFERENCIA_SAIDA:
            return 'Transferência de Saída';
    
        default:
            return 'Tipo inválido';
    }
}

export const TabelaTransferencias = ({dadosTabela}: PropsTabelaTransferencias) => {
    
    const rowsDataTable: RowsDataTable[] = dadosTabela.map(t => {
        let valorFormatado = Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(t.valor);
        let dataFormatada = new Date(t.dataTransferencia).toLocaleDateString('en-GB');
        return {
            dataTransferencia: dataFormatada,
            valor: valorFormatado,
            tipo: formatTiposTransferencia(t.tipo),
            nomeOperadorTransferencia: t.nomeOperadorTransferencia,
            cpf: `${t.conta.cpf.slice(0,3)}.${t.conta.cpf.slice(3,6)}.${t.conta.cpf.slice(6,9)}-${t.conta.cpf.slice(9,11)}`,
            nroConta: t.conta.nroConta
        }
    })

    const colunasDataTable = [
        {
            label: 'Nro. Conta',
            field: 'nroConta',
            sort: 'disabled',
        },
        {
            label: 'CPF',
            field: 'cpf',
            sort: 'disabled',
        },
        {
            label: 'Data',
            field: 'dataTransferencia',
            sort: 'disabled',
        },
        {
            label: 'Valencia',
            field: 'valor',
            sort: 'disabled',
        },
        {
            label: 'Tipo',
            field: 'tipo',
            sort: 'disabled',
        },
        {
            label: 'Nome Operador Transferência',
            field: 'nomeOperadorTransferencia',
            sort: 'disabled',
        },
    ]
    
    const dadosMDBTable = {
        columns: colunasDataTable,
        rows: rowsDataTable
    }

    return (
        <MDBDataTable
        className="my-table"
        searching={false}
        responsive={true}
        hover={true}
        data={dadosMDBTable}
        noBottomColumns={true}
        
      />)
  }