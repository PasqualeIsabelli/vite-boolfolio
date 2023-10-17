<script>
  import axios from 'axios';
  import dayjs from 'dayjs';

	export default {

    data() {
      return {
        projects: [],
        pagination: {},
      };
    },
    methods: {
      fetchData(url) {
        axios.get(url ?? 'http://127.0.0.1:8000/api/projects').then((response) => {
          const results = response.data;

          this.projects = results.data;

          delete results.data;

          this.pagination = results;
        });
      },
      getImageUrl(project){
        return `http://127.0.0.1:8000/storage/${project.thumb}`;
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
  <div class="row row-cols-6 mt-4 gy-4">
    <div class="col" v-for="project in projects" :key="project.id">
      <div class="card p-0 h-100">
        <img :src="getImageUrl(project)" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-secondary">{{ project.type.type }}</span>
            <p v-for="tech in project.technologies" class="badge m-0" :style="`background-color: rgb(${ tech.color })`"><i :class="`fa-brands ${ tech.name }`"></i></p>
            <p>{{ formatDate(project.creation_date) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center mt-4">
    <a v-for="singlePage in pagination.links" class="btn btn-link" @click="fetchData(singlePage.url)" v-html="singlePage.label"></a>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

</style>