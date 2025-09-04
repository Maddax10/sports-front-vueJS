<template>
    <div class="seasonCard">
        <h1>SeasonCard</h1>
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
    padding-block: .5rem;
    overflow: hidden;
    padding: 0;
}

.weeks {
    display: grid;
    gap: 1rem;
}
</style>