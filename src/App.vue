<template>
  <header>
    <div class="logoTitle">
      <router-link :to="usersStore.getUserConnexionInfo ? '/dashboard' : '/'">
        <img src="/public/logo.png" alt="logo" />
      </router-link>
      <h1 class="title">Je cours pour ma forme</h1>
    </div>
    <nav>
      <router-link class="link" to="/" v-if="!usersStore.getUserConnexionInfo">login</router-link>
      <router-link class="link" to="/register" v-if="!usersStore.getUserConnexionInfo">register</router-link>
      <router-link class="link" to="/dashboard" v-if="usersStore.getUserConnexionInfo">
        dashboard
      </router-link>
      <router-link class="link" to="/stats" v-if="usersStore.getUserConnexionInfo">
        statistiques
      </router-link>
      <button class="link disconnect" @click.prevent="disconnect" v-if="usersStore.getUserConnexionInfo">
        se déconnecter
      </button>
    </nav>
  </header>
  <DashboardView v-if="$route.path === '/dashboard' && usersStore.getUserConnexionInfo" />
  <router-view></router-view>
</template>

<script setup>
  import { RouterView, useRoute, useRouter } from 'vue-router';
  import { useUsersStore } from './stores/users';
  import { ref } from 'vue';
  import DashboardView from '@/views/DashboardView.vue';
  import { useTrainingStore } from './stores/training';

  const usersStore = useUsersStore();
  const trainingStore = useTrainingStore();
  const $route = useRoute();
  const router = useRouter();

  const disconnect = () => {
    usersStore.disconnect();
    router.push('/');
  }

</script>
<style lang="scss" scoped>
  header {
    background: linear-gradient(135deg, #154575 0%, #445300 100%);
    display: flex;
    box-shadow: 0 5px 15px rgba(26, 42, 58, 0.12);
    align-items: center;
    padding: 0.5rem 0;
    flex-wrap: wrap;

    .logoTitle {
      display: flex;
      align-items: center;
      gap: 1rem;

      h1.title {
        color: #a3c800;
        padding: 0.3em 1em;
        border-radius: 0.5em;
        font-weight: 800;
        font-size: 2rem;
        width: 400px;
      }

      img {
        height: 100px;
        margin: 1rem;
      }
    }

    nav {
      padding: 1rem 2rem;
      gap: 2rem;
      display: flex;
      justify-content: end;
      width: 100%;

      .link {
        background: #a3c800;
        color: #1a2a3a;
        border-radius: 8px;
        padding: 0.5em 1.2em;
        font-weight: 600;
        transition: background 0.2s, color 0.2s, border 0.2s;
        border: 2px solid transparent;

        &:hover {
          background: #1a2a3a;
          color: #a3c800;
        }

        &.router-link-active {
          border: 3px solid #1a2a3a;
        }
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      padding: 0.5rem;

      .logoTitle {
        flex-direction: column;
        align-items: flex-start;

        h1.title {
          font-size: 1.2rem;
          width: auto;
          padding: 0.2em 0.5em;
        }

        img {
          height: 60px;
          margin: 0.5rem 0;
        }
      }

      nav {
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem 0;
        align-items: flex-start;

        .link {
          width: 100%;
          text-align: left;
          padding: 0.5em 0.8em;
        }
      }
    }
  }

  .disconnect {
    border: none;
    display: flex;
    justify-content: end;
    background: #1a2a3a !important;
    color: #a3c800 !important;
    font-weight: 700;
    border-radius: 8px;
    padding: 0.5em 1.2em;
    transition: background 0.2s, color 0.2s;
  }
</style>