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
        background: #f5f7fa;
        border: 2px solid #a3c800;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        width: 80dvw;
        border-radius: 1rem;
        padding: 0;
        overflow: hidden;
    }

    .title {
        padding-inline: 1rem;
        color: #1a2a3a;
        font-weight: 700;
    }

    .weeks {
        display: grid;
        gap: 1rem;
    }
</style>