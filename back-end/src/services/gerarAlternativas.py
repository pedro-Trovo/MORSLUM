import random
from src.nlp.classificarFrase import classificar_frase
from src.utils.tradutor_tags import traduzir_tags

def gerarAlternativas(frase):
    correta = classificar_frase(frase)
    correta_traduzida = traduzir_tags(correta)

    alternativas = []


    alternativas.append(correta_traduzida)


    while len(alternativas) < 4:
        alternativa = correta.copy()
        random.shuffle(alternativa)
        alternativa_traduzida = traduzir_tags(alternativa)

        if alternativa_traduzida not in alternativas:
            alternativas.append(alternativa_traduzida)

    random.shuffle(alternativas)

    return correta_traduzida, alternativas
