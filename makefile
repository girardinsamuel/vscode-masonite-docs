.PHONY: help
help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

init: ## Install extension dependencies
	npm install -g vsce
	npm install
package:
	python build/build.py
	vsce package
local: ## Install package locally
	code --uninstall-extension masonite-docs-0.1.0.vsix
	code --install-extension masonite-docs-0.1.0.vsix
login: ## Login on VS Code Marketplace
	vsce login masonite-framework
