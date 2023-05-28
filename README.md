# API-populate

Proyecto 8: Modelado relacional

## Enunciado de proyecto

Ahora que has creado tu primer servidor en Express, vamos a pedirte como siguiente proyecto que vuelvas a crear otro servidor, pero esta vez debes tener al menos dos modelos de datos relacionados entre sí ⛓️..

Para preparar este proyecto, sigue los siguientes pasos:

- Crea una carpeta para el proyecto.
- Navega a la carpeta y lanza `npm init -y`.
- Instala las dos dependencias principales con `npm i express mongoose`.
- Asegúrate de tener Mongo preparado ya sea instalado o con Docker.
- Prepara tu server para escuchar en el puerto 4001 tal y como hemos explicado en clase y has visto en los videos del contenido.
- Crea un archivo .gitignore en la raíz de tu proyecto y añade dentro el texto `node_modules` para no subir la carpeta de módulos instalados a Github.
- Lanza ahora `git init` e inicializa tu repositorio. Crea un repositorio en Github y haz commit/push del contenido.

En este proyecto tendrás que crear un servidor de **Express** que trabaje con **MongoDB** a través de mongoose. Conectarás tu proyecto cuando el servidor se inicialice.

Al igual que en el proyecto anterior, crearás un modelo de datos a tu gusto, pero esta vez debes buscar algo que tenga otro modelo de datos relacionado, por ejemplo:

- Un atleta olímpico es un documento
- Un juego olímpico es un documento
- Ambos se pueden relacionar por medio de las participaciones del atleta en un juego correspondiente.

En este caso, crearíamos dos modelos `Athlete` y `OlympicGame` que relacionaríamos con una relación 1:N desde el documento **athlete** al documento **olympicGame.**

<aside>
💡 En tu caso, tendrás que buscar un ejemplo adecuado en el que deberás relacionar al menos dos documentos distintos entre si, de forma que el elemento A tenga un array de elementos B, y el elemento B tenga un solo elemento A como referencia. ¡Tu eliges la temática, añade como mínimo cuatro campos a cada documento!

</aside>

Ten en cuenta que comprobaremos la relación entre modelos a raíz de lo que enumeramos en los criterios de aceptación, por lo que tendrás que trabajar con arrays de elementos de mongo y funciones de update en profundidad.

### Criterio de aceptación

Estos criterios son generales y estarán referidos al servidor y base de datos. Cumplirlos es obligatorio para considerar el proyecto completado y que podamos así certificarte como Backend Developer una vez acabez todos los proyectos.

- [ ] El servidor arranca en el puerto **4001** cuando lanzo el comando `npm run start`.
- [ ] El servidor se conecta con una base de datos **MongoDB** en mi equipo local que corre en el puerto 27017.
- [ ] En el README del proyecto están definidos los endpoints que tengo a mi disposición. **Esto ocurre para las dos colecciones diferenciadas:**
  - [ ] Hay un endpoint GET que me permite traer todos los documentos de un tipo de colección.
  - [ ] Hay un endpoint GET que me permite traer un solo elemento por su id de una colección.
  - [ ] Hay un endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.
  - [ ] Hay un endpoint PUT que me permite crear editar un elemento por su id en una colección.
  - [ ] Hay un endpoint DELETE que me permite borrar un elemento por su id en una colección.
- [ ] El **servidor no se rompe si pido una URL no existente**, es decir, dispone de un middleware para capturar errores 404 o rutas no encontradas.
- [ ] Los **códigos de red son correctos** cuando hago peticiones (200 y 201 para objetos creados).
- [ ] De cara a la relación entre modelos, en el README tendré explicados los endpoints que debo consumir para tener acceso a:
  - [ ] Un endpoint GET que me permite recuperar un elemento de la colección A y traer los datos de los elementos de la colección B con los que esté relacionado.
  - [ ] Un endpoint GET que me permite recuperar un elemento de la colección B y los datos de un elemento de la colección A con el que esté relacionado.
  - [ ] Un endpoint PUT que me permite añadir (o quitar si ya existe) un nuevo elemento B al array de elementos relacionado de un documento de la colección A.
  - [ ] Un enpoint PUT que me permite cambiar o eliminar el campo de un documento de la colección B que apunta a un elemento de la colección A con el que está relacionado.

