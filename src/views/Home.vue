<template>
  <v-app>
    <Navbar class="index" />
    <Navegacion />
    <!--<Dashboard />-->
    <!--<Footer /> -->
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
//import Dashboard from "../components/Dashboard";
import Navegacion from "../components/Navegacion.vue";
//import Footer from "../components/Footer";

export default {
  name: "Home",

  components: {
    Navbar,
    //Dashboard,
    Navegacion,
    //Footer,
  },
};
</script>
<style scoped>
.index {
  z-index: 9999;
}
</style>
