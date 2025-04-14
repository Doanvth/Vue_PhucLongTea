<template>
    <header height="60px">
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="left-header d-flex align-items-center gap-4">
                    <div class="logo-wrapper" width="60px">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <img src="../assets/images/logo.png" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="../assets/images/logo_1.png" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="../assets/images/logo_2.png" class="d-block w-100" alt="...">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-search">
                        <form action="">
                            <div class="input-group">
                                <span class="input-group-text px-3">
                                    <i class="bi bi-search"></i>
                                </span>
                                <input type="text" class="border-0 pe-3 py-2" placeholder="Bạn muốn mua gì...">
                            </div>
                        </form>
                    </div>
                </div>

                <div class="right-header d-flex align-items-center gap-4">
                    <div class="button-delivery">
                        <!-- Button trigger modal -->
                        <button type="button" class="border-0 ps-2 pe-4 py-1 rounded-pill" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <img src="../assets/images/delivery.png" alt="" class="img-fluid me-2" width="35px">
                            Chọn phương thức nhận hàng
                        </button>

                        <!-- Modal -->
                        <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg ">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <nav>
                                            <div class="nav nav-tabs w-100" id="nav-tab" role="tablist">
                                                <button class="nav-link w-50 active" id="nav-home-tab"
                                                    data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
                                                    role="tab" aria-controls="nav-home" aria-selected="true">Giao
                                                    hàng</button>
                                                <button class="nav-link w-50" id="nav-profile-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav-profile" type="button" role="tab"
                                                    aria-controls="nav-profile" aria-selected="false">Đến lấy</button>
                                            </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                                aria-labelledby="nav-home-tab" tabindex="0">
                                                <div class="form-search my-4">
                                                    <form action="">
                                                        <div class="input-group">
                                                            <span class="input-group-text px-3">
                                                                <i class="bi bi-search"></i>
                                                            </span>
                                                            <input type="text" class="border-0 pe-3 py-2"
                                                                placeholder="Vui lòng nhập địa chỉ...">
                                                        </div>
                                                    </form>
                                                </div>

                                                <div
                                                    class="d-flex align-items-center gap-2 fw-semibold location-content">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-crosshair" viewBox="0 0 16 16">
                                                        <path
                                                            d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                                    </svg>
                                                    <p class="m-0">Vị trí hiện tại của quý khách</p>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                                                aria-labelledby="nav-profile-tab" tabindex="0">
                                                <div class="form-search my-4">
                                                    <form action="">
                                                        <div class="input-group">
                                                            <span class="input-group-text px-3">
                                                                <i class="bi bi-search"></i>
                                                            </span>
                                                            <input type="text" class="border-0 pe-3 py-2"
                                                                placeholder="Vui lòng nhập địa chỉ...">
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="notify-icon position-relative">
                        <i class="bi bi-envelope fs-4"></i>
                        <span class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                            1
                        </span>
                        <div class="notify-wrapper position-absolute">
                            <nav>
                                <div class="nav nav-tabs w-100" id="nav-tab" role="tablist">
                                    <button class="nav-link w-50 active" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">Tin Tức</button>
                                    <button class="nav-link w-50" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab"
                                        aria-controls="nav-profile" aria-selected="false">Đơn hàng</button>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                    aria-labelledby="nav-home-tab" tabindex="0">...</div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                                    aria-labelledby="nav-profile-tab" tabindex="0">...</div>

                            </div>
                        </div>
                    </div>
                    <div class="user-icon">
                        <i class="bi bi-person-circle fs-4"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
header {
    background-color: var(--white);
}

.logo-wrapper {
    width: 60px;
}

.form-search input,
.input-group-text,
.button-delivery button {
    background-color: var(--primary-gray);
}

.input-group-text {
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    font-size: 14px;
    color: var(--primary-gray-text);
}

.form-search input {
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    font-size: 14px;
    width: 250px;
    outline: 0;
}

.tab-pane input {
    width: 90%;
}

.button-delivery button {
    color: var(--primary-green);
    font-size: 13px;
    font-weight: 700;
}

.notify-icon,
.user-icon,
.location-content {
    color: var(--primary-green);
}

.notify-icon>span {
    font-size: 9px;
    top: 10px;
}

.modal-dialog {
    height: 80%;
}

.notify-wrapper {
    width: 300px;
    height: 300px;
    top: 30px;
    left: -290px;
    background-color: var(--white);
}

.notify-wrapper .nav-link {
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 13px;
}

.notify-wrapper .nav-link:focus {
    color: var(--primary-green)
}

.notify-wrapper {
    display: none;
}

.notify-icon:hover .notify-wrapper {
    display: block;
}

.navbar-toggler:focus {
    box-shadow: none;
}

@media(max-width:1024px) {
    header {
        display: none;
    }
}
</style>