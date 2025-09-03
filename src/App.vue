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
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;

  .link {
    color: #1d1d1f;
    text-decoration: none;
    margin-right: 2rem;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-weight: 400;
    font-size: 0.95rem;
    letter-spacing: 0.01em;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: #007aff;
      transform: translateY(-1px);
    }

    &.router-link-active {
      background-color: #007aff;
      color: white;
      box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

@media (prefers-color-scheme: dark) {
  nav {
    background-color: rgba(28, 28, 30, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    .link {
      color: #f2f2f7;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #007aff;
      }
    }
  }
}
</style>
