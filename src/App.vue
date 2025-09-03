<template>
  <nav>
    <router-link class="link" to="/">login</router-link>
    <router-link class="link" to="/register">register</router-link>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';

</script>
<style lang="scss" scoped>
nav {
  background: linear-gradient(135deg, rgb(41, 59, 141) 0%, #4c1682 100%);

  padding: 1rem 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2rem;
  align-items: center;

  .link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-transform: capitalize;

    &:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(96, 96, 96, 0.2)100%);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(0);
    }

    &.router-link-active {
      background: linear-gradient(135deg, rgb(7, 29, 127) 0%, rgb(63, 9, 116) 100%);

      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>