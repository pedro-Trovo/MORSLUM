import Menu from "../../components/menu/menu";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Timeline } from 'primereact/timeline';
import { Tooltip } from 'primereact/tooltip';

import { 
  SiReact, 
  SiFlask, 
  SiPython, 
  SiDocker, 
  SiPrimereact,
  SiRedis,
  SiElectron,
  SiJavascript,  
  SiVite      
} from "react-icons/si";

export default function Sobre() {
 
  const tecnologias = [
  
  { nome: "React", icone: SiReact, cor: "bg-blue-500", link: "https://react.dev/", descricao: "Biblioteca para interfaces de usuário" },
  { nome: "Vite", icone: SiVite, cor: "bg-purple-500", link: "https://vitejs.dev/", descricao: "Build tool e servidor de desenvolvimento" },
  { nome: "JavaScript", icone: SiJavascript, cor: "bg-yellow-500", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", descricao: "Linguagem de programação" },
  { nome: "PrimeReact", icone: SiPrimereact, cor: "bg-indigo-500", link: "https://primereact.org/", descricao: "Componentes UI para React" },
  
  
  { nome: "Python", icone: SiPython, cor: "bg-yellow-600", link: "https://www.python.org/", descricao: "Linguagem de programação" },
  { nome: "Flask", icone: SiFlask, cor: "bg-green-500", link: "https://flask.palletsprojects.com/", descricao: "Microframework web em Python" },
  { nome: "Redis", icone: SiRedis, cor: "bg-red-500", link: "https://redis.io/", descricao: "Banco de dados em memória" },
  
  
  { nome: "Docker", icone: SiDocker, cor: "bg-cyan-500", link: "https://www.docker.com/", descricao: "Plataforma de containerização" },
  { nome: "Electron", icone: SiElectron, cor: "bg-blue-800", link: "https://www.electronjs.org/", descricao: "Framework para aplicações desktop" }
];

  const funcionalidades = [
    {
      titulo: "Analisador Morfossintático",
      descricao: "Analisa frases em português e retorna a classificação gramatical de cada palavra (substantivo, verbo, adjetivo, etc.) e gera uma árvore de dependências.",
      icone: "pi pi-search",
      cor: "text-blue-500"
    },
    {
      titulo: "Quiz Interativo",
      descricao: "Teste seus conhecimentos de análise morfossintática com perguntas geradas automaticamente. Cada questão apresenta uma árvore de dependências e alternativas para a classificação da frase.",
      icone: "pi pi-play",
      cor: "text-green-500"
    }
  ];

  // TIMELINE ATUALIZADA CONFORME O CRONOGRAMA DO PRÉ-PROJETO
  const eventos = [
  { 
    status: "Revisão teórica sobre gramática e PLN", 
    data: "Mês 1", 
    icone: "pi pi-book", 
    cor: "#4CAF50" 
  },
  { 
    status: "Estudo de estruturas sintáticas e conjunções", 
    data: "Mês 2", 
    icone: "pi pi-sitemap", 
    cor: "#2196F3" 
  },
  { 
    status: "Pesquisa sobre spaCy e métodos de análise", 
    data: "Mês 2", 
    icone: "pi pi-search", 
    cor: "#FF9800" 
  },
  { 
    status: "Coleta e organização de frases", 
    data: "Mês 3", 
    icone: "pi pi-database", 
    cor: "#9C27B0" 
  },
  { 
    status: "Desenvolvimento do Backend", 
    data: "Mês 4-6", 
    icone: "pi pi-server", 
    cor: "#607D8B" 
  },
  { 
    status: "Desenvolvimento do Frontend", 
    data: "Mês 7-9", 
    icone: "pi pi-mobile", 
    cor: "#E91E63" 
  },
  { 
    status: "Empacotamento com Electron (App Desktop)", 
    data: "Mês 10", 
    icone: "pi pi-desktop", 
    cor: "#3B82F6" 
  },
  { 
    status: "Testes, validação e ajustes finais", 
    data: "Mês 10-11", 
    icone: "pi pi-check-circle", 
    cor: "#00BCD4" 
  },
  { 
    status: "Elaboração do relatório final", 
    data: "Mês 10-11", 
    icone: "pi pi-file", 
    cor: "#F44336" 
  }
];

  // Template do timeline
  const timelineTemplate = (item) => {
    return (
      <div className="flex align-items-center gap-3">
        <div 
          className="w-3rem h-3rem border-circle flex align-items-center justify-content-center text-white"
          style={{ backgroundColor: item.cor }}
        >
          <i className={`${item.icone} text-xl`}></i>
        </div>
        <div>
          <h4 className="m-0">{item.status}</h4>
          <small className="text-gray-500">{item.data}</small>
        </div>
      </div>
    );
  };

  // Template personalizado para o Chip com link
  const chipTemplate = (tec) => {
    const Icone = tec.icone;
    return (
      <a 
        href={tec.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-decoration-none"
        data-pr-tooltip={tec.descricao}
        data-pr-position="top"
      >
        <div 
          className={`flex align-items-center gap-2 px-3 py-2 ${tec.cor} text-white border-round cursor-pointer hover:opacity-80 transition-all`}
          style={{ borderRadius: "16px" }}
        >
          <Icone size={24} />
          <span className="font-medium">{tec.nome}</span>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen surface-ground">
      
      <Tooltip target=".p-chip-link" />
      <Menu title="Sobre" />
      
      <div className="max-w-7xl mx-auto p-4">

        {/* Seção Sobre o Projeto */}
        <Card className="mb-5 shadow-2">
          <div className="flex align-items-center gap-3 mb-3">
            <i className="pi pi-question-circle text-3xl text-blue-500"></i>
            <h2 className="text-2xl m-0">O que é o MORSLUM</h2>
          </div>
          <p className="text-lg text-gray-700 line-height-3">
            O <strong>MORSLUM</strong> (MORphoSyntaxis LaboratoriUM) é uma plataforma voltada à análise morfossintática da língua portuguesa, 
            desenvolvida como Projeto de Pesquisa no Programa de Iniciação Científica da FATEC Ipiranga, com foco educacional, experimental e demonstrativo, 
            visando auxiliar no ensino e na aprendizagem da morfossintática da língua portuguesa.
          </p>
          <p className="text-lg text-gray-700 line-height-3">
            Utilizando técnicas de Processamento de Linguagem Natural (PLN) e a biblioteca spaCy, o sistema é capaz de 
            analisar frases em português, identificar classes gramaticais e gerar árvores de dependência sintática, 
            proporcionando uma experiência visual e interativa para o estudo da língua.
          </p>
        </Card>

        {/* Funcionalidades */}
        <Card className="mb-5 shadow-2">
          <div className="flex align-items-center gap-3 mb-4">
            <i className="pi pi-star text-3xl text-yellow-500"></i>
            <h2 className="text-2xl m-0">Funcionalidades</h2>
          </div>
          
          <div className="grid">
            {funcionalidades.map((func, index) => (
              <div key={index} className="col-12 md:col-6">
                <div className="surface-card border-round shadow-1 p-4 h-full">
                  <div className="flex flex-column align-items-center text-center">
                    <i className={`${func.icone} ${func.cor} text-5xl mb-3`}></i>
                    <h3 className="text-xl mb-2">{func.titulo}</h3>
                    <p className="text-gray-600 m-0">{func.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        {/* Tecnologias Utilizadas */}
        <Card className="mb-5 shadow-2">
          <div className="flex align-items-center gap-3 mb-3">
            <i className="pi pi-cog text-3xl text-orange-500"></i>
            <h2 className="text-2xl m-0">Tecnologias Utilizadas</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-content-center">
            {tecnologias.map((tec, index) => (
              <div key={index} className="p-chip-link">
                {chipTemplate(tec)}
              </div>
            ))}
          </div>
        </Card>


        {/* Timeline do Projeto */}
        <Card className="mb-5 shadow-2">
          <div className="flex align-items-center gap-3 mb-3">
            <i className="pi pi-calendar text-3xl text-indigo-500"></i>
            <h2 className="text-2xl m-0">Cronograma de Desenvolvimento</h2>
          </div>
          <Timeline 
            value={eventos} 
            content={timelineTemplate}
            className="custom-timeline"
          />
        </Card>

        {/* Autor */}
        <Card className="shadow-2">
          <div className="flex align-items-center gap-3 mb-3">
            <i className="pi pi-users text-3xl text-green-500"></i>
            <h2 className="text-2xl m-0">Autoria</h2>
          </div>
          
          <div className="grid">
            <div className="col-12 md:col-6">
              <div className="flex flex-column gap-3">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-user text-xl text-gray-500"></i>
                  <span className="text-gray-700">Desenvolvido por: <strong>Pedro Trovo</strong></span>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-github text-xl text-gray-500"></i>
                  <a href="https://github.com/pedro-Trovo/MORSLUM" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Repositório do Projeto
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-12 md:col-6">
              <div className="flex flex-column gap-3">
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-envelope text-xl text-gray-500"></i>
                  <a href="mailto:pedroramostrovo@gmail.com" className="text-blue-600 hover:underline">
                    E-mail
                  </a>
                </div>
                <div className="flex align-items-center gap-2">
                  <i className="pi pi-linkedin text-xl text-gray-500"></i>
                  <a href="https://www.linkedin.com/in/pedro-trovo-link/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="text-center text-gray-500 text-sm">
            <p>© 2026 MORSLUM</p>
          </div>
        </Card>
      </div>

      <style jsx>{`
        .custom-timeline .p-timeline-event-opposite {
          display: none;
        }
        .custom-timeline .p-timeline-event-content {
          padding-bottom: 1.5rem;
        }
        .p-chip-link a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}