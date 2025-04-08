<template>
    <div>
        <div class="container mt-3">
            <Breadcrumb title="Tài khoản"/>
            <div class="row">
                <!-- Sidebar account -->
                <SideBarAccount />
                <!-- Main content -->
                <div class="col">
                    <div class="card p-3">
                        <div class="text-center">Không có dữ liệu</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from '../../components/Breadcrumb.vue';
import SideBarAccount from '../../layouts/SideBarAccount.vue';
</script>

<style scoped></style>