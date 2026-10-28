function ServicosCard({ servico, voltar }) {
  return (
    <div className="servicos-card">
      {/* <div className="servicos-card__icon">{servico.icon}</div> */}
      <h3 className="servicos-card__title">{servico.title}</h3>
      <p className="servicos-card__description">{servico.summary}</p>
      <button onClick={voltar}>Voltar</button>
    </div>
  );
}

export default ServicosCard;
