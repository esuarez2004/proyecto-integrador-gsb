let proxi = " https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/chart";
let url = proxi+endpoint

.fetch (url)
    .then (function(response){
        return response.json();
    }) 
    .then (function(datos) {

    
    
        console.log(datos);
        let canciones = datos.tracks.data;
        let albumes = datos.albums.data;
        let artistas = datos.artist.data;
    
       
       

        let sectionCanciones = document.querySelector('.cajapadre1');
        let sectionAlbumes = document.querySelector('.cajapadre2');
        let sectionArtistas = document.querySelector('.cajapadre3')

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

                                       
                                        
    })
    .catch ( function (error){
        console.log('el error fue' + error)
    })
