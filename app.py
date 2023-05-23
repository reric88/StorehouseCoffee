from flask import Flask, url_for, request, redirect, render_template, message_flashed

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')












app.run(debug=True)