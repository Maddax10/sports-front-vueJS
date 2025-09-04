<template>
    <main>
        <h1>DashboardView</h1>
        <SeasonComponent>
            <WeekComponent class="seasonComponent">
                <SessionComponent>
                    <ExerciseComponent class="doneExercise"></ExerciseComponent>
                    <ExerciseComponent class="activeExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                </SessionComponent>
                <SessionComponent class="disabledCard">
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                </SessionComponent>
                <SessionComponent class="disabledCard">
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                </SessionComponent>
            </WeekComponent>
            <WeekComponent class="disabledCard">
                <SessionComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                    <ExerciseComponent class="disabledExercise"></ExerciseComponent>
                </SessionComponent>
            </WeekComponent>
        </SeasonComponent>
    </main>

</template>

<script setup>
import SeasonComponent from '@/components/SeasonComponent.vue';
import WeekComponent from '@/components/WeekComponent.vue';
import SessionComponent from '@/components/SessionComponent.vue';
import ExerciseComponent from '@/components/ExerciseComponent.vue';
import { useTrainingStore } from '@/stores/training';

const trainingStore = useTrainingStore();

trainingStore.fetchAllExercises();
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
    background-color: #D9D9D9;
    border: 2px solid #868686;
    box-shadow: inset 0 0 20px 0px rgba(0, 0, 0, 0.326), 0 3px 10px 0px rgba(0, 0, 0, 0.699);
}

.activeExercise {
    background-color: green;
    border: 1px solid darken(green, .3);
    box-shadow: 0 3px 10px 0px rgba(0, 0, 0, 0.699);
    opacity: .5;
}

.disabledSeason {
    opacity: .5;
}

.disabledWeek {
    opacity: .5;
}

.disabledSession {
    opacity: .5;
}

.disabledExercise {
    opacity: .5;
    background-color: #D9D9D9;
    border: 1px solid rgb(132, 132, 132);
}
</style>