------------------------------------ENDPOINTS--------------------------------

-----MOVIES -----

--createMovie :

POST http://localhost:4001/api/v1/movies/

Body:

{
"title": "One to delete",
"year": "2023",
"director": "Me"
}

Response: Status 200

{
"title": "One to delete",
"year": "2023",
"director": "Me",
"\_id": "647199e29ae5a67591389aa8",
"createdAt": "2023-05-27T05:49:22.995Z",
"updatedAt": "2023-05-27T05:49:22.995Z",
"\_\_v": 0
}

--getAllMovies : Status 200

GET http://localhost:4001/api/v1/movies

Response:

[
{
"_id": "647194a49ae5a67591389a60",
"title": "Scarface",
"year": "1983",
"director": "Brian De Palma",
"createdAt": "2023-05-27T05:27:00.065Z",
"updatedAt": "2023-05-27T05:27:00.065Z",
"__v": 0
},
{
"_id": "647194e19ae5a67591389a63",
"title": "Carlito's Way",
"year": "1993",
"director": "Brian De Palma",
"createdAt": "2023-05-27T05:28:01.160Z",
"updatedAt": "2023-05-27T05:28:01.160Z",
"__v": 0
},
{
"_id": "647195209ae5a67591389a66",
"title": "2001: A Space Odyssey",
"year": "1968",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:29:04.856Z",
"updatedAt": "2023-05-27T05:29:04.856Z",
"__v": 0
},
{
"_id": "647195399ae5a67591389a68",
"title": "A Clockwork Orange",
"year": "1971",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:29:29.666Z",
"updatedAt": "2023-05-27T05:29:29.666Z",
"__v": 0
},
{
"_id": "647195559ae5a67591389a6b",
"title": "Full Metal Jacket",
"year": "1987",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:29:57.950Z",
"updatedAt": "2023-05-27T05:29:57.950Z",
"__v": 0
},
{
"_id": "647195759ae5a67591389a6d",
"title": "Spartacus",
"year": "1960",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:30:29.012Z",
"updatedAt": "2023-05-27T05:30:29.012Z",
"__v": 0
},
{
"_id": "647195809ae5a67591389a6f",
"title": "Lolita",
"year": "1962",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:30:40.610Z",
"updatedAt": "2023-05-27T05:30:40.610Z",
"__v": 0
},
{
"_id": "647195a79ae5a67591389a71",
"title": "GoodFellas",
"year": "1990",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:19.905Z",
"updatedAt": "2023-05-27T05:31:19.905Z",
"__v": 0
},
{
"_id": "647195bc9ae5a67591389a73",
"title": "Taxi Driver",
"year": "1976",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:40.407Z",
"updatedAt": "2023-05-27T05:31:40.407Z",
"__v": 0
},
{
"_id": "647195ca9ae5a67591389a75",
"title": "Mean Streets",
"year": "1973",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:54.185Z",
"updatedAt": "2023-05-27T05:31:54.185Z",
"__v": 0
},
{
"_id": "647195f69ae5a67591389a77",
"title": "Gangs of New York",
"year": "2002",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:32:38.570Z",
"updatedAt": "2023-05-27T05:32:38.570Z",
"__v": 0
},
{
"_id": "647196219ae5a67591389a79",
"title": "Casino",
"year": "1995",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:33:21.803Z",
"updatedAt": "2023-05-27T05:33:21.803Z",
"__v": 0
},
{
"_id": "6471963f9ae5a67591389a7b",
"title": "The Color of Money",
"year": "1986",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:33:51.715Z",
"updatedAt": "2023-05-27T05:33:51.715Z",
"__v": 0
},
{
"_id": "6471964f9ae5a67591389a7d",
"title": "The King of Comedy",
"year": "1982",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:34:07.523Z",
"updatedAt": "2023-05-27T05:34:07.523Z",
"__v": 0
},
{
"_id": "647196599ae5a67591389a7f",
"title": "Raging Bull",
"year": "1980",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:34:17.393Z",
"updatedAt": "2023-05-27T05:34:17.393Z",
"__v": 0
},
{
"_id": "647196979ae5a67591389a81",
"title": "The Godfather",
"year": "1972",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:35:19.649Z",
"updatedAt": "2023-05-27T05:35:19.649Z",
"__v": 0
},
{
"_id": "647196b19ae5a67591389a83",
"title": "Apocalypse Now",
"year": "1979",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:35:45.538Z",
"updatedAt": "2023-05-27T05:35:45.538Z",
"__v": 0
},
{
"_id": "647197049ae5a67591389a85",
"title": "Bram Stroker's Dracula",
"year": "1992",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:37:08.358Z",
"updatedAt": "2023-05-27T05:37:08.358Z",
"__v": 0
},
{
"_id": "647197309ae5a67591389a87",
"title": "The Godfather Part II",
"year": "1974",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:37:52.773Z",
"updatedAt": "2023-05-27T05:37:52.773Z",
"__v": 0
},
{
"_id": "647197509ae5a67591389a89",
"title": "The Godfather Part III",
"year": "1990",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:38:24.253Z",
"updatedAt": "2023-05-27T05:38:24.253Z",
"__v": 0
},
{
"_id": "647197b09ae5a67591389a8b",
"title": "Platoon",
"year": "1986",
"director": "Oliver Stone",
"createdAt": "2023-05-27T05:40:00.417Z",
"updatedAt": "2023-05-27T05:40:00.417Z",
"__v": 0
},
{
"_id": "647197d99ae5a67591389a8d",
"title": "Born on the Fourth of July",
"year": "1989",
"director": "Oliver Stone",
"createdAt": "2023-05-27T05:40:41.234Z",
"updatedAt": "2023-05-27T05:40:41.234Z",
"__v": 0
},
{
"_id": "647198129ae5a67591389a8f",
"title": "Reservoir dogs",
"year": "1992",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:41:38.713Z",
"updatedAt": "2023-05-27T05:41:38.713Z",
"__v": 0
},
{
"_id": "647198289ae5a67591389a91",
"title": "Pulp Fiction",
"year": "1994",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:00.670Z",
"updatedAt": "2023-05-27T05:42:00.670Z",
"__v": 0
},
{
"_id": "6471984b9ae5a67591389a93",
"title": "Unglorious Bastards",
"year": "2009",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:35.108Z",
"updatedAt": "2023-05-27T05:42:35.108Z",
"__v": 0
},
{
"_id": "6471985d9ae5a67591389a95",
"title": "Django Unchained",
"year": "2012",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:53.223Z",
"updatedAt": "2023-05-27T05:42:53.223Z",
"__v": 0
},
{
"_id": "6471987a9ae5a67591389a97",
"title": "Jackie Brown",
"year": "1997",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:43:22.189Z",
"updatedAt": "2023-05-27T05:43:22.189Z",
"__v": 0
},
{
"_id": "647198909ae5a67591389a99",
"title": "Kill Bill: Vol 1",
"year": "2003",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:43:44.062Z",
"updatedAt": "2023-05-27T05:43:44.062Z",
"__v": 0
},
{
"_id": "647198e29ae5a67591389a9b",
"title": "Annie Hall",
"year": "1977",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:45:06.746Z",
"updatedAt": "2023-05-27T05:45:06.746Z",
"__v": 0
},
{
"_id": "647198f19ae5a67591389a9d",
"title": "Manhattan",
"year": "1979",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:45:21.421Z",
"updatedAt": "2023-05-27T05:45:21.421Z",
"__v": 0
},
{
"_id": "647199189ae5a67591389a9f",
"title": "Match Point",
"year": "2005",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:46:00.620Z",
"updatedAt": "2023-05-27T05:46:00.620Z",
"__v": 0
},
{
"_id": "6471992a9ae5a67591389aa1",
"title": "Vicky Cristina Barcelona",
"year": "2008",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:46:18.863Z",
"updatedAt": "2023-05-27T05:46:18.863Z",
"__v": 0
},
{
"_id": "647199439ae5a67591389aa3",
"title": "Midnight in Paris",
"year": "2011",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:46:43.134Z",
"updatedAt": "2023-05-27T05:46:43.134Z",
"__v": 0
}
]

