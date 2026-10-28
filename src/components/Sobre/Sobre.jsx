import "./Sobre.css";

function Sobre() {
  return (
    <section id="quem-somos" className="container about">
      <h2 className="section__title">Quem somos.</h2>
      <div className="about__text">
        <p className="about__lead">
          A ARN Tecnologia &amp; Suporte cuida de computadores, redes e do
          suporte técnico de pessoas e empresas.
        </p>
        <p>
          Nosso jeito é direto: você explica o problema, recebe o valor antes e
          acompanha tudo até a solução.
        </p>
        {/* Edite aqui: conte sua história em uma frase (desde quando atua, equipe, certificações) */}
        <p>
          [SUA HISTÓRIA EM UMA FRASE: desde quando atua, quem são os técnicos,
          certificações]
        </p>
      </div>
    </section>
  );
}

export default Sobre;
