import { useEffect, useState } from 'react';
import './App.css';
import { getTransferencias } from './api/api'
import { TabelaTransferencias } from './components/TabelaTransferencias';
import { Transferencia } from './types/Transferencia';
import { FiltroTransferenciaForm } from './components/FiltroTransferenciaForm';
import { SectionSaldos } from './components/SectionSaldos';

const getAndSetDados = (
    setT: React.Dispatch<React.SetStateAction<Transferencia[]>>,
    setS: React.Dispatch<React.SetStateAction<{
    saldoTotal: number;
    saldoPeriodo: number;
  } | undefined>>,
    filtro?: string) => {
      getTransferencias(filtro).then((resp) => {
        setT(resp.data.transferencias);
        setS({saldoPeriodo: resp.data.saldoPeriodo, saldoTotal: resp.data.saldoTotal});
      }).catch((error) => {
        console.log(error);
      });
}



function App() {
  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);
  const [saldos, setSaldos] = useState<{saldoTotal: number, saldoPeriodo: number}>();


  const handleSubmit = (filtro: string) => {    
    getAndSetDados(setTransferencias, setSaldos, filtro);
  }


  useEffect(() => {
    getAndSetDados(setTransferencias, setSaldos);
  }, [getAndSetDados])
  


  return (
    <div className="page-container">
      <header>
        <h1 style={{color: 'seagreen', textShadow: '2px -1px darkseagreen'}}>Banco App</h1>
        <FiltroTransferenciaForm handleSubmit={handleSubmit}></FiltroTransferenciaForm>
        <hr/>
      </header>
      <main className='main-content'>
        <div className='container-transferencias'>
          <div className='container-table-transacoes'>
            <SectionSaldos saldoPeriodo={saldos ? saldos.saldoPeriodo : 0} saldoTotal={saldos ? saldos.saldoTotal : 0}></SectionSaldos>
            <TabelaTransferencias dadosTabela={transferencias}></TabelaTransferencias>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;