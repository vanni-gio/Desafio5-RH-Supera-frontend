import { Transferencia } from "./Transferencia";

export type Conta = {
    id: number;
    saldoTotal: number;
    nroConta: number;
    cpf: string;
    nomeResponsavel: string;
}