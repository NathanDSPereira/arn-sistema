import { useState } from "react";
import { services } from "../../data/servicos";
import "./ServicosLista.css";
import ServicosCard from "../ServicosCard/ServicosCard";
import { ArrowLeft } from "lucide-react";

function ServicosLista() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  // const selecionado = services.find((servico) => servico.id === idSelecionado);

  return (
    <main className="servicos">
      <header className="servicos__header">
        <h1 className="servicos__title">
          {categoriaSelecionada
            ? categoriaSelecionada.title
            : "Nossos Serviços"}
        </h1>

        {!categoriaSelecionada && (
          <p className="servicos__subtitle">
            Escolha o que você precisa e fale com a gente.
          </p>
        )}
      </header>

      {categoriaSelecionada && (
        <button
          type="button"
          className="servicos__back"
          onClick={() => {
            (setCategoriaSelecionada(null), setServicoSelecionado(null));
          }}
        >
          <ArrowLeft size={32} />
        </button>
      )}

      <div className="servicos__grid">
        {(categoriaSelecionada
          ? (categoriaSelecionada.subservicos ?? [])
          : services
        ).map((servico) => (
          <ServicosCard
            key={servico.id}
            className="service-card"
            servico={servico}
            onSelect={(item) => {
              if (!categoriaSelecionada) {
                setCategoriaSelecionada(item);
              } else {
                setServicoSelecionado(item);
              }
            }}
          >
            {servico.title}
          </ServicosCard>
        ))}
      </div>
    </main>
  );
}

export default ServicosLista;
