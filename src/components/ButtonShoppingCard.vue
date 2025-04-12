<template>
    <div class="position-fixed cart-container">
        <div class="row m-0 gap-3">
            <RouterLink to="/shopping-card" class="btn btn-success rounded-circle cart-custom position-relative">
                <i class="bi bi-cart-plus fs-4"></i>
                <span class="position-absolute translate-middle badge rounded-circle bg-danger badge-custom">
                    {{ cartQuantity == 0 ? "" : cartQuantity}}
                </span>
            </RouterLink>
            <button class="btn rounded-circle p-0"><img :src="IconZalo" alt=""></button>
        </div>
    </div>
</template>

<script setup>
import IconZalo from '../assets/images/zalo.svg';
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['cartQuantity']);
</script>

<style scoped>
.cart-container {
    width: 3.5rem;
    right: 1.5rem;
    bottom: 1.5rem;
}

.cart-custom {
    width: 3.4rem;
    height: 3.4rem;
}

.badge-custom{
    width: 1.5rem;
    height: 1.5rem;
    top: 0.5rem;
    left: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>