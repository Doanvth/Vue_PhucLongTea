<script setup>
import { RouterView } from 'vue-router';
import HeaderView from './layouts/HeaderView.vue'
import NavBarView from './layouts/NavBarView.vue';
import FooterView from './layouts/FooterView.vue';
import MenuLayoutView from './views/Menu/MenuLayoutView.vue'
import ListCakeView from './views/AdminView/MenuCake/ListCakeView.vue';

</script>

<template>
    <div  style="background-color: var(--primary-gray);">
        <HeaderView/>
        <NavBarView/>
    </div>
    <div class="container my-3">
        <!-- <RouterView/> -->

        <ListCakeView/>

    </div>
    <FooterView/>
</template>

<style scoped>

</style>
