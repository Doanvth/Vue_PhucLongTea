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
                        <div class="d-flex justify-content-between mb-3">
                            <div>Bạn có <span class="fw-bold">2</span> <strong>địa chỉ</strong></div>
                            <div><a href="#" class="text-success">Thêm địa chỉ mới</a></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card p-3 border-2 border-success">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex">
                                            <i class="bi bi-geo-alt text-success"></i>
                                            <div class="ms-1 badge text-bg-success align-content-center">Địa chỉ mặc
                                                định</div>
                                        </div>
                                        <div class="d-flex gap-3">
                                            <a href="#" class="text-success">Xoá</a>
                                            <a href="#" class="text-success">Chỉnh sửa</a>
                                        </div>
                                    </div>
                                    <div class="text-success fw-bold mb-2">Toàn Nguyễn</div>
                                    <div class="mb-2">
                                        <span class="text-decoration-underline">Địa chỉ:</span>
                                        <span> kdc Hồng Loan,</span>
                                        <span> P. Hưng Thạnh,</span>
                                        <span> Q. Cái Răng,</span>
                                        <span> TP. Cần Thơ</span>
                                    </div>
                                    <div class="">
                                        <span class="text-decoration-underline">Số điện thoại:</span>
                                        <span> 0123456789</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card p-3 border-2">
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="d-flex">
                                            <i class="bi bi-geo-alt text-success"></i>
                                        </div>
                                        <div class="d-flex gap-3">
                                            <a href="#" class="text-success">Xoá</a>
                                            <a href="#" class="text-success">Chỉnh sửa</a>
                                        </div>
                                    </div>
                                    <div class="text-success fw-bold mb-2">Toàn Nguyễn</div>
                                    <div class="mb-2">
                                        <span class="text-decoration-underline">Địa chỉ:</span>
                                        <span> kdc Hồng Loan,</span>
                                        <span> P. Hưng Thạnh,</span>
                                        <span> Q. Cái Răng,</span>
                                        <span> TP. Cần Thơ</span>
                                    </div>
                                    <div class="">
                                        <span class="text-decoration-underline">Số điện thoại:</span>
                                        <span> 0123456789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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