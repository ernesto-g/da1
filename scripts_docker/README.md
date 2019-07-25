# Compilador TS

Copiar "compile_ts.sh" en la carpeta "src" donde estan los archivos ".ts". Acceder al directorio "src" y ejecutar: 

```sh
$ ./compile_ts.sh . ../js
```

Siendo "." el directorio actual y "../js" la carpeta "js" que está al mismo nivel que "src".
Para detenerlo, ejecutar:
```sh
$ docker stop ts_compiler
```

# Servidor estático HTTP

Copiar "serve_http.sh" a la carpeta con el sitio web (donde está index.html), acceder a dicho directorio y ejecutar:

```sh
$ ./serve_http.sh . 8000
```

Siendo "." el directorio actual y 8000 el puerto. Para comprobar el funcionamiento acceder desde un navegador a localhost:8000
Para detenerlo, ejecutar:
```sh
$ docker stop http-server
```

# Servidor de PHP

Copiar "serve_php_app.sh" a la carpeta con el sitio web (donde está index.php), acceder a dicho directorio y ejecutar:

```sh
$ ./serve_php_app.sh . 8000
```

Siendo "." el directorio actual y 8000 el puerto. Para comprobar el funcionamiento acceder desde un navegador a localhost:8000/index.php
Para detenerlo, ejecutar:
```sh
$ docker stop php-server
```

