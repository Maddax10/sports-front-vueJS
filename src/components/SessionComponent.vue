<template>
    <div class="sessionCard">
        <h3>session card</h3>
        <button class="startSession" @click.prevent="startSession">Démarrer la session</button>
        <div class="totalTime">
            <label>Total time : 00:00</label>
        </div>
        <div class="ElapsedTime">Elapsed time : 00:00</div>
        <div class="remainingTime">Remaining time : 00:00</div>
        <div class="exercises">
            <slot />
        </div>
    </div>

</template>
<script setup>

    import { defineProps } from 'vue';

    const startSession = () => {

    }

</script>

<style lang="scss" scoped>
    .sessionCard {
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        border-radius: 1rem;
        background: #f5f7fa;
        border: 2px solid #a3c800;
        color: #1a2a3a;
    }

    .exercises {
        display: grid;
        gap: 1rem;
        justify-items: center;
        margin: 1rem;
    }
</style>