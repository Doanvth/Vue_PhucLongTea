<!-- <template>
    <RouterView/>
</template> -->

<script setup>
import { RouterView } from 'vue-router';
import HeaderView from './layouts/HeaderView.vue'
import NavBarView from './layouts/NavBarView.vue';
import FooterView from './layouts/FooterView.vue';
import MenuLayoutView from './views/Menu/MenuLayoutView.vue'
import ListProductView from './views/AdminView/Product/ListProductView.vue'
import CreateProductView from './views/AdminView/Product/CreateProductView.vue'

</script>

<template>
    <div  style="background-color: var(--primary-gray);">
        <HeaderView v-if="!$route.meta.hideLayout"/>
        <NavBarView v-if="!$route.meta.hideLayout"/>
    </div>
    <div>
        <RouterView/>
    </div>
    <FooterView v-if="!$route.meta.hideLayout" />
</template>

<style scoped>


</style>
