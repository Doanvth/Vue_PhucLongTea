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
  import { ref } from 'vue';
  
  const quantity = ref(1);
  
  const increase = () => {
    if (quantity.value < 100) {
      quantity.value++;
    }
  };
  
  const decrease = () => {
    if (quantity.value > 1) {
      quantity.value--;
    }
  };
  </script>
  
  <style scoped>
  .quantity input {
    width: 40px;
  }
  </style>
  