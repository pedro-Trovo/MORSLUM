import api from "./api";

export const quizService = {
  getQuestao() {
    return api.get("/quiz").then(res => res.data);
  },

  responder(questaoId, resposta) {
    return api.post("/resposta", {
      questao_id: questaoId,
      resposta_usuario: resposta
    }).then(res => res.data);
  }
};
