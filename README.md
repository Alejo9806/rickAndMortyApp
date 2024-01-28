# Rick and Morty App

Prueba técnica Choucair Testing (Frontend), la consiste en consumir la api de [rick y morty](rickandmortyapi.com) y realizar una serie de requisitos integrando librerias como Material.UI y react router dom.


## Ejecutar la aplicación

```
$ git clone https://github.com/Alejo9806/rickAndMortyApp
$ cd /rickAndMortyApp
$ npm install
$ npm run dev
```
Abrir el navegador y copiar la url [http://localhost:5173/](http://localhost:5173/)


Ejecutar las pruebas unitarias
```
$ npm run test
```

## Funcionamiento de la API

Se consumen los siguientes endpoints para el manejo de la aplicación 

* https://rickandmortyapi.com/api/character Nos devuelve un array con una cantidad de personajes y se utiliza tambien https://rickandmortyapi.com/api/character?page=2 para obtener los siguientes personajes de la lista.
* https://rickandmortyapi.com/api/character/2 Se utiliza para obtener la información especifica de un solo personaje.
* https://rickandmortyapi.com/api/episode/28 Se utiliza para obtener la información especifica del episodio este endpoint es utilizado para mostrar los episodios en los que aparece un personaje.


