<template>
  <div class="posts__content">
    <PostItem
      v-for="post in $props.posts"
      :title="post.title"
      :description="post.description"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/types";
import PostItem from "@/components/PostItem.vue";

export default defineComponent({
  components: { PostItem },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
