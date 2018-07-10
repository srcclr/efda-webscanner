from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

from app import utils
from app.scanners import owasp, sourceclear, efda

import subprocess


server = Flask(__name__)
CORS(server)


@server.route("/")
def hello():
    return send_from_directory("static/", "index.html")


@server.route("/efda/list")
def list_efda():
    return jsonify(utils.find_efda_projects("efda"))


@server.route("/scanners/list")
def list_scanners():
    scanners = ["owasp", "srcclr", "efda"]
    return jsonify(scanners)


@server.route("/scan/efda", methods=["POST"])
def scan_efda():
    target = request.form["target"]
    project_paths = utils.find_efda_projects("efda")

    if target not in project_paths:
        ret = {}
        ret["err_msg"] = "Target {} not found in EFDA.".format(target)
        return jsonify(ret), 404
    else:
        return jsonify(efda.scan(target))


@server.route("/scan/owasp", methods=["POST"])
def scan_owasp():
    target = request.form["target"]
    project_paths = utils.find_efda_projects("efda")

    if target not in project_paths:
        ret = {}
        ret["err_msg"] = "Target {} not found in EFDA.".format(target)
        return jsonify(ret), 404
    else:
        return jsonify(owasp.scan(target))


@server.route("/scan/srcclr", methods=["POST"])
def scan_srcclr():
    target = request.form["target"]
    project_paths = utils.find_efda_projects("efda")

    if target not in project_paths:
        ret = {}
        ret["err_msg"] = "Target {} not found in EFDA.".format(target)
        return jsonify(ret), 404
    else:
        try:
            return jsonify(sourceclear.scan(target))
        except subprocess.CalledProcessError as e:
            ret = {}
            ret["err_msg"] = e.stderr.decode()

            return jsonify(ret), 500
