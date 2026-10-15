function Indicador({ rotulo, valor }) {
  return (
    <div className="indicador">
      <strong className="indicador__valor">{valor}</strong>
      <span>{rotulo}</span>
    </div>
  );
}

export default Indicador;