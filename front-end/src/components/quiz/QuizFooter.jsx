import { Link } from "react-router-dom";

export default function QuizFooter() {
  return (
    <div className="text-center text-color-secondary">
      <p className="m-0 text-sm mb-1">
        <i className="pi pi-info-circle mr-2"></i>
        Selecione uma alternativa e clique em "Responder" para verificar sua resposta
      </p>
      <p className="m-0 text-xs text-gray-400">
        O modelo pode apresentar imprecisões na classificação de algumas palavras.
        <Link to="/sobre#limitacoes" className="text-gray-400 hover:text-blue-500 ml-1 underline">
          Saiba mais
        </Link>
      </p>
    </div>
  );
}
