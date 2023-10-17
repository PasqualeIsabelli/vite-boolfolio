<script>
  import axios from 'axios';
  import dayjs from 'dayjs';

  export default {
    data() {
      return {
        projects: {},
      };
    },
    methods: {
      fetchData() {
        axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug)
        .then((response) => {
          this.projects = response.data;
        });
      },
      getImageUrl(projects){
        return `http://127.0.0.1:8000/storage/${projects.thumb}`;
      },
      formatDate(date) {
        return dayjs(date).format('DD/MM/YYYY')
      }
    },
    mounted() {
      this.fetchData();
    },
	};
</script>

<template>
  <div class="container p-5">
    <h2 class="card-title mb-4">Titolo: <span class="fw-bold">{{ projects.title }}</span></h2>
    <div class="card p-0" style="width: 25rem;">
      <img :src="getImageUrl(projects)" class="card-img-top">
      <div class="card-body">
        <p class="card-text">Descrizione: <span class="fw-bold">{{ projects.description }}</span></p>
      </div>    
    </div>
    <div class="mt-2">
      <p>Tipo: <span class="badge bg-secondary" v-if="projects.type">{{ projects.type.type }}</span></p>
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex gap-3">
        <label>Linguaggi:</label>
        <p v-for="tech in projects.technologies" class="badge" :style="`background-color: rgb(${ tech.color })`"><i :class="`fa-brands ${ tech.name }`"></i></p>
      </div>
      <div>
        <p>Data di pubblicazione: <span class="fw-bold">{{ formatDate(projects.creation_date) }}</span></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  @use '../styles/partials/mixins' as *;

</style>