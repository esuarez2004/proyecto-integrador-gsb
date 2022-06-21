var id = obtenerget();
    
    let proxi  = "https://cors-anywhere.herokuapp.com/";
    let endpoint2= `https://api.deezer.com/genre/${id}/artists`;
    


    fetch(proxi+endpoint2)
    .then(function(response)
    {
        return response.json();
    })
    .then(function(resOBJL)
    {

        let sectionAlbumes = resOBJL.data;
        
        for (let i=0;i<sectionAlbumes.length;i++)
        {
            console.log(sectionAlbumes[i]);
            document.querySelector("#album").innerHTML += 
            `<div class="genredtlle" >
            <a href="./detalle--genero.html? id=${sectionAlbumes[i].id}"></a>
            </div>
            <p>${sectionAlbumes[i].id}</p>
            <h1>${sectionAlbumes[i].name}</h1>
            <div>
            <img src="${sectionAlbumes[i].picture_medium}" alt="picture">
            </div>`
        }

    })

    function obtenerget(){
      var url =  window.location.href;
      var lugar = url.indexOf("?id=")+4;
       var id= url.substring(lugar);
       return id;
    }