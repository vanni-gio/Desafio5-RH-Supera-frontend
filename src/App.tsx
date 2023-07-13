import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page-container" style={{ background: "red" }}>
      <header>
        <h1>Banco App</h1>
      </header>
      <main>
        <div className='container-transferencias'>
          <div className='cotainer-form'>
            <form action="/" method='get'>
              <label className='label-input-form' htmlFor="">Data Início</label>
              <input className='input-form' type="datetime-local" name="data-inicio" id="" />
              <label className='label-input-form' htmlFor="">Data Fim</label>
              <input className='input-form' type="datetime-local" name="data-final" id="" />
              <label className='label-input-form' htmlFor="">Nome Operador Transacionado</label>
              <input className='input-form' type="text" name="nome" id="" />
              <button className='button-form' type='submit'>Pesquisar</button>
            </form>
          </div>
          <div className='container-table-transacoes'>
            <table className='table-transacoes'>
              <tr className='row-transacoes'>
                <th className='col-transacoes'>A</th>
                <th className='col-transacoes'>B</th>
                <th className='col-transacoes'>C</th>
              </tr>
              <tr className='row-transacoes'>
                <th className='col-transacoes'>A</th>
                <th className='col-transacoes'>B</th>
                <th className='col-transacoes'>C</th>
              </tr>
              <tr className='row-transacoes'>
                <th className='col-transacoes'>A</th>
                <th className='col-transacoes'>B</th>
                <th className='col-transacoes'>C</th>
              </tr>
            </table>
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;
