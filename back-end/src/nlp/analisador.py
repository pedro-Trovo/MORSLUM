import spacy
from spacy import displacy
import re
from src.utils.tradutor_tags import traduzir_tags
from src.nlp.classificarFrase import classificar_frase

nlp = spacy.load("pt_core_news_sm")


def gerar_arvore(frase):
    doc = nlp(frase)
    options = {
        "compact": False,
        "bg": "#072912",
        "color": "#fffcfc",
        "font": "Arial",
        "add_lemma": False,
        "collapse_punct": True,
        "collapse_phrases": False,
        "fine_grained": False,
        "offset_x": 90
    }
    svg = displacy.render(doc, style="dep", options=options)
    svg = re.sub(r'<textPath.*?</textPath>', '', svg, flags=re.DOTALL)
    return svg


def analisar_frase(frase):
    svg = gerar_arvore(frase)

    tags_originais = classificar_frase(frase)

    tags_traduzidas = traduzir_tags(tags_originais)

    doc = nlp(frase)
    tokens = [token.text for token in doc if token.pos_ != "PUNCT"]

    return {
        "arvore_svg": svg,
        "classificacao": {
            "tags_originais": tags_originais,
            "tags_traduzidas": tags_traduzidas,
            "tokens": tokens
        }
    }