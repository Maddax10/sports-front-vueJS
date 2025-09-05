<template>
    <div class="exerciseCard">
        <h4 class="type">E/S</h4>
        <div class="timer">00:00</div>
        <p class="description">description</p>
        <slot />
    </div>
</template>
<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        exercise: {
            required: true,
            type: Object
        }
    })

    console.log(props.exercise)
</script>

<style lang="scss" scoped>
    .exerciseCard {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 1rem;
    }
</style>