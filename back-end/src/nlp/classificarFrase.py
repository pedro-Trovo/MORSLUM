import spacy

nlp = spacy.load("pt_core_news_sm")

def classificar_frase(frase, remover_pontuacao=True):
    doc = nlp(frase)

    if remover_pontuacao:
        return [t.pos_ for t in doc if t.pos_ != "PUNCT"]

    return [t.pos_ for t in doc]

def classificar_frase_detalhada(frase, remover_pontuacao=True):
    doc = nlp(frase)

    tokens = []
    for t in doc:
        if remover_pontuacao and t.pos_ == "PUNCT":
            continue

        tokens.append({
            "texto": t.text,
            "pos": t.pos_,
            "dep": t.dep_,
            "head": t.head.text
        })

    return tokens