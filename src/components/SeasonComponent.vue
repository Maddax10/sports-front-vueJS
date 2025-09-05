<template>
    <div class="seasonCard">
        <h1 class="title">SeasonCard</h1>
        <p class=""></p>
        <div class="weeks">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.seasonCard {
    background: linear-gradient(135deg, #28325e 0%, #291a39 100%);
    width: 80dvw;
    border-radius: 1rem;
    padding: 0;
    overflow: hidden;
}

.title {
    padding-inline: 1rem;
}

.weeks {
    display: grid;
    gap: 1rem;
}
</style>