---updateMovie : Status 200

PUT http://localhost:4001/api/v1/movies/6471984b9ae5a67591389a93

Body:

{
"title": "Inglorious Basterds", //modificamos el nombre de "Unglorious Bastards"
"year": "2009",
"director": "Quentin Tarantino"
}

Response: Status 200

{
"\_id": "6471984b9ae5a67591389a93",
"title": "Inglorious Basterds",
"year": "2009",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:35.108Z",
"updatedAt": "2023-05-27T05:48:18.209Z",
"\_\_v": 0
}

--findMovieById:

GET http://localhost:4001/api/v1/movies/6471984b9ae5a67591389a93 (Pasamos el id en params)

Response: Status 200

{
"\_id": "6471984b9ae5a67591389a93",
"title": "Inglorious Basterds",
"year": "2009",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:35.108Z",
"updatedAt": "2023-05-27T05:48:18.209Z",
"\_\_v": 0
}

-- deleteMovie:

DELETE http://localhost:4001/api/v1/movies/647199e29ae5a67591389aa8

Response: Status 200

"Movie deleted successfully"

----DIRECTORS----

-- createDirector:

POST http://localhost:4001/api/v1/directors/

Body: //En el campo "filmography" ponemos los id's de cada 'movie' de la base de datos 'movies' que corresponda
{
"name": "Woody Allen",
"DOB": "30_11_1935",
"filmography": ["647198e29ae5a67591389a9b", "647198f19ae5a67591389a9d", "647199189ae5a67591389a9f", "6471992a9ae5a67591389aa1", "647199439ae5a67591389aa3"

    ]

}

