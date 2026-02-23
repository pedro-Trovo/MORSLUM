from src.nlp.classificarFrase import classificar_frase_detalhada
from src.nlp.gerarArvoreDep import gerar_arvore


def pipeline_morfossintatico(frase: str):
    tokens = classificar_frase_detalhada(frase)
    svg = gerar_arvore(frase)

    return {
        "tokens": tokens,
        "arvore_svg": svg
    }