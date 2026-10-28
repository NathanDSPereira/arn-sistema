import { useState } from "react";
import { services } from "../../data/servicos";
import "./ServicosLista.css";
import ServicosCard from "../ServicosCard/ServicosCard";
import { Monitor, Code, Cpu, Settings, ArrowLeft } from "lucide-react";

function ServicosLista() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  // const selecionado = services.find((servico) => servico.id === idSelecionado);

  const iconesServicos = {
    Monitor,
    Code,
    Cpu,
    Settings,
    ArrowLeft,
  };

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
          Voltar às categorias
        </button>
      )}

      <div className="servicos__grid">
        {(categoriaSelecionada
          ? (categoriaSelecionada.subservicos ?? [])
          : services
        ).map((servico) => (
          <div
            key={servico.id}
            className="service-card"
          >
            {servico.title}
          </div>
        ))}
      </div>
    </main>
  );
}

export default ServicosLista;
