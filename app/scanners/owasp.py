import binascii
import subprocess
import json
import os


def scan(project_dir):
    outfile = os.path.join(
        "/opt/efda-webscanner/scanners/dependency-check/tmp",
        binascii.hexlify(os.urandom(16)).decode() + ".json"
    )
    command = [
        "/opt/efda-webscanner/scanners/dependency-check/bin/dependency-check.sh",
        "--project",
        "foo",
        "-f",
        "JSON",
        "-o",
        outfile,
        "-s",
        project_dir
    ]

    result = subprocess.run(command, stdout=subprocess.PIPE)

    ret = None
    with open(outfile, "rb") as f:
        ret = json.load(f)

    os.remove(outfile)

    return normalize_json(ret)


def normalize_json(data):
    ret = {}
    ret["libraries"] = []
    ret["vulnerabilities"] = []

    dependencies = data["dependencies"]
    for dep in dependencies:
        try:
            name = dep["description"]
        except KeyError:
            name = None

        found_versions = list(set([
            i["value"] for i in dep["evidenceCollected"]["versionEvidence"]
        ]))

        ret["libraries"].append( (name, found_versions) )

        try:
            for i in dep["vulnerabilities"]:
                cve = i["name"]
                title = i["description"]
                ret["vulnerabilities"].append( (cve, title) )
        except KeyError:
            pass

    return ret


if __name__ == "__main__":
    import pprint
    pprint.pprint(scan("efda/java/jars/fat-jars"))