Response: Status 200

{
"name": "Woody Allen",
"DOB": "30_11_1935",
"filmography": [
"647198e29ae5a67591389a9b",
"647198f19ae5a67591389a9d",
"647199189ae5a67591389a9f",
"6471992a9ae5a67591389aa1",
"647199439ae5a67591389aa3"
],
"\_id": "6471a0e69ae5a67591389ac0",
"createdAt": "2023-05-27T06:19:18.356Z",
"updatedAt": "2023-05-27T06:19:18.356Z",
"\_\_v": 0
}

-- getAllDirectors

GET http://localhost:4001/api/v1/directors/

Response: //Al haber hecho un populate, en la respuesta ya tenemos los nombres de cada película con sus datos correspondientes, extraídos directamente de la base de datos 'movies'

[
{
"\_id": "64719a869ae5a67591389aaa",
"name": "Brian De Palma",
"DOB": "11_09_1940",
"filmography": [
{
"_id": "647194a49ae5a67591389a60",
"title": "Scarface",
"year": "1983",
"director": "Brian De Palma",
"createdAt": "2023-05-27T05:27:00.065Z",
"updatedAt": "2023-05-27T05:27:00.065Z",
"__v": 0
},
{
"_id": "647194e19ae5a67591389a63",
"title": "Carlito's Way",
"year": "1993",
"director": "Brian De Palma",
"createdAt": "2023-05-27T05:28:01.160Z",
"updatedAt": "2023-05-27T05:28:01.160Z",
"__v": 0
}
],
"createdAt": "2023-05-27T05:52:06.393Z",
"updatedAt": "2023-05-27T05:52:06.393Z",
"**v": 0
},
{
"\_id": "64719b189ae5a67591389aac",
"name": "Stanley Kubrick",
"DOB": "26_07_1928",
"filmography": [
{
"\_id": "647195209ae5a67591389a66",
"title": "2001: A Space Odyssey",
"year": "1968",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:29:04.856Z",
"updatedAt": "2023-05-27T05:29:04.856Z",
"**v": 0
},
{
"\_id": "647195399ae5a67591389a68",
"title": "A Clockwork Orange",
"year": "1971",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:29:29.666Z",
"updatedAt": "2023-05-27T05:29:29.666Z",
"**v": 0
},
{
"\_id": "647195559ae5a67591389a6b",
"title": "Full Metal Jacket",
"year": "1987",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:29:57.950Z",
"updatedAt": "2023-05-27T05:29:57.950Z",
"**v": 0
},
{
"\_id": "647195759ae5a67591389a6d",
"title": "Spartacus",
"year": "1960",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:30:29.012Z",
"updatedAt": "2023-05-27T05:30:29.012Z",
"**v": 0
},
{
"\_id": "647195809ae5a67591389a6f",
"title": "Lolita",
"year": "1962",
"director": "Stanley Kubrick",
"createdAt": "2023-05-27T05:30:40.610Z",
"updatedAt": "2023-05-27T05:30:40.610Z",
"**v": 0
}
],
"createdAt": "2023-05-27T05:54:32.265Z",
"updatedAt": "2023-05-27T05:54:32.265Z",
"**v": 0
},
{
"\_id": "64719bac9ae5a67591389aae",
"name": "Martin Scorsese",
"DOB": "17_11_1942",
"filmography": [
{
"\_id": "6471964f9ae5a67591389a7d",
"title": "The King of Comedy",
"year": "1982",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:34:07.523Z",
"updatedAt": "2023-05-27T05:34:07.523Z",
"**v": 0
}
],
"createdAt": "2023-05-27T05:57:00.615Z",
"updatedAt": "2023-05-27T05:57:46.517Z",
"**v": 0
},
{
"\_id": "64719ce79ae5a67591389ab1",
"name": "Martin Scorsese",
"DOB": "17_11_1942",
"filmography": [
{
"\_id": "647195a79ae5a67591389a71",
"title": "GoodFellas",
"year": "1990",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:19.905Z",
"updatedAt": "2023-05-27T05:31:19.905Z",
"**v": 0
},
{
"\_id": "647195bc9ae5a67591389a73",
"title": "Taxi Driver",
"year": "1976",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:40.407Z",
"updatedAt": "2023-05-27T05:31:40.407Z",
"**v": 0
},
{
"\_id": "647195ca9ae5a67591389a75",
"title": "Mean Streets",
"year": "1973",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:54.185Z",
"updatedAt": "2023-05-27T05:31:54.185Z",
"**v": 0
},
{
"\_id": "647195f69ae5a67591389a77",
"title": "Gangs of New York",
"year": "2002",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:32:38.570Z",
"updatedAt": "2023-05-27T05:32:38.570Z",
"**v": 0
},
{
"\_id": "647196219ae5a67591389a79",
"title": "Casino",
"year": "1995",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:33:21.803Z",
"updatedAt": "2023-05-27T05:33:21.803Z",
"**v": 0
},
{
"\_id": "6471963f9ae5a67591389a7b",
"title": "The Color of Money",
"year": "1986",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:33:51.715Z",
"updatedAt": "2023-05-27T05:33:51.715Z",
"**v": 0
},
{
"\_id": "6471964f9ae5a67591389a7d",
"title": "The King of Comedy",
"year": "1982",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:34:07.523Z",
"updatedAt": "2023-05-27T05:34:07.523Z",
"**v": 0
},
{
"\_id": "647196599ae5a67591389a7f",
"title": "Raging Bull",
"year": "1980",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:34:17.393Z",
"updatedAt": "2023-05-27T05:34:17.393Z",
"**v": 0
}
],
"createdAt": "2023-05-27T06:02:15.371Z",
"updatedAt": "2023-05-27T06:07:25.153Z",
"**v": 0
},
{
"\_id": "64719eb99ae5a67591389aba",
"name": "Francis Ford Coppola",
"DOB": "07_04_1939",
"filmography": [
{
"_id": "647196979ae5a67591389a81",
"title": "The Godfather",
"year": "1972",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:35:19.649Z",
"updatedAt": "2023-05-27T05:35:19.649Z",
"__v": 0
},
{
"_id": "647196b19ae5a67591389a83",
"title": "Apocalypse Now",
"year": "1979",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:35:45.538Z",
"updatedAt": "2023-05-27T05:35:45.538Z",
"__v": 0
},
{
"_id": "647197049ae5a67591389a85",
"title": "Bram Stroker's Dracula",
"year": "1992",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:37:08.358Z",
"updatedAt": "2023-05-27T05:37:08.358Z",
"__v": 0
},
{
"_id": "647197309ae5a67591389a87",
"title": "The Godfather Part II",
"year": "1974",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:37:52.773Z",
"updatedAt": "2023-05-27T05:37:52.773Z",
"__v": 0
},
{
"_id": "647197509ae5a67591389a89",
"title": "The Godfather Part III",
"year": "1990",
"director": "Francis Ford Coppola",
"createdAt": "2023-05-27T05:38:24.253Z",
"updatedAt": "2023-05-27T05:38:24.253Z",
"__v": 0
}
],
"createdAt": "2023-05-27T06:10:01.762Z",
"updatedAt": "2023-05-27T06:10:01.762Z",
"**v": 0
},
{
"\_id": "64719fbb9ae5a67591389abc",
"name": "Oliver Stone",
"DOB": "15_09_1946",
"filmography": [
{
"\_id": "647197b09ae5a67591389a8b",
"title": "Platoon",
"year": "1986",
"director": "Oliver Stone",
"createdAt": "2023-05-27T05:40:00.417Z",
"updatedAt": "2023-05-27T05:40:00.417Z",
"**v": 0
},
{
"\_id": "647197d99ae5a67591389a8d",
"title": "Born on the Fourth of July",
"year": "1989",
"director": "Oliver Stone",
"createdAt": "2023-05-27T05:40:41.234Z",
"updatedAt": "2023-05-27T05:40:41.234Z",
"**v": 0
}
],
"createdAt": "2023-05-27T06:14:19.294Z",
"updatedAt": "2023-05-27T06:14:19.294Z",
"**v": 0
},
{
"\_id": "6471a0719ae5a67591389abe",
"name": "Quentin Tarantino",
"DOB": "27_03_1963",
"filmography": [
{
"_id": "647198129ae5a67591389a8f",
"title": "Reservoir dogs",
"year": "1992",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:41:38.713Z",
"updatedAt": "2023-05-27T05:41:38.713Z",
"__v": 0
},
{
"_id": "647198289ae5a67591389a91",
"title": "Pulp Fiction",
"year": "1994",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:00.670Z",
"updatedAt": "2023-05-27T05:42:00.670Z",
"__v": 0
},
{
"_id": "6471984b9ae5a67591389a93",
"title": "Inglorious Basterds",
"year": "2009",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:35.108Z",
"updatedAt": "2023-05-27T05:48:18.209Z",
"__v": 0
},
{
"_id": "6471985d9ae5a67591389a95",
"title": "Django Unchained",
"year": "2012",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:53.223Z",
"updatedAt": "2023-05-27T05:42:53.223Z",
"__v": 0
},
{
"_id": "6471987a9ae5a67591389a97",
"title": "Jackie Brown",
"year": "1997",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:43:22.189Z",
"updatedAt": "2023-05-27T05:43:22.189Z",
"__v": 0
},
{
"_id": "647198909ae5a67591389a99",
"title": "Kill Bill: Vol 1",
"year": "2003",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:43:44.062Z",
"updatedAt": "2023-05-27T05:43:44.062Z",
"__v": 0
}
],
"createdAt": "2023-05-27T06:17:21.864Z",
"updatedAt": "2023-05-27T06:17:21.864Z",
"**v": 0
},
{
"\_id": "6471a0e69ae5a67591389ac0",
"name": "Woody Allen",
"DOB": "30_11_1935",
"filmography": [
{
"\_id": "647198e29ae5a67591389a9b",
"title": "Annie Hall",
"year": "1977",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:45:06.746Z",
"updatedAt": "2023-05-27T05:45:06.746Z",
"**v": 0
},
{
"\_id": "647198f19ae5a67591389a9d",
"title": "Manhattan",
"year": "1979",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:45:21.421Z",
"updatedAt": "2023-05-27T05:45:21.421Z",
"**v": 0
},
{
"\_id": "647199189ae5a67591389a9f",
"title": "Match Point",
"year": "2005",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:46:00.620Z",
"updatedAt": "2023-05-27T05:46:00.620Z",
"**v": 0
},
{
"\_id": "6471992a9ae5a67591389aa1",
"title": "Vicky Cristina Barcelona",
"year": "2008",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:46:18.863Z",
"updatedAt": "2023-05-27T05:46:18.863Z",
"**v": 0
},
{
"\_id": "647199439ae5a67591389aa3",
"title": "Midnight in Paris",
"year": "2011",
"director": "Woody Allen",
"createdAt": "2023-05-27T05:46:43.134Z",
"updatedAt": "2023-05-27T05:46:43.134Z",
"**v": 0
}
],
"createdAt": "2023-05-27T06:19:18.356Z",
"updatedAt": "2023-05-27T06:19:18.356Z",
"\_\_v": 0
}
]

