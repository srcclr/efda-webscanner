from flask import Flask, request, jsonify

from app import utils
from app.scanners import owasp

server = Flask(__name__)


@server.route("/")
def hello():
    return "Hello World!"


@server.route("/efda/list")
def list_efda():
    return jsonify(utils.find_efda_projects("efda"))


@server.route("/scan/owasp", methods=["POST"])
def scan_owasp():
    target = request.form["target"]
    project_paths = utils.find_efda_projects("efda")

    if target == "all":
        # TODO
        return None
    elif target not in project_paths:
        abort(404)
    else:
        return jsonify(owasp.scan(target))
