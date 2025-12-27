import spacy

nlp = spacy.load("pt_core_news_sm")

def classificar_frase(frase, remover_pontuacao=True):
    doc = nlp(frase)

    if remover_pontuacao:
        return [t.pos_ for t in doc if t.pos_ != "PUNCT"]

    return [t.pos_ for t in doc]
