<template>
    <div>
        <main class="d-flex">
            <SidebarAdmin />
            <div class="w-100">
                <NavbarAdmin/>
                <!--  -->
                <RouterView />
            </div>
        </main>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SidebarAdmin from '../../layouts/Admin/SidebarAdmin.vue';
import NavbarAdmin from '../../layouts/Admin/NavbarAdmin.vue';
</script>

<style></style>