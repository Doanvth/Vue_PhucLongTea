<template>
  <div>
    <div class="d-flex justify-content-center quantity">
      <button @click="decrease" class="btn btn-outline-danger rounded-start-pill">−</button>
      <input type="text" id="quantity" class="text-center bg-white" :value="quantity" disabled>
      <button @click="increase" class="btn btn-outline-success rounded-end-pill">+</button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['quantity']);
const emit = defineEmits(['updateQuantity']);

const increase = () => {
  if (props.quantity < 100) {
    emit('updateQuantity', props.quantity + 1);
  }
};

const decrease = () => {
  if (props.quantity > 1) {
    emit('updateQuantity', props.quantity - 1);
  }
};
</script>

<style scoped>
.quantity input {
  width: 40px;
}
</style>