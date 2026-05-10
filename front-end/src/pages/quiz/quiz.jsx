import { useState, useEffect, useRef } from "react";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { quizService } from "../../service/quizService";

import Menu from "../../components/menu/menu";
import QuizHeader from "../../components/quiz/QuizHeader";
import QuizSVG from "../../components/quiz/QuizSVG";
import QuizAlternativas from "../../components/quiz/QuizAlternativas";
import QuizActions from "../../components/quiz/QuizActions";
import QuizFooter from "../../components/quiz/QuizFooter";

export default function Quiz() {
  const [questao, setQuestao] = useState(null);
  const [alternativas, setAlternativas] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [respostaUsuario, setRespostaUsuario] = useState(null);
  const [questaoId, setQuestaoId] = useState(null);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
  const [erroCarregar, setErroCarregar] = useState(false);
  const toast = useRef(null);
  const svgContainerRef = useRef(null);

  const carregarQuestao = async (tentativa = 1) => {
    setErroCarregar(false);
    try {
      const data = await quizService.getQuestao(); 
      setQuestao(data);
      setAlternativas(data.alternativas);
      setQuestaoId(data.questao_id);
      setResultado(null);
      setRespostaUsuario(null);
      setAlternativaSelecionada(null);
    } catch (error) {
      console.error(`Erro ao carregar questão (tentativa ${tentativa}):`, error);
      if (tentativa < 3) {
        setTimeout(() => carregarQuestao(tentativa + 1), 2000);
      } else {
        setErroCarregar(true);
        toast.current?.show({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível carregar a questão. Tente novamente.',
          life: 5000
        });
      }
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
      const data = await quizService.responder(questaoId, alternativaSelecionada, questao.resposta_correta);
      setResultado(data);
      setRespostaUsuario(alternativaSelecionada);
      setAlternativaSelecionada(null);
      
      toast.current?.show({
        severity: data.correta ? 'success' : 'error',
        summary: data.correta ? 'Correto!' : 'Incorreto',
        detail: data.feedback,
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
          {erroCarregar ? (
            <>
              <i className="pi pi-exclamation-triangle text-4xl text-yellow-500 mb-3"></i>
              <p className="text-gray-600 mb-3">Não foi possível carregar a questão.</p>
              <Button label="Tentar novamente" icon="pi pi-refresh" onClick={() => carregarQuestao()} />
            </>
          ) : (
            <>
              <ProgressSpinner 
                style={{ width: '50px', height: '50px' }} 
                strokeWidth="4" 
                fill="var(--surface-ground)" 
                animationDuration=".5s" 
              />
              <p className="mt-3">Carregando questão...</p>
            </>
          )}
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