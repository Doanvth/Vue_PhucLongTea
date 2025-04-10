<template>
    <div class="nav-item">
        <a class="fw-semibold">Tất cả</a>
        <div class="child-menu">
            <div class="py-2">
                <div v-for="item in menuData.child">
                    <a class="menu-title mb-2">{{ item.title }}</a>
                    <div v-if="item.child && item.child.length">
                        <RecursiveSideBar :child="item.child" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';
import RecursiveSideBar from "./RecursiveSideBar.vue";

const API_URL_MENU = "http://localhost:3000/menu";
const menuData = ref([]);

const getMenu = async () => {
    try {
        const response = await axios.get(API_URL_MENU);
        menuData.value = response.data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu menu:", error);
    }
};
onMounted(getMenu);

</script>
<style>
.menu-title:hover{
    color: var(--primary-green);
}
</style>