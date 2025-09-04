<template>
    <div class="logged_card">
        <label>Vous êtes connectés !</label>
    </div>
</template>

<style lang="scss" scoped>
.logged_card {
    justify-self: center;
    margin: 5rem;
    background: white;
    padding: 2rem;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.311);

    label {
        font-size: 1.25rem;
        font-weight: 900;
        color: #01aa47;
        display: flex;
        justify-self: center;
    }
}
</style>