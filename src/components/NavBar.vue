<script>
  export default {
    data() {
      return {
        /*linksList: [
          {
            name: HomePage,
            type: home,
          },
          {
            name: Progetti,
            type: index,
          },
          {
            name: Login,
            type: login,
          },
        ]*/
      };
    },
  };
</script>

<template>
  <nav class="bg-dark">
    <div class="container">
      <div class="py-3 d-flex justify-content-between">
        <p class="text-white">LOGO</p>
        <ul class="d-flex list-unstyled gap-3">

          <!-- <li v-for="singleLink in linksList"><router-link style="color: red;" :to="{name: '{{ singleLink.type }}'}">{{ singleLink.name }}</router-link></li> -->

          <li><router-link class="color text-decoration-none" :to="{name: 'home'}">Home</router-link></li>
          <li><router-link class="color text-decoration-none" :to="{name: 'index'}">Progetti</router-link></li>
          <li><router-link class="color text-decoration-none" :to="{name: 'login'}">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  @use '../styles/partials/mixins' as *;

  .color {
    color: red !important;
    &:hover {
      color: rgba(255, 0, 0, 0.678) !important;
    }
  }
  
</style>
