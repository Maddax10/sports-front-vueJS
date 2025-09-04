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
    background: linear-gradient(135deg, #323e75 0%, #3f2957 100%);

    padding: 1rem;
}
</style>