-- updateDirector

PUT http://localhost:4001/api/v1/directors/64719ce79ae5a67591389ab1

Body:

{
"name": "Martin Scorsese", //actualizamos nombre al haberlo puesto con dos 'ss'
"DOB": "17_11_1942",
"filmography": ["647195a79ae5a67591389a71","647195bc9ae5a67591389a73","647195ca9ae5a67591389a75", "647195f69ae5a67591389a77","647196219ae5a67591389a79", "6471963f9ae5a67591389a7b", "6471964f9ae5a67591389a7d", "647196599ae5a67591389a7f"

    ]

}

Response: Status 200

{
"\_id": "64719ce79ae5a67591389ab1",
"name": "Martin Scorsese",
"DOB": "17_11_1942",
"filmography": [
"647195a79ae5a67591389a71",
"647195bc9ae5a67591389a73",
"647195ca9ae5a67591389a75",
"647195f69ae5a67591389a77",
"647196219ae5a67591389a79",
"6471963f9ae5a67591389a7b",
"6471964f9ae5a67591389a7d",
"647196599ae5a67591389a7f"
],
"createdAt": "2023-05-27T06:02:15.371Z",
"updatedAt": "2023-05-27T06:07:25.153Z",
"\_\_v": 0
}

-- findDirectorById

