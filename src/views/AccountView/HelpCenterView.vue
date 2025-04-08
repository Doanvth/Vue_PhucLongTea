<template>
    <div>
        <div class="container mt-3">
            <Breadcrumb title="Tài khoản"/>
            <div class="row">
                <!-- Sidebar account -->
                <SideBarAccount />
                <!-- Main content -->
                <div class="col">
                    <div class="card rounded-4">
                        <div class="card p-3 card-help-center text-light">
                            <div>Xin chào <span>Nguyen</span></div>
                            <div class="mb-4">Phúc Long giúp được gì cho bạn</div>
                            <form action="">
                                <div class="input-group mb-3">
                                    <button
                                        class="btn border-0 bg-light rounded-start-pill text-black ps-3"
                                        type="button" id="button-addon2"><i class="bi bi-search text-success"></i></button>
                                    <input type="text"
                                        class="form-control rounded-end-pill shadow-none border-0 bg-light pe-3"
                                        placeholder="Vui lòng nhập câu hỏi, từ khoá..." aria-label="Recipient's username"
                                        aria-describedby="button-addon2">
                                </div>
                            </form>
                        </div>
                        <div class="row p-3 mb-3">
                            <h6 class="text-success">Về Phúc Long</h6>
                            <div class="col-md-6">

                            </div>
                            <div class="col-md-6"></div>
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

<style scoped>
.card-help-center {
    height: 10rem;
    border-radius: 15px;
    background-image: url("../../assets/images/banner_help.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>