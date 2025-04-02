<template>
    <button :class="'btn ' + type" @click="onClick">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    type: { type: String, default: 'primary' },
});
defineEmits(['click']);
</script>

<style scoped>
.btn {
    padding: 8px 16px;
    border-radius: 5px;
}

.btn.primary {
    background-color: blue;
    color: white;
}
</style>