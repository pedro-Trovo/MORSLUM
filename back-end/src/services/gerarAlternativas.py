import random
from src.nlp.classificarFrase import classificar_frase
from src.utils.tradutor_tags import traduzir_tags


def gerarAlternativas(frase):
    correta = classificar_frase(frase)
    correta_traduzida = traduzir_tags(correta)

    alternativas = [correta_traduzida]

    while len(alternativas) < 4:
        alternativa_raw = correta.copy()


        if random.random() < 0.7:
            i, j = random.sample(range(len(alternativa_raw)), 2)
            alternativa_raw[i], alternativa_raw[j] = alternativa_raw[j], alternativa_raw[i]
        else:
            for _ in range(2):
                i, j = random.sample(range(len(alternativa_raw)), 2)
                alternativa_raw[i], alternativa_raw[j] = alternativa_raw[j], alternativa_raw[i]

        alternativa_traduzida = traduzir_tags(alternativa_raw)

        if alternativa_traduzida != correta_traduzida and alternativa_traduzida not in alternativas:
            alternativas.append(alternativa_traduzida)

    random.shuffle(alternativas)
    return correta_traduzida, alternativas
