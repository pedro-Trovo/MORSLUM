from src.services.carregarFrase import sortear_frase
from src.services.gerarAlternativas import gerarAlternativas
from src.nlp.gerarArvoreDep import gerar_arvore

def gerar_questao():
    frase = sortear_frase()

    correta, alternativas = gerarAlternativas(frase)
    svg = gerar_arvore(frase)

    return {
        "frase": frase,
        "alternativas": alternativas,
        "arvore_svg": svg,
        "correta": correta
    }
