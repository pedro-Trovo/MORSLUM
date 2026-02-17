import { Button } from 'primereact/button';

export default function QuizAlternativas({
  alternativas,
  alternativaSelecionada,
  respostaUsuario,
  resultado,
  setAlternativaSelecionada
}) {
  return (
    <div className="mb-1">
      <div className="flex flex-wrap gap-2 justify-content-center">
        {alternativas.map((alt, i) => {
          let className = "p-button-outlined";
          let severity = "secondary";

          const isSelected = JSON.stringify(alt) === JSON.stringify(alternativaSelecionada);
          const isUser = JSON.stringify(alt) === JSON.stringify(respostaUsuario);
          const isCorrect = 
            resultado?.resposta_correta &&
            JSON.stringify(alt) === JSON.stringify(resultado.resposta_correta);

          if (isSelected && !respostaUsuario) {
            className = "";
            severity = "primary";
          }
          if (isUser && resultado?.correta) {
            className = "";
            severity = "success";
          }
          if (isUser && !resultado?.correta) {
            className = "";
            severity = "danger";
          }
          if (isCorrect) {
            className = "";
            severity = "success";
          }

          return (
            <Button
              key={i}
              label={alt.join(", ")}
              className={`${className} flex-grow-1 md:flex-grow-0`}
              severity={severity}
              disabled={respostaUsuario !== null}
              onClick={() => setAlternativaSelecionada(alt)}
              style={{ 
                minWidth: '120px',
                whiteSpace: 'normal',
                textAlign: 'center',
                height: 'auto',
                minHeight: '48px',
                wordBreak: 'break-word'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
