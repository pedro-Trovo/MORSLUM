import os
import secrets

env_path = os.path.join(os.path.dirname(__file__), ".env")

if os.path.exists(env_path):
    print(".env já existe!")
else:
    secret_key = secrets.token_hex(32)
    with open(env_path, "w") as f:
        f.write(f"SECRET_KEY={secret_key}\n")
    print(f".env criado com SECRET_KEY: {secret_key}")
