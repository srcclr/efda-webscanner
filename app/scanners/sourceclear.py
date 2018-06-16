import subprocess
import json


def scan(project_dir):
    command = [
        "srcclr",
        "scan",
        "--json",
        "--no-upload",
        project_dir
    ]

    result = subprocess.run(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )

    # We trim the 'You specified --no-upload option. Issues were not created
    # as a result.\n' part of the results out.
    stdout = result.stdout[:-71]

    # Raises CalledProcessError is return code is non-zero.
    result.check_returncode()

    return normalize_json(json.loads(stdout))


def normalize_json(data):
    ret = {}
    ret["libraries"] = []
    ret["vulnerabilities"] = []

    data = data["records"][0]
    libraries = data["libraries"]
    for i in libraries:
        name = i["name"]
        found_versions = [v["version"] for v in i["versions"]]
        ret["libraries"].append( (name, found_versions) )

    vulnerabilities = data["vulnerabilities"]
    for i in vulnerabilities:
        cve = i["cve"]

        # Prepend CVE- to each identifier to make it consistent with OWASP's
        # output.
        if cve:
            cve = "CVE-" + cve

        title = i["title"]
        ret["vulnerabilities"].append( (cve, title) )

    return ret


if __name__ == "__main__":
    import pprint
    pprint.pprint(scan("efda/java/maven/version-range"))
