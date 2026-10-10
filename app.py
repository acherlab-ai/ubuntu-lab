
from flask import Flask, jsonify

app = Flask(__name__)

@app.get("/")
def home():
    return """
    <!doctype html>
    <html lang="vi">
      <meta charset="utf-8">
      <title>Python Lab</title>
      <h1>Python Lab is running</h1>
      <p>Ubuntu + Flask</p>
    </html>
    """

@app.get("/health")
def health():
    return jsonify(status="ok")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
