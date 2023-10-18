<script>
  export default {
    data() {
      return {

      };
    },
  };
</script>

<template>
  <div class="container">
    <div class="image-box mt-5 rounded-circle border">
      <!-- <img src="../assets/237998.png"> -->
    </div>
    <p class="descr text-center text-white mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia harum asperiores sed, suscipit aut, iusto temporibus deserunt iste, minima nulla! Quod sequi eaque necessitatibus aliquam saepe, consectetur id. Odit?
    Fugit pariatur ratione illo, vitae repellendus quod. Quis dolores odit sapiente quibusdam! Cupiditate, omnis quaerat! Sit tempore provident numquam, unde inventore nam ratione, non ullam dolor velit nesciunt assumenda aspernatur.
    Minima eos beatae debitis nihil atque, assumenda pariatur saepe nemo quibusdam itaque, temporibus hic suscipit magni a nulla non odio at consequatur voluptas ducimus. Aliquid asperiores nostrum porro a odio.
    Incidunt libero molestias reprehenderit atque nihil aut quae aspernatur odio. Laboriosam nam omnis autem ab vero fuga quibusdam unde iusto, ducimus iure molestiae reiciendis ex? Maiores quas provident eius vel.
    Minus iure commodi, unde, fuga corrupti adipisci impedit, ducimus nesciunt laboriosam dicta architecto cum officiis placeat ipsum explicabo exercitationem eveniet qui dignissimos laborum nihil suscipit accusamus esse. Adipisci, voluptatibus autem!
    </p>
  </div>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/variables' as *;
  @use '../styles/partials/mixins' as *;

  .image-box{
    width: 300px;
    height: 300px;
    margin: auto;
    background-image: url(../assets/237998.png);
    background-size: contain;
  }

  .descr {
    max-width: 1000px;
    margin: auto;
  }

</style>