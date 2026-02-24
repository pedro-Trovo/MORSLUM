import api from "./api";

export const analisadorService = {
  analisarFrase(frase) {
    return api.post("/analisador", { frase })
      .then(res => res.data);
  }
};