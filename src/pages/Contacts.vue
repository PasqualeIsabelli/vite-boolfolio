<script>
  import axios from 'axios';

  export default {
      data() {
        return {
          formData: {
            name: '',
            email: '',
            message: ''
          },
          errors: null,
          success: null,
          loading: false,
        };
      },
      methods: {
        onFormSubmit() {
          axios.post('http://localhost:8000/api/contacts', this.formData)
          .then((response) => {
            this.success = response.data.message;
            this.errors = null;
          })
          .catch((err) => {
            this.errors = err.response.data.message ?? err.message;
          });
        },
      }
    };
</script>


<template>
  <div class="container">
    <h1 class="mt-5 text-white">Compila i campi sottostanti per contattarmi!</h1>

    <div class="alert alert-danger" v-if="errors">
      Sembra che qualcosa sia andato storto: {{ errors }}
    </div>

    <div class="col-6 mt-5 ms-5">
      <form @submit.prevent="onFormSubmit" v-if="!success">
        <div class="mb-3">
          <label for="name" class="text-white">Nome</label>
          <input type="text" class="form-control mt-2 bg-dark text-white" v-model="formData.name">
        </div>
        <div class="mb-3">
          <label for="email" class="text-white">Email</label>
          <input type="text" class="form-control mt-2 bg-dark text-white" v-model="formData.email">
        </div>
        <div class="mb-3">
          <label for="message" class="text-white">Messaggio</label>
          <textarea class="form-control mt-2 bg-dark text-white" v-model="formData.message"></textarea>
        </div>
        <button type="submit" class="btn btn-secondary">Invia</button>
      </form>

      <div class="alert alert-success" v-else>
        {{ this.success }}
      </div>
      
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

</style>