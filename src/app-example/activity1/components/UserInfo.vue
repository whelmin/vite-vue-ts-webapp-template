<template>
  <div>
    <h2>Hello {{ user.name }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/user';

export default defineComponent({
  setup() {
    const user = useUserStore();

    // @ts-ignore
    window.stores = { user };

    return {
      user,
    };
  },
});
</script>

<style scoped></style>
