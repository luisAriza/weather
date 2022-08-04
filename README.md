# App del Clima

App basica del clima de diferentes localidades, esto es gracias a la [**API de Open Weather**](https://openweathermap.org/current#geocoding). Utilicé el paradigma de <ins>POO</ins> y para la persistencia de datos <ins>Local Storage</ins>.

Para los estilos utilicé el CDN de Bootstrap: [**Bootswatch**](https://www.bootstrapcdn.com/bootswatch/), e integré la herramienta de [**Webpack**](https://webpack.js.org/) para automatizar y optimizar el codigo.

## Runnning

Para iniciar el proyecto primero ejecuta:

```sh
npm install
```

Una vez instaladas las dependencias, inicia el proyecto:

```sh
npm start
```

Este comando abrira un servidor local en el navegador con la app, el cual nos permite observar los cambios realizados en tiempo real.

## Building

Si quieres enviar tu proyecto a producción ejecuta:

```sh
npm run build
```

Se creará automaticamaente una carpeta llamada "dist" donde estará el codigo **minificado** (_para que pese menos_).

## Deploy

Para subir el codigo a <ins>GitHub Pages</ins> solo ejecuta:

```sh
npm run build:deploy
```

Este comando envia el codigo a producción y se creará una rama en tu repositorio (_gh-pages_) donde solo vivirá el codigo de la capreta "dist".
