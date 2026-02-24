import axios from "axios";

export const analisadorService = {
  analisarFrase(frase) {
    return axios.post("http://localhost:5000/analisador", {
      frase
    }, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.data);
  }
};