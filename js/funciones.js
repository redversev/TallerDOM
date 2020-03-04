var cuerpo = document.querySelectorAll('body')
console.log("----->", cuerpo)
cuerpo.innerHTML = "<div id='contenido_football_3'>REDV</div>";


var contador = 0
var contenedor = document.querySelector('#contenido_football');
var url = 'http://newsapi.org/v2/top-headlines?country=co&category=sports&apiKey=24e17bcee94941bc96849d73ad400fdc';
function buscarNoticias() {
    jQuery.ajax(url, {
        success: function (response) {
                console.log(response)
                response.articles.forEach(function (articulos) {

                    if(contador < 5){
                        contenedor.innerHTML = contenedor.innerHTML + `<div class="noticia">
                        <div class="imagen"><img src="${articulos.urlToImage}" alt="${articulos.name}"/></div>
                        <div class="datos">
                            <div class="titulo">${articulos.title}</div>
                            <div class="descripcion">${articulos.description}</div>
                            <div class="fuente">${articulos.source.name}</div>
                        </div>
                    </div>`                        
                    contador++;
                    }
                })
        },
        error: function (error) {
            console.error('No se encontraron registros, repita la búsqueda ', error)
            contenedor.innerHTML = `<div class="error">No se encontraron registros, repita la búsqueda.</div>`
        }
    })
}    
buscarNoticias();