from src.nlp.spacy_loader import get_nlp

nlp = get_nlp()

def classificar_frase(frase, remover_pontuacao=True):
    doc = nlp(frase)

    if remover_pontuacao:
        return [t.pos_ for t in doc if t.pos_ != "PUNCT"]

    return [t.pos_ for t in doc]