<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-decoration-none">
                        <li class="breadcrumb-item">
                            <RouterLink to="#" class="text-success text-decoration-none link-danger">Trang
                                chủ</RouterLink>
                        </li>
                        <li class="breadcrumb-item active">Tài khoản</li>
                    </ol>
                </nav>
            </div>
            <div class="row">
                <!-- Sidebar account -->
                <SideBarAccount />
                <!-- Main content -->
                <div class="col">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SideBarAccount from '../../layouts/SideBarAccount.vue';
</script>

<style scoped></style>