<template>
    <main>
        <h1>DashboardView</h1>
        <SeasonComponent v-for="(season, key) in seasons" :item="season" :key="key">
            {{ season }}
            <WeekComponent v-for="(week, key) in weeks" :item="week" :key="key" class="seasonComponent">
                {{ week }}
                <SessionComponent
                    v-for="(session, key) in sessions.filter(item => item.id_week_session === week._id_week)"
                    :session="session" :key="key">
                    {{ session }}
                    <ExerciseComponent
                        v-for="(exercise, key) in exercises.filter(item => item.id_sessions_exercises === session._id_session)"
                        :exercise="exercise" :key="key" class="disabledExercise">
                        {{ exercise }}

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
    let exercises = ref(null)
    let sessions = ref(null)
    let weeks = ref(null)
    let seasons = ref(null)

    onMounted(async () => {
        exercises.value = await trainingStore.getAllExercises
        console.log('exercises : ', exercises.value)
        sessions.value = await trainingStore.getAllSessions
        console.log('sessions : ', sessions.value)
        weeks.value = await trainingStore.getAllWeeks
        console.log('weeks : ', weeks.value)
        seasons.value = await trainingStore.getAllSeasons
        console.log('seasons : ', seasons.value)
    })
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .seasonComponent {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .doneExercise {
        opacity: 0.5;

        box-shadow: 0 3px 10px 0px rgba(0, 0, 0, 0.699);
        background-color: green;
        border: 1px solid darken(green, 0.3);
    }

    .activeExercise {
        background-color: #d9d9d9;
        border: 2px solid #868686;
        box-shadow:
            inset 0 0 20px 0px rgba(0, 0, 0, 0.326),
            0 3px 10px 0px rgba(0, 0, 0, 0.699);
        color: black;
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
        background-color: #d9d9d9;
        border: 1px solid rgb(132, 132, 132);
    }
</style>
