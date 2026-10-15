import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({ titulo, descricao, responsavel, status, tecnologias, destaque }) {
  return (
    <article>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>Responsável: {responsavel}</p>

      {destaque && <strong>Projeto em destaque</strong>}
      <StatusBadge status = {status}/>

      <div>
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag
            key={tecnologia}
            nome={tecnologia}
          />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard