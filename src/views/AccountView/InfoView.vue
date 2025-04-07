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
                    <div class="card p-4">
                        <h3 class="text-success mb-3">Thông tin cá nhân</h3>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Họ & Tên</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="col-md-6">
                                <label for="phone" class="form-label">Số điện thoại</label>
                                <input type="text" class="form-control" id="phone">
                            </div>
                            <div class="col-md-6">
                                <label for="gender" class="form-label">Giới tính</label>
                                <select id="gender" class="form-select">
                                    <option selected>Chọn...</option>
                                    <option value="Male">Nam</option>
                                    <option value="Female">Nữ</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="cccd" class="form-label">Số CMND/CCCD</label>
                                <input type="text" class="form-control" id="cccd" placeholder="">
                            </div>
                            <div class="col-md-6">
                                <label for="birthday" class="form-label">Ngày sinh</label>
                                <input type="date" class="form-control" id="birthday">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email">
                            </div>
                            <div class="col-md-6">
                                <label for="city" class="form-label">Tỉnh/Thành phố</label>
                                <select id="city" class="form-select">
                                    <option selected>Chọn...</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="district" class="form-label">Quận/Huyện</label>
                                <select id="district" class="form-select">
                                    <option selected>Chọn...</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="ward" class="form-label">Phường/Xã</label>
                                <select id="ward" class="form-select">
                                    <option selected>Chọn...</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="address" class="form-label">Địa chỉ</label>
                                <input type="text" class="form-control" id="address">
                            </div>
                            <div class="col-12 d-flex justify-content-end">
                                <button type="submit" class="btn btn-success">Lưu thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SideBarAccount from '../../layouts/SideBarAccount.vue';
</script>

<style scoped>

</style>