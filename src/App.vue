<script>
import ProjectCard from './components/ProjectCard.vue';

	export default {
    components: {
      ProjectCard
    },
    data() {
      return {}
    }
	};
</script>

<template>
  <div class="container">
    <ProjectCard></ProjectCard>
  </div>
</template>

<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;

</style>
