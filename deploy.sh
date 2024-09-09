
set -e

# build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# если вы деплоите на https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:https://mikmarsss.github.io/CubeTheGame/ master:gh-pages

cd -