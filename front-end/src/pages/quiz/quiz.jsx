import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';

import Menu from "../../components/menu/menu";
import QuizHeader from "../../components/quiz/QuizHeader";
import QuizSVG from "../../components/quiz/QuizSVG";
import QuizAlternativas from "../../components/quiz/QuizAlternativas";
import QuizActions from "../../components/quiz/QuizActions";
import QuizFooter from "../../components/quiz/QuizFooter";

axios.defaults.withCredentials = true;

export default function Quiz() {
  const [questao, setQuestao] = useState(null);
  const [alternativas, setAlternativas] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [respostaUsuario, setRespostaUsuario] = useState(null);
  const [questaoId, setQuestaoId] = useState(null);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const toast = useRef(null);
  const svgContainerRef = useRef(null);

  const carregarQuestao = async () => {
    try {
      const res = await axios.get("http://localhost:5000/quiz");
      setQuestao(res.data);
      setAlternativas(res.data.alternativas);
      setQuestaoId(res.data.questao_id);
      setResultado(null);
      setRespostaUsuario(null);
      setAlternativaSelecionada(null);
    } catch (error) {
      console.error("Erro ao carregar questão:", error);
    }
  };

  const enviarResposta = async () => {
    if (!alternativaSelecionada) {
      toast.current?.show({
        severity: 'warn',
        summary: 'Atenção',
        detail: 'Selecione uma alternativa antes de responder',
        life: 3000
      });
      return;
    }
    
    try {
      const res = await axios.post("http://localhost:5000/resposta", {
        questao_id: questaoId,
        resposta_usuario: alternativaSelecionada
      });

      setResultado(res.data);
      setRespostaUsuario(alternativaSelecionada);
      setAlternativaSelecionada(null);
      
      toast.current?.show({
        severity: res.data.correta ? 'success' : 'error',
        summary: res.data.correta ? 'Correto!' : 'Incorreto',
        detail: res.data.feedback,
        life: 5000
      });
    } catch (error) {
      console.error("Erro ao enviar resposta:", error);
      toast.current?.show({
        severity: 'error',
        summary: 'Erro',
        detail: 'Erro ao enviar resposta',
        life: 3000
      });
    }
  };

  useEffect(() => {
    carregarQuestao();
  }, []);

  if (!questao) {
    return (
      <div className="flex justify-content-center align-items-center min-h-screen">
        <div className="text-center">
          <ProgressSpinner 
            style={{ width: '50px', height: '50px' }} 
            strokeWidth="4" 
            fill="var(--surface-ground)" 
            animationDuration=".5s" 
          />
          <p className="mt-3">Carregando questão...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen surface-ground">
      <Toast ref={toast} />
      <Menu title="Quiz" />
      <div className="p-1 md:p-2 lg:p-0">
        <div className="max-w-6xl mx-auto">
          <div className="surface-card border-round shadow-2 overflow-hidden">
            <div className="p-2 md:p-2 lg:p-3">
              <QuizHeader />
              <QuizSVG svgContainerRef={svgContainerRef} svgHtml={questao.arvore_svg} />
              <QuizAlternativas
                alternativas={alternativas}
                alternativaSelecionada={alternativaSelecionada}
                respostaUsuario={respostaUsuario}
                resultado={resultado}
                setAlternativaSelecionada={setAlternativaSelecionada}
              />
              <QuizActions
                alternativaSelecionada={alternativaSelecionada}
                respostaUsuario={respostaUsuario}
                enviarResposta={enviarResposta}
                carregarQuestao={carregarQuestao}
              />
            </div>
          </div>
          <QuizFooter />
        </div>
      </div>
    </div>
  );
}
