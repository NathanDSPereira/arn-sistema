// import "./Contato.css";

function Contato() {
  return (
    <section id="contato" className="container contact">
      <div className="contact__cta">
        <h2 className="section__title">Fale com a ARN agora.</h2>
        <a
          className="btn btn--orange btn--lg"
          data-whatsapp
          data-msg="Olá, ARN! Preciso de ajuda."
        >
          Chamar no WhatsApp
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
      <dl className="contact__list">
        <div>
          <dt>Telefone</dt>
          <dd data-config="phoneDisplay">[TELEFONE]</dd>
        </div>
        <div>
          <dt>E-mail</dt>
          <dd>
            <a data-email data-config="email">
              [E-MAIL]
            </a>
          </dd>
        </div>
        <div>
          <dt>Horário</dt>
          <dd data-config="hours">[DIAS E HORÁRIOS]</dd>
        </div>
        <div>
          <dt>Atendimento</dt>
          <dd data-config="cities">[CIDADES ATENDIDAS]</dd>
        </div>
      </dl>
    </section>
  );
}

export default Contato;
