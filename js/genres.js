let proxi = "https://developers.deezer.com/api/genre";
let endpoint = "https://api.deezer.com/genre";
let url = proxi+endpoint

fetch(url)
.then(function(response){
return response.json();
})
.then(function(resOBJL){
console.log(resOBJL.data)
})
.catch(function(errores){
console.log(errores);
})


