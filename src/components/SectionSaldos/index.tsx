


export const SectionSaldos = (saldos: { saldoTotal: number; saldoPeriodo: number} ) => {
    const saldoTotalFormatado = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(saldos?.saldoTotal);
    const saldoPeriodoFormatado = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(saldos?.saldoPeriodo);

    return (<section className='section-saldo'>
      <div className='container-saldo'>
        <label className='label-saldo'>Saldo Total: </label>
        <span className='qtd-saldo'>{saldoTotalFormatado}</span>
      </div>
      <div className='container-saldo'>
        <label className='label-saldo'>Saldo no Periodo: </label>
        <span className='qtd-saldo'>{saldoPeriodoFormatado}</span>
      </div>
    </section>);
  }