GET http://localhost:4001/api/v1/directors/64719a869ae5a67591389aaa

Response: status 200

{
"\_id": "64719a869ae5a67591389aaa",
"name": "Brian De Palma",
"DOB": "11_09_1940",
"filmography": [
"647194a49ae5a67591389a60",
"647194e19ae5a67591389a63"
],
"createdAt": "2023-05-27T05:52:06.393Z",
"updatedAt": "2023-05-27T05:52:06.393Z",
"\_\_v": 0
}

-- deleteDirector

DELETE http://localhost:4001/api/v1/directors/64719a869ae5a67591389aaa

Response: status 200

"Director deleted successfully"

-- Si ahora hacemos un deleteMovie:

DELETE http://localhost:4001/api/v1/movies/647196599ae5a67591389a7f

Status 200

"Movie deleted successfully" // Raging Bull

Y nos traemos todos los directores con un:

GET http://localhost:4001/api/v1/directors/

La película Raging Bull ya no aparece en la colección:

{
"\_id": "64719ce79ae5a67591389ab1",
"name": "Martin Scorsese",
"DOB": "17_11_1942",
"filmography": [
{
"_id": "647195a79ae5a67591389a71",
"title": "GoodFellas",
"year": "1990",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:19.905Z",
"updatedAt": "2023-05-27T05:31:19.905Z",
"__v": 0
},
{
"_id": "647195bc9ae5a67591389a73",
"title": "Taxi Driver",
"year": "1976",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:40.407Z",
"updatedAt": "2023-05-27T05:31:40.407Z",
"__v": 0
},
{
"_id": "647195ca9ae5a67591389a75",
"title": "Mean Streets",
"year": "1973",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:31:54.185Z",
"updatedAt": "2023-05-27T05:31:54.185Z",
"__v": 0
},
{
"_id": "647195f69ae5a67591389a77",
"title": "Gangs of New York",
"year": "2002",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:32:38.570Z",
"updatedAt": "2023-05-27T05:32:38.570Z",
"__v": 0
},
{
"_id": "647196219ae5a67591389a79",
"title": "Casino",
"year": "1995",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:33:21.803Z",
"updatedAt": "2023-05-27T05:33:21.803Z",
"__v": 0
},
{
"_id": "6471963f9ae5a67591389a7b",
"title": "The Color of Money",
"year": "1986",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:33:51.715Z",
"updatedAt": "2023-05-27T05:33:51.715Z",
"__v": 0
},
{
"_id": "6471964f9ae5a67591389a7d",
"title": "The King of Comedy",
"year": "1982",
"director": "Martin Scorsese",
"createdAt": "2023-05-27T05:34:07.523Z",
"updatedAt": "2023-05-27T05:34:07.523Z",
"__v": 0
}
],
"createdAt": "2023-05-27T06:02:15.371Z",
"updatedAt": "2023-05-27T06:07:25.153Z",
"\_\_v": 0
},

