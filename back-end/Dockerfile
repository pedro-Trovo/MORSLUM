FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

RUN python -m spacy download pt_core_news_sm

COPY src/ ./src

EXPOSE 5000

CMD ["python", "src/app.py"]
