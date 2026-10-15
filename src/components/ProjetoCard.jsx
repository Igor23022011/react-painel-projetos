import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({ titulo, descricao, responsavel, status, tecnologias, destaque }) {
  return (
    <article className={destaque ? "card card--destaque" : "card"}>
      <h3 className="card__titulo">{titulo}</h3>
      {destaque && <strong className="card__destaque">★ Projeto em destaque</strong>}
      <p>{descricao}</p>
      <p>Responsável: {responsavel}</p>

      <StatusBadge status={status} />

      <div className="card__tecnologias">
        {tecnologias.map((tecnologia) => (
          <TecnologiaTag key={tecnologia} nome={tecnologia} />
        ))}
      </div>
    </article>
  );
}

export default ProjetoCard;