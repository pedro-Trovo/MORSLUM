def verificar_resposta(resposta_usuario, resposta_correta):
    correta = resposta_usuario == resposta_correta

    return {
        "correta": correta,
        "resposta_correta": resposta_correta if not correta else None,
        "feedback": "Resposta correta!" if correta else "Resposta incorreta."
    }
