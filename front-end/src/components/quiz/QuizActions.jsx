import { Button } from 'primereact/button';

export default function QuizActions({
  alternativaSelecionada,
  respostaUsuario,
  enviarResposta,
  carregarQuestao
}) {
  return (
    <div className="flex flex-column sm:flex-row justify-content-center align-items-center gap-3 mt-4">
      <Button
        label="Responder"
        icon="pi pi-check"
        severity="primary"
        onClick={enviarResposta}
        disabled={!alternativaSelecionada || respostaUsuario !== null}
        className="w-full sm:w-auto flex-1 sm:flex-initial min-w-10rem"
        iconPos="right"
      />
      
      <Button
        label="Próxima"
        icon="pi pi-arrow-right"
        severity="secondary"
        onClick={carregarQuestao}
        className="w-full sm:w-auto flex-1 sm:flex-initial min-w-10rem"
        iconPos="right"
      />
    </div>
  );
}
