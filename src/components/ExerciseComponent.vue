<template>
    <div class="exerciseCard">
        <h4 class="type">{{ legend }}</h4>
        <div class="timer">
            <span class="minuts">{{ time < 10 ? '0' + Math.floor(time) : Math.floor(time) }}</span>
                    :
                    <span class="seconds">{{ (time * 60) % 60 }}</span>
        </div>
        <p class="description">{{ description }}</p>
        <slot />
    </div>
</template>
<script setup>
    import { defineProps, computed } from 'vue'
    import { onMounted } from 'vue'
    import { ref } from 'vue'

    const props = defineProps({
        exercise: {
            required: true,
            type: Object,
        },
        legends: {
            required: true,
            default: () => [],
        },
    })
    console.log('props.exercise', props.exercise)
    console.log('props.legends', props.legends)

    // On filtre la légende correspondant à l'exercice
    const legendObj = computed(() =>
        props.legends.find(l => l._id_legends === props.exercise.id_legend_exercises)
    )

    const legend = computed(() => legendObj.value?.type_legends || '')
    const description = computed(() => legendObj.value?.description_legends || '')
    const time = computed(() => props.exercise.duration_exercises)
</script>

<style lang="scss" scoped>
    .exerciseCard {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
        border-radius: 1rem;
        background: #f5f7fa;
        border: 2px solid #a3c800;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
    }

    .type {
        color: #1a2a3a;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .timer {
        background: #a3c800;
        color: #1a2a3a;
        padding: 0.5em 1em;
        border-radius: 0.5em;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    .description {
        color: #1a2a3a;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        text-align: center;
    }
</style>
