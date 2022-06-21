let proxi  = "https://cors-anywhere.herokuapp.com/";
let endpoint = "https://api.deezer.com/genre";
let url = proxi+endpoint

fetch(url)
.then(function(response)
{
    return response.json();
})
.then(function(resOBJL)
{
    console.log(resOBJL);

    let sectiongeneros = resOBJL.data;
     
    for (let i=0;i<sectiongeneros.length;i++)
    {
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
        <button onclick="button(${sectiongeneros[i].id})">ver mas</button`
    }
    
})
.catch(function(error)
{
    console.log("error: " + error);
})
function button(id){
    location.href = "./detail-genres.html?id="+id
}
