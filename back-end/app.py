import os
from datetime import timedelta
from flask import Flask
from flask_cors import CORS
from flask_session import Session
from dotenv import load_dotenv
from src.api.routes import api_bp

load_dotenv()

app = Flask(__name__)


APP_MODE = os.getenv("APP_MODE", "dev")

app.secret_key = os.getenv("SECRET_KEY")


app.config["SESSION_PERMANENT"] = True
app.config["PERMANENT_SESSION_LIFETIME"] = timedelta(minutes=30)
app.config["SESSION_USE_SIGNER"] = True
app.config["SESSION_KEY_PREFIX"] = "ic_session:"


if APP_MODE == "desktop":

    app.config["SESSION_TYPE"] = "filesystem"
    app.config["SESSION_FILE_DIR"] = os.path.join(os.getcwd(), "sessions")

else:

    from redis import Redis
    app.config["SESSION_TYPE"] = "redis"
    app.config["SESSION_REDIS"] = Redis.from_url(
        os.getenv("REDIS_URL")
    )

Session(app)

CORS(app, supports_credentials=True)

app.register_blueprint(api_bp)

if __name__ == "__main__":
    if APP_MODE == "desktop":
        app.run(host="127.0.0.1", port=5000)
    else:
        # docker / dev
        app.run(host="0.0.0.0", port=5000)