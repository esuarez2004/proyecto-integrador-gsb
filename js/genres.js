let proxi  = "https://api.allorigins.win/raw?url";
let endpoint = "https://api.deezer.com/genre";
let url = proxi+endpoint

fetch(url)
.then(function(response){
return response.json();
})
.then(function(resOBJL){
console.log(resOBJL.results);
let sectiongeneros = resOBJL.results;

})


for (let i=0;i<6;i++){
    document.querySelector("#genero").innerHTML += 
   `<div class="genredtlle" >
   <a href="./detalle--genero.html? id=${sectiongeneros[i].id}"></a>
</div>
<p>${sectiongeneros[i].id}</p>
<h1>${sectiongeneros[i].name}</h1>
<div>
   <img src="${sectiongeneros[i].picture_medium}" alt="picture">
</div>
<p>${sectiongeneros[i].type}</p>
<button>Ver mas</button`
}

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
let inputBusq = document.querySelector('input');

if (inputBusq.value == '') {
    alert('Ingresa una palabra')
    
} else {
    this.submit()
}
});
