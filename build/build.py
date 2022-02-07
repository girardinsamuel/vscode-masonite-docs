import pdb
import re
import os
import json
import urllib.request


req = urllib.request.Request(
    "https://docs.masoniteproject.com/",
    data=None,
    headers={
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) "
        + "AppleWebKit/537.36 (KHTML, like Gecko) "
        + "Chrome/35.0.1916.47 Safari/537.36"
    },
)

# Pull the html from the main docs page and find all /docs links
docs = urllib.request.urlopen(req)
links = re.findall('href="(/.*?)"', docs.read().decode("utf-8"))
found = []
pages = []
root = os.path.dirname(__file__)

for url in sorted(set(links)):
    if (
        url.startswith("/#")
        or url.startswith("/upgrade-guide/")
        or url.startswith("/whats-new/")
    ):
        continue

    tokens = url.split("/")
    topic = tokens[-1].title().replace("-", " ")
    slug = tokens[-1]
    category_slug = tokens[1]
    category = category_slug.replace("-", " ").title()
    # home page
    if not slug and not category:
        category = "Home"
        topic = "Home"
    if topic not in found:
        found.append(topic)
        pages.append(
            {
                "topic": topic,
                "slug": slug,
                "category_slug": category_slug,
                "category": category,
                "command": "masoniteDocs"
                + slug.replace("-", " ").title().replace(" ", ""),
            }
        )

# Generate command definitions in package.json
with open(os.path.join(root, "../package.json"), "r") as f:
    data = json.load(f)
    data["contributes"]["commands"] = []
    data["activationEvents"] = []

    for page in pages:
        data["activationEvents"].append("onCommand:extension." + page["command"])
        data["contributes"]["commands"].append(
            {
                "command": "extension.{}".format(page["command"]),
                "category": f"Masonite Docs ({page['category']})",
                "title": page["topic"],
            }
        )

with open(os.path.join(root, "../package.json"), "w") as f:
    json.dump(data, f, indent=4)

# Generate the extension.ts file
with open(os.path.join(root, "../src/extension.ts"), "w+") as f:
    f.write("'use strict';\n")
    f.write("import * as vscode from 'vscode';\n\n")
    f.write("export function activate(context: vscode.ExtensionContext) {\n\n")
    f.write("    let baseUrl = 'https://docs.masoniteproject.com/';\n\n")

    for page in pages:
        f.write(
            "    let "
            + page["command"]
            + " = "
            + "vscode.commands.registerCommand("
            + "'extension."
            + page["command"]
            + "', () => {\n"
            + "        vscode.commands.executeCommand('vscode.open', "
            + "vscode.Uri.parse(baseUrl + '"
            + page["category_slug"]
            + "' + '/' + '"
            + page["slug"]
            + "'));\n"
            + "    });\n"
            + "    context.subscriptions.push("
            + page["command"]
            + ");\n",
        )

    f.write("\n}")

print("Plugin files rebuilt successfully!")
