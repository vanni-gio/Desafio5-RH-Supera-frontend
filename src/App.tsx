import { useEffect, useState } from 'react';
import './App.css';
import { getTransferencias } from './api/api'
import { TabelaTransferencias } from './components/TabelaTransferencias';
import { Transferencia } from './types/Transferencia';
import { FiltroTransferencia } from './components/FiltroTransferencia';

function App() {
  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);

  useEffect(() => {
      getTransferencias().then((resp) => {
        setTransferencias(resp.data);
      }).catch((error) => {
        console.log(error);
      });

  }, [])
  
  return (
    <div className="page-container">
      <header>
        <h1 style={{color: 'seagreen', textShadow: '2px -1px darkseagreen'}}>Banco App</h1>
        <FiltroTransferencia></FiltroTransferencia>
        <hr/>
      </header>
      <main className='main-content'>
        <div className='container-transferencias'>
          <div className='container-table-transacoes'>
              <section className='section-saldo'>
                <div className='container-saldo'>
                  <label className='label-saldo'>Saldo Total: </label>
                  <span className='qtd-saldo'>R$ 50,00</span>
                </div>
                <div className='container-saldo'>
                  <label className='label-saldo'>Saldo no Periodo: </label>
                  <span className='qtd-saldo'>R$ 50,00</span>
                </div>
              </section>
            <TabelaTransferencias dadosTabela={transferencias}></TabelaTransferencias>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
