import "./ComoFunciona.css";

function ComoFunciona() {
  return (
    <section id="como-funciona" className="container section">
      <h2 className="section__title">Simples assim.</h2>
      <ol className="steps">
        <li className="step">
          <span className="step__num">1</span>
          <h3>Chame no WhatsApp</h3>
          <p>Diga o que está acontecendo, em poucas palavras.</p>
        </li>
        <li className="step">
          <span className="step__num">2</span>
          <h3>Receba o valor</h3>
          <p>Enviamos diagnóstico, preço e prazo. Só segue se você aprovar.</p>
        </li>
        <li className="step">
          <span className="step__num">3</span>
          <h3>Problema resolvido</h3>
          <p>Atendimento remoto ou presencial, conforme o caso.</p>
        </li>
      </ol>
    </section>
  );
}

export default ComoFunciona;
