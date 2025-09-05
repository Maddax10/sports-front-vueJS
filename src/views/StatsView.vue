<template>
    <main class="stats-dashboard">
        <h2>Statistiques</h2>
        <section class="stats-section">
            <div class="stats-card">
                <h3>Total des séances</h3>
                <p>36</p>
            </div>
            <div class="stats-card">
                <h3>Total des exercices</h3>
                <p>358</p>
            </div>
            <div class="stats-card">
                <h3>Temps total d'entraînement</h3>
                <p>1200 min</p>
            </div>
            <div class="stats-card">
                <h3>Distance totale</h3>
                <p>150 km</p>
            </div>
            <div class="stats-card">
                <h3>Vitesse moyenne</h3>
                <p>8,5 km/h</p>
            </div>
        </section>
    </main>
</template>

<script setup>
    // Statique, aucune logique pour le moment
</script>

<style scoped>
    .stats-dashboard {
        padding: 2rem;
        background: #f5f7fa;
        min-height: 80vh;
    }

    .stats-section {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }

    .stats-card {
        background: #fff;
        border: 2px solid #a3c800;
        border-radius: 1rem;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        padding: 2rem;
        min-width: 220px;
        text-align: center;
        color: #1a2a3a;
    }

    .stats-card h3 {
        margin-bottom: 1rem;
        color: #154575;
    }
</style>