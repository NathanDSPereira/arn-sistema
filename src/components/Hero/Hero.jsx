import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="container hero">
      <div className="hero__text">
        <h1>
          Travou, não liga ou ficou sem internet?{" "}
          <span className="accent">A ARN resolve.</span>
        </h1>
        <p className="lead">
          Conte o problema pelo WhatsApp. Você recebe o diagnóstico e o valor
          antes de qualquer serviço.
        </p>
        <div className="actions">
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
          <a className="btn btn--outline btn--lg" data-tel>
            Ligar agora
          </a>
        </div>
        <ul className="checks">
          <li>Orçamento antes do serviço</li>
          <li>Remoto ou presencial</li>
          <li>
            Resposta em <span data-config="responseTime">[PRAZO]</span>
          </li>
        </ul>
      </div>

      <div className="panel">
        <h2>Qual é o problema?</h2>
        <div className="problems">
          <a
            className="problem"
            data-whatsapp
            data-msg="Olá, ARN! Meu equipamento não liga."
          >
            <span className="problem__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v9M6.4 6.4a8 8 0 1 0 11.2 0" />
              </svg>
            </span>
            Não liga
          </a>
          <a
            className="problem"
            data-whatsapp
            data-msg="Olá, ARN! Meu computador está lento ou travando."
          >
            <span className="problem__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 14l4-4M3.3 18a10 10 0 1 1 17.4 0" />
              </svg>
            </span>
            Está lento ou travando
          </a>
          <a
            className="problem"
            data-whatsapp
            data-msg="Olá, ARN! Estou com problema de internet/Wi-Fi."
          >
            <span className="problem__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0" />
              </svg>
            </span>
            Sem internet ou Wi-Fi
          </a>
          <a
            className="problem"
            data-whatsapp
            data-msg="Olá, ARN! Acho que meu computador está com vírus."
          >
            <span className="problem__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />
              </svg>
            </span>
            Vírus ou anúncios estranhos
          </a>
          <a
            className="problem"
            data-whatsapp
            data-msg="Olá, ARN! Perdi arquivos e preciso de ajuda."
          >
            <span className="problem__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </span>
            Perdi meus arquivos
          </a>
          <a
            className="problem"
            data-whatsapp
            data-msg="Olá, ARN! Preciso de suporte para minha empresa."
          >
            <span className="problem__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 10h5a1 1 0 0 1 1 1v10M3 21h18M8 8h2M8 12h2M8 16h2" />
              </svg>
            </span>
            Suporte para minha empresa
          </a>
        </div>
        <p className="panel__note">
          Toque em uma opção e a conversa abre no WhatsApp com a mensagem
          pronta.
        </p>
      </div>
    </section>
  );
}

export default Hero;
