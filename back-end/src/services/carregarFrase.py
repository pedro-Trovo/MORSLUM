import csv
import random
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
CAMINHO_CORPUS = BASE_DIR / "data" / "conjunto_frases.csv"

def sortear_frase():
    if not CAMINHO_CORPUS.exists():
        raise FileNotFoundError(f"Arquivo não encontrado: {CAMINHO_CORPUS}")

    with open(CAMINHO_CORPUS, newline="", encoding="utf-8") as f:
        reader = csv.reader(f)

        frases = [
            linha[1].strip()
            for linha in reader
            if len(linha) >= 2 and linha[1].strip()
        ]

    return random.choice(frases)
