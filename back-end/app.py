from flask import Flask
from flask_cors import CORS
from src.api.routes import api_bp
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")

CORS(app, supports_credentials=True)

app.register_blueprint(api_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
