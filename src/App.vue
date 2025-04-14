<script setup>
import HeaderView from './layouts/HeaderView.vue'
import NavBarView from './layouts/NavBarView.vue';
import FooterView from './layouts/FooterView.vue';
</script>

<template>
    <div style="background-color: var(--primary-gray);">
        <HeaderView/>
        <NavBarView/>
    </div>
    <div height="100px" style="background-color: azure;">

    </div>
    <FooterView/>
</template>

<style scoped>

</style>
