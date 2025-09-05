<template>
    <div class="weekCard">
        <h2>week card</h2>
        <div class="resetDay">
            <label for="">reset session</label>
            <select>
                <option value="option1">session 1</option>
                <option value="option2">session 2</option>
                <option value="option3">session 3</option>
            </select>
            <button>reset</button>
        </div>
        <slot />
    </div>
</template>

<script setup></script>
<style lang="scss" scoped>
    .weekCard {
        background: #f5f7fa;
        border: 2px solid #a3c800;
        box-shadow: 0 2px 8px rgba(26, 42, 58, 0.08);
        padding: 1rem;
    }
</style>