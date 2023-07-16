import { ContainerForm, Form } from "./styles";



export const FiltroTransferencia = () => {
    return (          
        <ContainerForm className='cotainer-form'>
            <Form className='form' action="/" method='get'>
                <div className='container-input-form'>
                    <label className='label-input-form' htmlFor="">Data Início  </label>
                    <input className='input-form' type="date" name="dataInicial" id="" />
                </div>
                <div className='container-input-form'>
                    <label className='label-input-form' htmlFor="">Data Fim   </label>
                    <input className='input-form' type="date" name="dataFinal" id="" />

                </div>
                <div className='container-input-form'>
                    <label className='label-input-form' htmlFor="">Nome Operador Transacionado  </label>
                    <input className='input-form' type="text" name="nomeOperador" id="" />

                </div>
                <button className='button-form' type='submit'>Pesquisar</button>
            </Form>
        </ContainerForm>
  );
}