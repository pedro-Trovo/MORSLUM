import os
import secrets

env_path = os.path.join(os.path.dirname(__file__), ".env")

if os.path.exists(env_path):
    print(".env já existe")
else:
    with open(env_path, "w") as f:
        f.write(f"SECRET_KEY={secrets.token_hex(32)}\n")
        f.write("REDIS_URL=redis://redis:6379/0\n")

    print(".env criado")

