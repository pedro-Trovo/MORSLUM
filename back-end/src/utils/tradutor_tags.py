import csv
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
CAMINHO_GLOSSARIO = BASE_DIR / "data" / "glossario_tags.csv"


def carregar_glossario():
    glossario = {}

    with open(CAMINHO_GLOSSARIO, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for linha in reader:
            glossario[linha["tag"]] = linha["rotulo_pt"]

    return glossario


GLOSSARIO = carregar_glossario()


def traduzir_tags(lista_tags):
    return [GLOSSARIO.get(tag, tag) for tag in lista_tags]
