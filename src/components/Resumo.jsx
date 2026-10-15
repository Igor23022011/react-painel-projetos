import Indicador from "./Indicador";

function Resumo({ total, concluidos, emDesenvolvimento }) {
  return (
    <section className="resumo">
      <h2>Resumo do painel</h2>
      <div className="resumo__lista">
        <Indicador rotulo="projetos no total" valor={total} />
        <Indicador rotulo="concluídos" valor={concluidos} />
        <Indicador rotulo="em desenvolvimento" valor={emDesenvolvimento} />
      </div>
    </section>
  );
}

export default Resumo;