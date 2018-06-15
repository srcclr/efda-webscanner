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

    result = subprocess.run(command, stdout=subprocess.PIPE)

    # We trim the 'You specified --no-upload option. Issues were not created
    # as a result.\n' part of the results out.
    stdout = result.stdout[:-71]
    return json.loads(stdout)


if __name__ == "__main__":
    import pprint
    pprint.pprint(scan("efda/java/maven/version-range"))
