import axios from "axios";
import { Conta } from "../types/Conta";
import { Transferencia } from "../types/Transferencia";

export type GetContasResponse = {
    data: {
        transferencias: Transferencia[]
        saldoTotal: number;
        saldoPeriodo: number;
    };
}

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getTransferencias = (filtro?: string) => {
    let route = '/transferencias';
    if(typeof filtro === 'string'){
        route = route + filtro;
        console.log(route);
        
    }

    try {
        const result = api.get(route).then((response) => {
            //const products: GetContasResponse = response.data['data'];
            const data: GetContasResponse = response;
            
            return data;
        })
        return result;
    } catch (error) {
        throw console.error(error);
    }

}