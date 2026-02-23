import base64
from io import BytesIO
from PIL import Image
import cairosvg

from src.services.pipeline_morfossintatico import pipeline_morfossintatico


def analise_morfossintatica_service(frase: str):
    resultado = pipeline_morfossintatico(frase)

    svg = resultado["arvore_svg"]
    tokens = resultado["tokens"]

    png_bytes = cairosvg.svg2png(bytestring=svg.encode("utf-8"))
    image = Image.open(BytesIO(png_bytes))

    buffer = BytesIO()
    image.save(buffer, format="JPEG")

    imagem_base64 = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return {
        "imagem": f"data:image/jpeg;base64,{imagem_base64}",
        "tokens": tokens
    }