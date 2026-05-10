import os
import sys
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv


current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, current_dir)
sys.path.insert(0, parent_dir)


from src.api.routes import api_bp
from src.nlp.spacy_loader import get_nlp

load_dotenv()

app = Flask(__name__)

APP_MODE = os.getenv("APP_MODE", "dev")
app.secret_key = os.getenv("SECRET_KEY")


CORS(app, supports_credentials=True)
app.register_blueprint(api_bp)

if APP_MODE == "desktop":
    print("Pré-carregando modelo spaCy...")
    get_nlp()
    print("Modelo spaCy pronto!")

if __name__ == "__main__":
    if APP_MODE == "desktop":
        app.run(host="127.0.0.1", port=5000, debug=False)
    else:
        app.run(host="0.0.0.0", port=5000, debug=True)