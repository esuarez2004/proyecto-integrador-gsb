// java script es un lenjuage mas usado que tiene lgica interna, case senitive// vinculazion estrena script para biuena representasion den del dom, rep virtual del hml//
// declaro las variables(var let const) (espacio de memoria que permite almacenar datos: distintos valores numbre cadena de texto buleanos) con let  y operadores de asignancion// proxi= intermediario// endpoint = ruta que asignara la informacion//
let proxi = " https://cors-anywhere.herokuapp.com/";
let endpoint = "https://developers.deezer.com/api/chart/0";

// operador de concatenacion//
let url = proxi + endpoint
// scoope global//

// declaro el paramentro que sera la ruta// proporcionar ruta//
fetch (url)
    .then (function(response){   // recibe la funcion response y despues devuelce la respuesta en json//
        console.log(response); // cllback response fc pasada como parametro en otra//
        return response.json();
    }) 
    .then (function(datos) {
// convertir respuesta a un objeto literal// datos es el responde de el primer then//
        console.log(datos);
   
        // declaro variables // datos viene del then y -.data de la api//
        let canciones = datos.tracks.data;
        let albumes = datos.albums.data;
        let artistas = datos.artist.data;
    
            // selector dom// lo declaramos para usarlo en otra parte// modificar contenido html// declaro variable con 
        let sectionCanciones = document.querySelector('.cajapadre1');
        let sectionAlbumes = document.querySelector('.cajapadre2');
        let sectionArtistas = document.querySelector('.cajapadre3')

// += agregar contenido manteniendo el original// recorren arrays de la api// 
// bucle for // inicio, condicion de paso, modificador// llaves = codigo que queremos que se repita//
// entre las llaves va lo quiero que se renderize// 
        for (let i = 0; 1 < 5; i++) {
            sectionCanciones.innerHTML += ` <article>
                                        <img src="${canciones[i].cover_small}
                                        <a href="./detalle-canciones.html?id=${canciones[i].id}">
                                        <h4>${canciones[i].title}</h4>
                                        <a href="./detalle-canciones.html?id=${canciones[i].artist.id}">
                                        ${canciones[i].artist.name} </a>
                                        </article>`};


        for (let i = 0; 1 < 5; i++){
            sectionAlbumes.innerHTML += `<article>
                                        < img src="${albums[i].cover_small}">
                                        <a href="./detalle-album.html.id=${albums[i].id}">
                                        <h4>${albums[i].title}</h4>
                                        </a>
                                        </article>
                                        ` }
                                    
         for (let i = 0; 1 < 5; i++){
        sectionArtistas.innerHTML += ` <article >
                                        <a href="./detalle-artista.html">
                                        <img src="${artistas[i].picture_small}
                                        </a>
                                        <a  href="./detalle-artista.html?id=${artistas[i].id}">
                                        <h4>${cantantes[i].name}</h4>
                                        </a>
                                        </article>
                                         `}
                                   
    })    // template string viene con info de la api, cadena de texto que permite intercalar variables//
.catch ( function (error){
    console.log('el error fue' + error)
})
