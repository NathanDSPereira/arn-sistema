// import "./Empresa.css";

function Empresa() {
  return (
    <section className="container business-wrap">
      <div className="business">
        <div className="business__text">
          <h2>Sua empresa precisa de suporte contínuo?</h2>
          <p>
            Contrato com atendimento recorrente e prazo de resposta combinado
            por escrito.
          </p>
        </div>
        <a
          className="btn btn--black btn--lg"
          data-whatsapp
          data-msg="Olá, ARN! Quero saber sobre suporte para minha empresa."
        >
          Pedir proposta
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Empresa;
