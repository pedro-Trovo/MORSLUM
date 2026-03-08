import api from "./api";

export const quizService = {
  getQuestao() {
    return api.get("/quiz").then(res => res.data);
  },

  responder(questaoId, resposta, respostaCorreta) {
    return api.post("/resposta", {
      questao_id: questaoId,
      resposta_usuario: resposta,
      resposta_correta: respostaCorreta  
    }).then(res => res.data);
  }
};