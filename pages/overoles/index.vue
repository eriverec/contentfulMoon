<template>
  <div class="container">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <template>
          <img :src="post.fields.imagen.fields.file.url" alt="text" />
        </template>
     
        <nuxt-link :to="'overoles/' + post.fields.slug">{{
          post.fields.titulo
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("posts/getPosts", params.slug);
  }
};
</script>

<style scoped>
.texto__imagen {
  margin: 10px;
  font-size: 15px;
  text-transform: uppercase;
}
a {
  text-decoration: none;
}

.center__fuera {
  text-align: center;
}
.center__dentro {
  margin: 30px;
  display: inline-block;
}

.con-image {
  border-radius: inherit;
}
img {
  display: block;
  position: relative;
  border-radius: inherit;
  max-width: 350px;
}

.vs-button {
  font-family: "Montserrat", sans-serif;
}
</style>
