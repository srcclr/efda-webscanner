from pathlib import Path


def find_efda_projects(start_dir):
    """ This function returns a list of paths for all EFDA sub-projects.

    A sub-project in the case of this function is defined as a path that
    contains the `info.json` file.
    """

    ret = []
    path = Path(start_dir)

    for i in path.glob("**/info.json"):
        ret.append(str(i.parent))

    return ret
