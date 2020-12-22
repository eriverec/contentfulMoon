<template>
  <div class="single-post">
    <div v-if="!isLoading" class="single-post__article">
      <h1 class="single-post__title">
        {{ currentPost.fields.titulo }}
      </h1>
      <div
        class="single-post__content"
        v-html="$md.render(currentPost.fields.texto)"
      ></div>
      <template>
        <img
          :src="currentPost.fields.imagen.fields.file.url"
          alt="Overoles"
        />
      </template>
    </div>
    <p v-else class="single-post__loading">
      Loading
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    currentPost() {
      return this.$store.state.post.currentPost;
    },
    isLoading() {
      return this.$store.state.post.isLoading;
    }
  },
  async fetch({ store, params }) {
    await store.dispatch("post/getPostBySlug", params.slug);
  }
};
</script>
