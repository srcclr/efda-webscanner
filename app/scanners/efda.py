import json

import os


def scan(project_dir):
    with open(os.path.join(project_dir, "info.json"), "r") as f:
        return json.load(f)


if __name__ == "__main__":
    import pprint
    pprint.pprint(scan("efda/java/maven/version-range"))
