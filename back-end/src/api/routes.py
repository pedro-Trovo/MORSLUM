from flask import Blueprint, jsonify, request, session
from src.services.pipeline import gerar_questao
from src.services.verificarResposta import verificar_resposta
from src.nlp.analisador import analisar_frase
import uuid
import sys




api_bp = Blueprint("api", __name__)


@api_bp.route("/quiz")
def gerar_questao_quiz():
    try:

        dados = gerar_questao()
        questao_id = str(uuid.uuid4())

        dados["questao_id"] = questao_id
        dados["resposta_correta"] = dados["correta"]
        dados.pop("correta")

        return jsonify(dados)

    except Exception as e:
        print(f" ERRO: {e}", file=sys.stderr)
        return jsonify({"erro": str(e)}), 500


@api_bp.route("/resposta", methods=["POST"])
def responder():
    data = request.json

    questao_id = data.get("questao_id")
    resposta_usuario = data.get("resposta_usuario")
    resposta_correta = data.get("resposta_correta")


    if resposta_correta is None:
        return jsonify({"erro": "Resposta correta não fornecida"}), 400

    resultado = verificar_resposta(resposta_usuario, resposta_correta)

    return jsonify(resultado)


@api_bp.route("/analisador", methods=["POST"])
def analisador():
    data = request.get_json()
    frase = data.get("frase")

    if not frase:
        return jsonify({"erro": "Frase é obrigatória"}), 400

    try:
        resultado = analisar_frase(frase)

        return jsonify(resultado)

    except Exception as e:
        print(f"Erro no analisador: {e}")
        return jsonify({"erro": str(e)}), 500