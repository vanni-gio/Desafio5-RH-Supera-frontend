import { Conta } from "./Conta";
import { EnumTipoTransferencia } from "./TipoTransferencia";

export type Transferencia = {
    id: number;
    dataTransferencia: string;
    valor: number;
    tipo: EnumTipoTransferencia;
    nomeOperadorTransferencia: string;
    conta: Conta;
}