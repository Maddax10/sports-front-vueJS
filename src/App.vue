<template>
  <nav>
    <router-link class="link" to="/">home</router-link>
    <router-link class="link" to="/login">login</router-link>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>
nav {
  background-color: #212121;
  display: flex;
  gap: .5rem;

  .link {
    color: white;
    text-decoration: none;

    &:hover {
      color: #ff3e3e;
    }
  }
}
</style>
