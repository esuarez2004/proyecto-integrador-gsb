let proxi = "https://developers.deezer.com/api/genre";
let endpoint = "https://api.deezer.com/genre";
let url = proxi+endpoint

fetch(url)
.then(function(response){
return response.json();
})
.then(function(resOBJL){
console.log(resOBJL.data)
let sectiongeneros = resOBJL.data;
})

for (let i=1;i<6;i++){
    document.querySelector(".genero").innerHTML += 
    '<a href="./detalle--genero.htmlid=${generos[i].id"  class= "generolink">Pop</a>'
    '<a href="./detalle--genero.html? id=${generos[i].id}" class= "generolink">Reggeaton</a>'
    '<a href="./detalle--genero.htmlid=${generos[i].id" class= "generolink" >Electronica</a>'
    '<a href="./detalle--genero.htmlid=${generos[i].id"  class= "generolink">Trap</a>'
'<a href="./detalle--genero.htmlid=${generos[i].id"  class= "generolink">Hip Hop</a>'
}