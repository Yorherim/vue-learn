<template>
  <div class="post">
    <div><strong>Название:</strong> {{ $props.title }}</div>
    <p><strong>Описание:</strong> {{ $props.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped>
.post {
  padding: 10px 0;
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post:not(:last-child) {
  margin-bottom: 20px;
}
</style>
