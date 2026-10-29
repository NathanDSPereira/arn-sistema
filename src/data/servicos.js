// Lista de serviços da ARN.
//
// Para ADICIONAR um serviço: copie um bloco, mude o `id` (único, sem espaços)
// e preencha os campos. A página e os cards se atualizam sozinhos.
//
// Campos:
//   id       identificador único do serviço
//   title    nome que aparece no card
//   summary  frase curta do card
//   details  texto da página do serviço (ao clicar no card)
//   options  situações que o cliente pode escolher (cada uma abre o WhatsApp)
//   icon     desenho do ícone (caminho SVG, viewBox 24x24)
//
// ATENÇÃO: os textos abaixo são exemplos. Ajuste para o que a ARN realmente faz.

export const services = [
  {
    id: 1,
    title: "TI",
    summary: "Soluções e suporte em tecnologia da informação.",
    icone: "Monitor",
    subservicos: [
      {
        id: 101,
        title: "Manutenção de Software",
        summary: "Diagnóstico e correção de problemas em programas.",
        icone: "Code",
      },
      {
        id: 102,
        title: "Manutenção de Hardware",
        summary: "Diagnóstico e manutenção de computadores e equipamentos.",
        icone: "Cpu",
      },
      {
        id: 103,
        title: "Configuração do Software",
        summary: "Instalação e configuração de programas.",
        icone: "Settings",
      },
    ],
  },
  {
    id: 2,
    title: "Reparos, Manutenção e Reformas",
    summary: "Serviços de manutenção, reparos e reformas para seu imóvel.",
    icone: "Hammer",
    subservicos: [
      {
        id: 201,
        title: "Pintura",
        summary:
          "Pintura de ambientes internos e externos para renovar e valorizar seu imóvel.",
        icone: "PaintRoller",
      },
      {
        id: 202,
        title: "Elétrica",
        summary:
          "Instalações, reparos e manutenção elétrica para sua residência ou empresa.",
        icone: "Zap",
      },
      {
        id: 203,
        title: "Encanamento",
        summary:
          "Reparos hidráulicos, correção de vazamentos e manutenção de tubulações.",
        icone: "Wrench",
      },
      {
        id: 204,
        title: "Serviços de Pedreiro",
        summary:
          "Reparos em alvenaria, assentamento de pisos e revestimentos e pequenas reformas.",
        icone: "BrickWall",
      },
    ],
  },
];
