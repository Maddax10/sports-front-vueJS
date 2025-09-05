<template>
    <main>
        <SeasonComponent v-for="(season, key) in seasons" :item="season" :key="key">
            {{ season }}
            <WeekComponent v-for="(week, key) in weeks" :item="week" :key="key" class="seasonComponent">
                {{ week }}
                <SessionComponent
                    v-for="(session, key) in sessions.filter(item => item.id_week_session === week._id_week)"
                    :session="session" :key="key" :exercices="exercises">
                    {{ session }}
                    <ExerciseComponent
                        v-for="(exercise, key) in legends.length > 0 ? exercises.filter(item => item.id_sessions_exercises === session._id_session) : []"
                        :exercise="exercise" :legends="legends" :key="key" class="disabledExercise">

                    </ExerciseComponent>
                </SessionComponent>
            </WeekComponent>
        </SeasonComponent>
    </main>
</template>

<script setup>
    import SeasonComponent from '@/components/SeasonComponent.vue'
    import WeekComponent from '@/components/WeekComponent.vue'
    import SessionComponent from '@/components/SessionComponent.vue'
    import ExerciseComponent from '@/components/ExerciseComponent.vue'
    import { useTrainingStore } from '@/stores/training'
    import { onMounted } from 'vue'
    import { ref } from 'vue'

    const trainingStore = useTrainingStore()
    let exercises = ref([])
    let sessions = ref([])
    let weeks = ref([])
    let seasons = ref([])
    let legends = ref([])

    onMounted(async () => {

        exercises.value = await trainingStore.getAllExercises
        sessions.value = await trainingStore.getAllSessions
        weeks.value = await trainingStore.getAllWeeks
        seasons.value = await trainingStore.getAllSeasons
        legends.value = await trainingStore.getAllLegends
        console.log('exercises : ', exercises.value)
        console.log('sessions : ', sessions.value)
        console.log('weeks : ', weeks.value)
        console.log('seasons : ', seasons.value)
        console.log('legends : ', legends.value)
    })
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
    }

    .seasonComponent {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .doneExercise {
        opacity: 0.5;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        background-color: #a3c800;
        border: 1px solid #1a2a3a;
    }

    .activeExercise {
        background-color: #f5f7fa;
        border: 2px solid #a3c800;
        box-shadow:
            inset 0 0 20px 0px rgba(26, 42, 58, 0.08),
            0 2px 8px rgba(26, 42, 58, 0.08);
        color: #1a2a3a;
    }

    .disabledSeason {
        opacity: 0.5;
    }

    .disabledWeek {
        opacity: 0.5;
    }

    .disabledSession {
        opacity: 0.5;
    }

    .disabledExercise {
        opacity: 0.5;
        background-color: #f5f7fa;
        border: 1px solid #a3c800;
    }
</style>
