import os
from .settings_base import BaseConfig

class DesktopConfig(BaseConfig):
    SESSION_TYPE = "filesystem"
    SESSION_FILE_DIR = os.path.join(os.getcwd(), "sessions")