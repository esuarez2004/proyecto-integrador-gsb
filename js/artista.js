
let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get("id");

let artistasurl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;
let cancionesurl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums?limit=5`;

let detalleArtista = document.querySelector(".Detalleartistas");
let cancionesArtista = document.querySelector(".Albumartista")

console.log(id);

fetch(artistasurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

   detalleArtista.innerHTML += `<article>
    <a href="./artist.html">
         <img  src="${data.picture_medium}" alt="">            
    </a>  
    <h4>${data.name}</h4>
    <ol>`;
  })

  .catch(function (errores) {
    console.log(errores);
  });

let listaAlbumes = " ";

fetch(urlCancionesArtistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < 5; i++) {
      listaAlbumes += `<li>${data.data[i].title}</li>`;
    }

    cancionesArtista.innerHTML += listaAlbumes;
  })

  .catch(function (errores) {
    console.log(errores);
  });