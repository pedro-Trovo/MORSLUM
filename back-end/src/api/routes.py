from flask import Blueprint, jsonify, request, session
from src.services.pipeline import gerar_questao
from src.services.verificarResposta import verificar_resposta
import uuid




api_bp = Blueprint("api", __name__)

@api_bp.route("/quiz")
def gerar_questao_quiz():
    dados = gerar_questao()
    questao_id = str(uuid.uuid4())

    respostas = session.get("respostas", {})
    respostas[questao_id] = dados["correta"]
    session["respostas"] = respostas

    dados.pop("correta")
    dados["questao_id"] = questao_id

    return jsonify(dados)


@api_bp.route("/resposta", methods=["POST"])
def responder():
    data = request.json

    questao_id = data["questao_id"]
    resposta_usuario = data["resposta_usuario"]

    respostas = session.get("respostas", {})
    resposta_correta = respostas.get(questao_id)

    if resposta_correta is None:
        return jsonify({"erro": "Questão inválida ou sessão expirada"}), 400

    resultado = verificar_resposta(resposta_usuario, resposta_correta)

    # opcional: limpar depois de responder
    respostas.pop(questao_id, None)
    session["respostas"] = respostas

    return jsonify(resultado)

