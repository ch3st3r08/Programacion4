/*
Haciendo  uso de directivas, represente los datos personales de  cada 
integrante del equipo, aplique un estilo diferente para cada caso 
4. Crear  una  variable  que  contenga  codigo  HTML,  en  el  cual  represente  los 
nombres de los integrantes con las etiquetas <h2> y texto en cursiva, debera 
mostrarlo en utilizando v-html 
5. Declarar  un  arreglo  con  datos  de  peliculas,  nombre  y  año,  mostrar  el 
contenido del array dentro  de una lista <ul> 
*/

//Código trabajado por Alexis
var app = new Vue({
  el: '#app',
  data: {
    nestorHTML:"<h2 class='alert alert-success'><em>Néstor Wilfredo Chávez Ramírez</em></h2>",
    alexisHTML:"<h2 class='alert alert-danger'><em>David Alexis Gallegos González</em></h2>",
    peliculas:[
      {titulo:"Forest Gump",anio:1994},
      {titulo:"Harry Potter",anio:2001},
      {titulo:"Titanic",anio:1998},
      {titulo:"Trolls 2",anio:2003},
    ]
  },
  methods: {
    
  }
})
