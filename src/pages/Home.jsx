import ComoFunciona from "../components/ComoFunciona/ComoFunciona";
import Atendemos from "../components/Atendemos/Atendemos";
import Sobre from "../components/Sobre/Sobre";
import Empresa from "../components/Empresa/Empresa";
import Contato from "../components/Contato/Contato";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
      <div className="dark">
        <Hero />
      </div>

      <main>
        <ComoFunciona />
        <Atendemos />
        <Sobre />
        <Empresa />
        <Contato />
      </main>
    </>
  );
}

export default Home;
