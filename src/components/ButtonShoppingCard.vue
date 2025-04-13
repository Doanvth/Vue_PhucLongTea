<template>
    <div class="position-fixed cart-container">
        <div class="row m-0 gap-3">
            <RouterLink :to="checkoutPath" class="btn btn-success rounded-circle cart-custom position-relative">
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
import { RouterLink, useRouter } from 'vue-router';
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';

const user = ref(null);
const cartQuantity = defineModel('cartQuantity');

// lấy userId từ LocalStorage
onMounted(async() => {
    // user.value = JSON.parse(localStorage.getItem('user')) || null;
    user.value = { id: "bd13", name: "Test User" };
    await restoreCartQuantity();
});

// Lấy số loại sản phẩm "pending" từ JSON dựa vào userId
const restoreCartQuantity = async () => {
    // if (!user.value) return; 

    try {
        const response = await axios.get('http://localhost:3000/orders');
        let userOrders = response.data.filter(order => order.userId === user.value.id && order.status === "pending");

        cartQuantity.value = userOrders.reduce((total, order) => total + order.cartItems.length, 0);
    } catch (error) {
        console.error("Lỗi khi lấy đơn hàng từ JSON:", error);
    }
};

// Điều hướng dựa trên trạng thái đăng nhập
const checkoutPath = computed(() => {
    // let storedUser = JSON.parse(localStorage.getItem('user'));
    let storedUser = ref({});
    storedUser.id = "bd13";
    // return storedUser ? `/account/shopping-card?userId=${storedUser.id}` : '/login';
    return storedUser ? `/account/shopping-card` : '/login';
});

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