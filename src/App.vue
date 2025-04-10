<script setup>
import HeaderView from './layouts/HeaderView.vue'
import NavBarView from './layouts/NavBarView.vue';
import FooterView from './layouts/FooterView.vue';
import MenuView from './views/MenuView.vue';
</script>

<template>
    <div style="background-color: var(--primary-gray);">
        <HeaderView/>
        <NavBarView/>
    </div>
    <div class="container my-3">
        <MenuView/>
    </div>
    <FooterView/>
</template>

<style scoped>

</style>
