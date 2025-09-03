<template>
  <nav>
    <router-link class="link" to="/">home</router-link>
    <router-link class="link" to="/login">login</router-link>
    <router-link class="link" to="/register">register</router-link>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped></style>
