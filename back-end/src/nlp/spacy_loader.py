import spacy
import functools


@functools.lru_cache(maxsize=1)
def get_nlp():
    return spacy.load("pt_core_news_sm")
