#!/bin/bash

if [ -n "$GITHUB_API_KEY" ]; then
  cd "$TRAVIS_BUILD_DIR"
  npm run doc
  cd docs
  git init
  git checkout -b gh-pages
  git add .
  git -c user.name='Travis CI' -c user.email='info@travis-ci.org' commit -m "Update docs"
  git push -f -q https://$GITHUB_API_KEY@github.com/anehx/anonboard-frontend.git gh-pages >/dev/null 2>&1
  cd "$TRAVIS_BUILD_DIR"
fi
