<template>
  <div class="container">
   <div class="row">
      <div class="col">
        <h1>Pon el cursor en el recuadro de abajo y presiona una tecla</h1>
      </div>
    </div>
   <div class="row">
      <div class="col-7">
        <div @keydown="mostrarTecla" class="presionarDiv" tabindex="1">
          <p>Presionaste la tecla: </p> 
          <div class="teclaStyle"><kbd :class="estilo">{{tecla}}</kbd></div>
        </div>
      </div> 
      <div class="col"> Test text</div>
   </div> 
  </div>
</template>
<script>
  export default{
    name: 'TeclasColor',
    data(){
      return{
        tecla: 'Sin Presionar',
        estilo: ''
      }
    },
    methods:{
      mostrarTecla(event){
        const isDigit = /\d/;
        const isAlpha = /\w/;
        const tecla = event.key
        if(isDigit.test(tecla)){
          this.estilo='keyDigit'
        }else if(isAlpha.test(tecla) && tecla.length == 1){
          this.estilo='keyAlpha'
        }else{
          this.estilo='keyOther'
        }
        this.tecla = tecla
      }
    }
  }
</script>
<style>
.presionarDiv{
  background-color: lightgrey;
  border-style: solid;
  border-color: red;
  height: 50vh;
}

kbd{
  font-size:50px
}
kbd.keyAlpha{
  background-color:green;
  color:white;
}
kbd.keyDigit{
  background-color:red;
  color:white;
}
kbd.keyOther{
  background-color:yellow;
  color:white;
}
</style>
