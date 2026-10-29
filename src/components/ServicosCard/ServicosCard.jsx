import {
  Monitor,
  Code,
  Cpu,
  Settings,
  Hammer,
  PaintRoller,
  Zap,
  Wrench,
  BrickWall,
} from "lucide-react";

const iconesServicos = {
  Monitor,
  Code,
  Cpu,
  Settings,
  Hammer,
  PaintRoller,
  Zap,
  Wrench,
  BrickWall,
};

function ServicosCard({ servico, onSelect }) {
  const Icone = iconesServicos[servico.icon] ?? Monitor;

  return (
    <button
      type="button"
      className="service-card"
      onClick={() => onSelect(servico)}
    >
      <div className="servico-card__icon">
        <Icone size={32} />
      </div>

      <h2 className="servico-card__title">{servico.title}</h2>

      <p className="servico-card__summary">{servico.summary}</p>
    </button>
  );
}

export default ServicosCard;
