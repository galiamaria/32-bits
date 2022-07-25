<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <DatosJuegos msg="Tienda gamer 32 bits"/>
    
  </div>
</template>

<script>
// @ is an alias to /src

import DatosJuegos from '@/components/DatosJuegos.vue'


export default {
  name: 'HomeView',
  components: {
    DatosJuegos
  }
}
</script>
