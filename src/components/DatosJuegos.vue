<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <!--<ul>
          <li v-for="dato in juegos">
            {{dato.nombre}}
          </li>
        </ul> -->
      <div id="laTabla">
        <table border="1">
          <tr>
            <th>Codigo</th>
            <th>Color</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
          <tr v-for="juego in juegos" :key="juego.codigo" v-bind:style="`color: ${juego.color}`">
            <td>{{juego.codigo}}</td>
            <td>
              <select v-on:change="elegirColor($event, juego.codigo); actionColor(color)">
                <option value=""></option>
                <option value="black">Negro</option>
                <option value="red">Rojo</option>
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
              </select>
            </td>
            <td>{{juego.nombre}}</td>
            <td>{{juego.stock}}</td>
            <td>{{juego.precio}}</td>
            <td>
              <button v-on:click="masJuegos(juego.codigo)">+</button>
              <button v-on:click="menosJuegos(juego.codigo)">-</button>
            </td>
          </tr>
        </table>
        <br><hr>
        <h2>Total: {{totalDeJuegos}}</h2>
      </div>
    
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'DatosJuegos',
  props: {
    msg: String
  }, 
  data(){
    return {
      color: {}
    }
  },
  computed: {
    ...mapState(["juegos", "cantidadDeJuegos"]),
    ...mapGetters(["totalDeJuegos"])
  },
  methods:{
    ...mapMutations([]),
    ...mapActions(["masJuegos", "menosJuegos", "actionColor"]),
    elegirColor(event, codigo){
      let colorEvento = event.target.value;
      this.color = {"color":colorEvento, "codigo":codigo}
      return this.color
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#laTabla{
  display: flex;
  flex-direction: column;
  align-items: center;
}
table{
  width: 70%;
  border: 1px black;
}
</style>
