<template>
  <div class="app">
    <!-- Лайки: добавление -->
    <section class="likes">
      <h2>Лайки</h2>

      <div class="likes__content">
        <div class="buttons">
          <button @click="addLike">Like</button>
          <button @click="addDislike">Dislike</button>
        </div>

        <div class="counts">
          <p>
            Кол-во лайков: <strong>{{ likes }}</strong>
          </p>
          <p>
            Кол-во дизлайков: <strong>{{ dislikes }}</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Посты: добавление -->
    <section class="posts">
      <h2>Posts</h2>

      <PostsForm @create="createPost" />
      <PostsList :posts="posts" />
    </section>
  </div>
  <!--  <nav>-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </nav>-->
  <!--  <router-view />-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Post, AppData } from "@/types";
import PostsForm from "@/components/PostsForm.vue";
import PostsList from "@/components/PostsList.vue";

export default defineComponent({
  components: { PostsList, PostsForm },
  data(): AppData {
    return {
      // likes
      likes: 0,
      dislikes: 0,

      // posts
      posts: [
        { id: 1, title: "JS", description: "dfgdfgfdgd" },
        { id: 2, title: "TS", description: "dfgdfgfdgd" },
        { id: 3, title: "Java", description: "dfgdfgfdgd" },
      ],
    };
  },

  methods: {
    // likes
    addLike() {
      this.likes += 1;
    },
    addDislike() {
      this.dislikes += 1;
    },

    // posts
    createPost(post: Omit<Post, "id">) {
      const lastPostId = this.posts.at(-1)?.id;
      this.posts.push({
        id: lastPostId ? lastPostId + 1 : 1,
        ...post,
      });
    },
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  /*display: flex;*/
  /*justify-content: center;*/
}

section {
  margin-bottom: 50px;
  border: 1px solid black;
  padding: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

button {
  cursor: pointer;
  padding: 5px 10px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 3px;
  transition: 0.2s ease-in-out;
}
button:hover {
  background: teal;
  color: white;
}

.app {
  padding: 20px;
}

/* Likes */
.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.counts p {
  text-align: center;
}
/* Likes */

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
