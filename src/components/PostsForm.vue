<template>
  <form class="posts__form" @submit.prevent>
    <input
      v-model="post.newPostTitle"
      class="posts__input"
      type="text"
      placeholder="Название поста"
    />
    <input
      v-model="post.newPostDescription"
      class="posts__input"
      type="text"
      placeholder="Описание поста"
    />
    <button class="posts__btn" @click="createPost">Создать</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      post: {
        newPostTitle: "",
        newPostDescription: "",
      },
    };
  },
  methods: {
    newPostTitle(event: Event) {
      this.$data.post.newPostTitle = (event.target as HTMLInputElement).value;
    },
    newPostDescription(event: Event) {
      this.$data.post.newPostDescription = (
        event.target as HTMLInputElement
      ).value;
    },
    createPost() {
      const newPost = {
        title: this.$data.post.newPostTitle,
        description: this.$data.post.newPostDescription,
      };
      this.$emit("create", newPost);
      this.$data.post = {
        newPostTitle: "",
        newPostDescription: "",
      };
    },
  },
});
</script>

<style scoped>
.posts__form {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.posts__input {
  margin-bottom: 20px;
  padding: 10px 15px;
}

.posts__btn {
  align-self: center;
}
</style>
