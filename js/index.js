let proxi = " https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/chart";
let url = proxi+endpoint

fetch(url)
    .then(function (response) {
        return response.json
    } )
    .then(function (data){
        console.log(data);
        let canciones = data.tracks;
        let albumes = data.albums;
        let artistas = data.artist;
       

        let sectionCanciones = document.querySelector('.cajapadre1');
        let sectionAlbumes = document.querySelector('.cajapadre2');
        let sectionArtistas = document.querySelector('.cajapadre3')

        for (let i = 0; 1 < 5; i++) {
            sectionCanciones.innerHTML += ` <article class="canciones">
                                            <a href="./detalle-canciones.html">
                                            <img class="imagen" src="${canciones[i].cover_small}
                                            </a>
                                            <a class="titulo" href="./detalle-canciones.html">
                                            <h4>${canciones[i].titel}</h4>
                                            </a>
                                            </article>
                                            ` }


        for (let i = 0; 1 < 5; i++){
            sectionAlbumes.innerHTML += `<article class="albumes">
                                        <a href="./detalle-album.html">
                                        < img class="imagen" src="${albums[i].cover_small}
                                        </a>
                                        <a class= "titulo" href="./detalle-album.html">
                                        <h4>${albums[i].title}</h4>
                                        </a>
                                        </article>
                                        ` }
                                    
    for (let i = 0; 1 < 5; i++){
        sectionArtistas.innerHTML += ` <article class="artistas">
                                        <a href="./detalle-artista.html">
                                        <img class="imagen" src="${tracks[i].picture.small}
                                        </a>
                                        <a class=" titulo" href="./detalle-artista.html">
                                        <h4>${tracks[i].name}</h4>
                                        </a>
                                        <article>
                                        `}



})