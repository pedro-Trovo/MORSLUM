import os
from redis import Redis
from .settings_base import BaseConfig

class DevConfig(BaseConfig):
    SESSION_TYPE = "redis"
    SESSION_REDIS = Redis.from_url(os.getenv("REDIS_URL"))