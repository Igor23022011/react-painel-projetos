function Secao({ titulo, children }) {
  return (
    <section className="secao">
      <h2>{titulo}</h2>
      <div className="secao__lista">{children}</div>
    </section>
  );
}

export default Secao;