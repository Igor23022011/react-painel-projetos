const classes = {
  "Concluído": "status--concluido",
  "Em Desenvolvimento": "status--desenvolvimento",
  "Planejado": "status--planejado",
};

function StatusBadge({ status }) {
  return <span className={`status ${classes[status] ?? ""}`}>{status}</span>;
}

export default StatusBadge;