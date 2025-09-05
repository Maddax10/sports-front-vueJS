<template>
    <div class="logged_card">
        <label>Vous êtes connectés !</label>
    </div>
</template>

<style lang="scss" scoped>
    .logged_card {
        justify-self: center;
        margin: 5rem;
        background: #f5f7fa;
        padding: 2rem;
        border-radius: 15px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        border: 2px solid #a3c800;

        label {
            font-size: 1.25rem;
            font-weight: 900;
            color: #1a2a3a;
            display: flex;
            justify-self: center;
        }
    }
</style>