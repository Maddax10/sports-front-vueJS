<template>
    <h1>DashboardView</h1>
    <CardComponent></CardComponent>
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue';
import { useTrainingStore } from '@/stores/training';

const trainingStore = useTrainingStore();

trainingStore.fetchAllExercises();
</script>