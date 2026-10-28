import "./Atendemos.css";

function Atendemos() {
  return (
    <section id="servicos" className="band-light">
      <div className="container section">
        <h2 className="section__title">O que a ARN atende.</h2>
        <div className="services">
          <article className="service">
            <span className="service__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM8 20h8M12 16v4" />
              </svg>
            </span>
            <div>
              <h3>Conserto de computador e notebook</h3>
              <p>Diagnóstico e reparo.</p>
            </div>
          </article>
          <article className="service">
            <span className="service__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 14v-2a9 9 0 0 1 18 0v2M3 14h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2v-2zM21 14h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-2z" />
              </svg>
            </span>
            <div>
              <h3>Suporte remoto</h3>
              <p>Resolvido à distância, sem sair de casa.</p>
            </div>
          </article>
          <article className="service">
            <span className="service__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <div>
              <h3>Atendimento presencial</h3>
              <p>
                Técnico no local, em{" "}
                <span data-config="cities">[CIDADES ATENDIDAS]</span>.
              </p>
            </div>
          </article>
          <article className="service">
            <span className="service__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0" />
              </svg>
            </span>
            <div>
              <h3>Redes e Wi‑Fi</h3>
              <p>Instalação e correção.</p>
            </div>
          </article>
          <article className="service">
            <span className="service__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />
              </svg>
            </span>
            <div>
              <h3>Segurança e backup</h3>
              <p>Antivírus e cópias dos seus arquivos.</p>
            </div>
          </article>
          <article className="service">
            <span className="service__icon">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 4h6v3H9zM7 5H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1M9 13l2 2 4-4" />
              </svg>
            </span>
            <div>
              <h3>Contratos para empresas</h3>
              <p>Suporte recorrente com prazo combinado.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Atendemos;