--- Si hacemos ahora un updateMovie:

PUT http://localhost:4001/api/v1/movies/6471984b9ae5a67591389a93

Body: (cambiamos el año)

{
"title": "Inglorious Basterds",
"year": "2010",
"director": "Quentin Tarantino"
}

Y ahora hacemos un getAllDirectors:

GET http://localhost:4001/api/v1/directors/

Vemos cómo el film Inglorious Basterds saldrá con el dato modificado en Quentin Tarantino:

[
{
"\_id": "64719a869ae5a67591389aaa",
"name": "Brian De Palma",
...
}
{
"\_id": "64719b189ae5a67591389aac",
"name": "Stanley Kubrick",
...
}
{
"\_id": "64719ce79ae5a67591389ab1",
"name": "Martin Scorsese",
...
}
{
"\_id": "64719eb99ae5a67591389aba",
"name": "Francis Ford Coppola",
...
}
{
"\_id": "64719fbb9ae5a67591389abc",
"name": "Oliver Stone",
...
}
{
"\_id": "6471a0719ae5a67591389abe",
"name": "Quentin Tarantino",
...
{
"_id": "6471984b9ae5a67591389a93",
"title": "Inglorious Basterds",
"year": "2010",
"director": "Quentin Tarantino",
"createdAt": "2023-05-27T05:42:35.108Z",
"updatedAt": "2023-05-28T06:01:26.735Z",
"__v": 0
},
...
},
{
"\_id": "6471a0e69ae5a67591389ac0",
"name": "Woody Allen",
...
}
]
