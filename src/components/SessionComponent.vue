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

const startSession = () => {

}

</script>

<style lang="scss" scoped>
.sessionCard {
    padding: 1rem;
    padding-left: 2rem;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.251);
    border-radius: 1rem;
}

.exercises {
    display: grid;
    gap: 1rem;
    justify-items: center;
    margin: 1rem;
}
</style>