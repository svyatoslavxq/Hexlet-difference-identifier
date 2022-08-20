install:
	npm ci
node:
	bin/games/gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint .