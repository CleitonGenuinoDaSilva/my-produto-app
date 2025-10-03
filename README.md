# Publicar projeto no GitHub

## 🚀 Criando repositório do zero
```bash
echo "# my-produto-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M desenv
git remote add origin https://github.com/CleitonGenuinoDaSilva/my-produto-app.git
git push -u origin desenv
