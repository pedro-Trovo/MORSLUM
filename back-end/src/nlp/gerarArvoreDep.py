import spacy
from spacy import displacy
import re

nlp = spacy.load("pt_core_news_sm")

def gerar_arvore(frase):
    doc = nlp(frase)

    options = {
        "compact": False,
        "distance": 85,
        "bg": "#072912",
        "color": "#fffcfc",
        "font": "Arial",
        "arrow_stroke": 1,
        "arrow_width": 6,
        "word_spacing": 25,
        "arrow_spacing": 35,
        "add_lemma": False,
        "collapse_punct": True,
        "collapse_phrases": False,
        "fine_grained": False,
        "offset_x": 90
    }

    svg = displacy.render(doc, style="dep", options=options)

    svg = re.sub(r'<tspan class="displacy-tag".*?</tspan>', '', svg, flags=re.DOTALL)
    svg = re.sub(r'<textPath.*?</textPath>', '', svg, flags=re.DOTALL)

    return svg