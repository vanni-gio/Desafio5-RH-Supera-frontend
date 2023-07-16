import { useState } from "react";
import { ContainerForm, Form } from "./styles";
import { getTransferencias } from "../../api/api";

type Props = {
    handleSubmit: (filtro: string) => void;
}

export const FiltroTransferenciaForm = ({handleSubmit}: Props) => {
    const [myAction, setMyAction] = useState<string>('');
    const [dataFinal, setDataFinal] = useState<string>();
    const [dataInicial, setDataInicial] = useState<string>();
    const [nomeOperador, setNomeOperador] = useState<string>();

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(dataInicial);
        const isVazioOuUndefined = (str?: string) => {return str === undefined || str === ''};
        handleSubmit(`?${!isVazioOuUndefined(dataInicial) ? 'dataInicial=' + dataInicial : ''}${!isVazioOuUndefined(dataFinal) ? "&dataFinal=" + dataFinal: ''}${!isVazioOuUndefined(nomeOperador) ?  "&nomeOperador=" + nomeOperador : ''}`
        );
    }

    return (          
        <ContainerForm className='cotainer-form'>
            <Form className='form' method='get' onSubmit={submit}>
                <div className='container-input-form'>
                    <label className='label-input-form' htmlFor="">Data Início  </label>
                    <input className='input-form' type="date" name="dataInicial" id="" onChange={e => setDataInicial(e.target.value)}/>
                </div>
                <div className='container-input-form'>
                    <label className='label-input-form' htmlFor="">Data Fim   </label>
                    <input className='input-form' type="date" name="dataFinal" id=""  onChange={e => setDataFinal(e.target.value)}/>

                </div>
                <div className='container-input-form'>
                    <label className='label-input-form' htmlFor="">Nome Operador Transacionado  </label>
                    <input className='input-form' type="text" name="nomeOperador" id="" onChange={e => setNomeOperador(e.target.value)}/>

                </div>
                <button className='button-form' type='submit'>Pesquisar</button>
            </Form>
        </ContainerForm>
  );
}