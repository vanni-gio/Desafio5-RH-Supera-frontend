import axios from "axios";
import { Conta } from "../types/Conta";
import { Transferencia } from "../types/Transferencia";

export type GetContasResponse = {
    data: Transferencia[];
}

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getTransferencias = () => {
    try {
        const result = api.get('/transferencias').then((response) => {
            //const products: GetContasResponse = response.data['data'];
            const data: GetContasResponse = response;
            
            return data;
        })
        return result;
    } catch (error) {
        throw console.error(error);
    }

}