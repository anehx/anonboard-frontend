if [ -n "$GITHUB_API_KEY" ]; then
  cd "$TRAVIS_BUILD_DIR"
  npm run docs
  cd docs
  git init
  git checkout -b gh-pages
  git add .
  git -c user.name='Travis CI' -c user.email='info@travis-ci.org' commit -m "Update docs"
  git push -f -q https://anehx:$GITHUB_API_KEY@github.com/anehx/anonboard-frontend gh-pages &2>/dev/null
  cd "$TRAVIS_BUILD_DIR"
fi
