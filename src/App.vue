<script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      NavBar,
      Footer,
    },
    data() {
      return {

      };
    },
    methods: {

    },
  };
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;


footer {
  width: 100vw;
  position: fixed;
  bottom: 0;
}

</style>
