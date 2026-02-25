from datetime import timedelta

class BaseConfig:
    SESSION_PERMANENT = True
    PERMANENT_SESSION_LIFETIME = timedelta(minutes=30)
    SESSION_USE_SIGNER = True
    SESSION_KEY_PREFIX = "ic_session:"

    CORS_SUPPORTS_CREDENTIALS = True