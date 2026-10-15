import Secao from './components/Secao'
import Badge from './components/StatusBadge'
import ProjetoCard from './components/ProjetoCard'
import TecnologiaTag from './components/TecnologiaTag'
import Resumo from './components/Resumo'
import './App.css'



const projetos = [
  {id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Controle de produtos e movimentações.",
    responsavel: "Ana",
    status: "Concluído!!",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true
  },

  {
    id: 2,
    titulo: "Portal de Notícias",
    descricao: "Site com publicação e categorização de matérias",
    responsavel: "Bruno",
    status: "Em desenvolvimento...",
    tecnologias: ["React", "Express", "Docker"],
    destaque: false
  },

  {
    id: 3,
    titulo: "App de Receitas",
    descricao: "Cadastro e busca de receitas por ingrediente.",
    responsavel: "Carla",
    status: "Em Desenvolvimento...",
    tecnologias: ["React Native", "Firebase"],
    destaque: false
  },

  {
    id: 4,
    titulo: "Dashboard de Vendas",
    descricao: "Gráficos e relatórios de vendas por período e região.",
    responsavel: "Diego",
    status: "Concluído!!",
    tecnologias: ["Python", "Pandas", "Power BI"],
    destaque: true
  },

  {
    id: 5,
    titulo: "Plataforma de Cursos Online",
    descricao: "Área de alunos com aulas em vídeo e acompanhamento de progresso.",
    responsavel: "Elisa",
    status: "Planejado!",
    tecnologias: ["Next.js", "MongoDB", "Tailwind"],
    destaque: false
  },

  {
    id: 6,
    titulo: "Monitor de Temperatura IoT",
    descricao: "Leitura de sensores e alertas em tempo real.",
    responsavel: "Fábio",
    status: "Em Desenvolvimento...",
    tecnologias: ["Arduino", "MQTT", "Node.js"],
    destaque: false
  },

  {
  id: 7,
  titulo: "Agenda Escolar",
  descricao: "Calendário de provas e entregas da turma.",
  responsavel: "Gabriela",
  status: "Concluído!!",
  tecnologias: ["React", "Firebase"],
  destaque: false
  }
]
    

const total = projetos.length;
const concluidos = projetos.filter((projeto) => projeto.status === "Concluído!!").length;
const emDesenvolvimento = projetos.filter((projeto) => projeto.status === "Em Desenvolvimento...").length


function App() {


  return (
    <>
      <Resumo
        total={total}
        concluidos={concluidos}
        emDesenvolvimento={emDesenvolvimento}
      />

      <Secao titulo="Projetos da turma">
        {projetos.map((projeto) => (
          <ProjetoCard
            key={projeto.id}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            responsavel={projeto.responsavel}
            status={projeto.status}
            tecnologias={projeto.tecnologias}
            destaque={projeto.destaque}
          />
        ))}
      </Secao>
    </>
  )
}

export default App
