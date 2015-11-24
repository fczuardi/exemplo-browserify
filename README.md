# exemplo-browserify

Como baixar, instalar e gerar a build:

```
git clone https://github.com/fczuardi/exemplo-browserify.git
cd exemplo-browserify
npm install
npm run build
npm start
```

## Sobre

Este é um exemplo simples de code-splitting com browserify para ilustrar algo
tipo https://github.com/blogmv/backbone-browserify/issues/1#issuecomment-137759717

Neste exemplo a "página" contacts importa uma biblioteca (sha.js) que não
precisa estar no bundle principal.

Para este caso usei o plugin partition-bundle por questões de comodidade apenas.
Posso fazer outras branches com outros exemplos se for o caso e eu tiver tempo ;)

## Referencias:

- https://github.com/substack/browserify-handbook
- https://github.com/substack/browserify-handbook#bundling
- https://github.com/substack/browserify-handbook#partition-bundle
- https://gist.github.com/substack/68f8d502be42d5cd4942
