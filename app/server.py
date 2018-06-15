from flask import Flask, jsonify

from app import utils

server = Flask(__name__)


@server.route("/")
def hello():
    return "Hello World!"


@server.route("/efda/list")
def list_efda():
    return jsonify(utils.find_efda_projects("efda"))
