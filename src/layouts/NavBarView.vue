<template>
    <nav class="nav-bar mt-1">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
                <a class="navbar-brand d-lg-none" href="#" width="60px">
                    <img src="../assets/images/logo.png" alt="" class="img-fluid" width="60px">
                </a>
                <button class="navbar-toggler outline-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="bi bi-list text-success"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="container">
                            <ul class="navbar-nav my-0 d-flex justify-content-center align-items-center gap-5">
                                <li class="nav-item active">
                                    <a href="" class="nav-link fw-semibold">Trang chủ</a>
                                </li>
                                <li class="nav-item position-relative menu-toggle">
                                    <a class="nav-link fw-semibold">Menu</a>
                                    <div class="child-menu position-absolute">
                                        <div class="py-2 d-flex">
                                            <i class="bi bi-caret-up-fill position-absolute translate-middle mt-1"></i>
                                            <div v-for="item in menuData.child">
                                                <p class="menu-title mb-2">{{ item.title }}</p>
                                                <div v-if="item.child && item.child.length">
                                                    <RecursiveMenu :child="item.child" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item position-relative san-pham-toggle">
                                    <a href="" class="nav-link fw-semibold">Sản phẩm đóng gói</a>
                                    <div class="child-menu-sp position-absolute py-4 d-none">
                                        <i class="bi bi-caret-up-fill position-absolute translate-middle mt-1"></i>
                                        <div v-for="item in spdgData.child">
                                            <p class="menu-title mb-2">{{ item.title }}</p>
                                            <div v-if="item.child && item.child.length">
                                                <RecursiveMenu :child="item.child" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item position-relative vct-toggle">
                                    <a href="" class="nav-link fw-semibold">Về chúng tôi</a>
                                    <div class="child-menu-vct position-absolute py-4 d-none">
                                        <i class="bi bi-caret-up-fill position-absolute translate-middle mt-1"></i>
                                        <div class="child">
                                            <p class="menu-title mb-2">Về phúc long</p>
                                            <ul>
                                                <li><a href="">Giới thiệu công ty</a></li>
                                                <li><a href="">Thư viện hình ảnh</a></li>
                                                <li><a href="">Liên hệ</a></li>
                                                <li><a href="">Hình ảnh menu</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link fw-semibold">Khuyến mãi</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link fw-semibold">Hội viên</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
        </nav>
    </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';
import RecursiveMenu from "./RecursiveMenu.vue";

const API_URL_MENU = "http://localhost:3000/menu";
const API_URL_SPDG = "http://localhost:3000/san-pham-dong-goi";
const spdgData = ref([]);
const menuData = ref([]);

const getMenu = async () => {
    try {
        const response = await axios.get(API_URL_MENU);
        menuData.value = response.data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu menu:", error);
    }
};
onMounted(getMenu);

const getSPDG = async () => {
    try {
        const response = await axios.get(API_URL_SPDG);
        spdgData.value = response.data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu menu:", error);
    }
};
onMounted(getSPDG);


</script>

<style scoped>
.nav-bar {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-color: var(--white);
    margin-top: 1.5px;
    padding-block: 10px;
}

.nav-item a {
    text-transform: uppercase;
    font-size: 14px;
    color: var(--primary-gray-text);
    text-decoration: none;
}

.nav-item a:hover {
    color: var(--primary-green);
}

.child-menu {
    display: none;
    position: absolute;
    top: 45px;
    background-color: white;
    left: -300%;
    width: 500px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    transition: 0.3s ease;
}

.child-menu i,
.child-menu-sp i,
.child-menu-vct i {
    top: -15px;
    font-size: 25px;
    color: rgb(252, 252, 252);
}

.child-menu-sp i {
    left: 42%;
}

.child-menu i {
    left: 40%;
}

.child-menu-vct i{
    left: 33%;
}
.child-menu-sp,
.child-menu-vct {
    position: absolute;
    top: 45px;
    background-color: white;
    left: -100%;
    width: 500px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.menu-title,
.top-title {
    text-transform: uppercase;
    margin-left: 50px;
    color: var(--primary-green);
    font-weight: 600;
}

.menu-toggle:hover .child-menu {
    display: block;
}

.san-pham-toggle:hover .child-menu-sp {
    display: flex !important
}

.vct-toggle:hover .child-menu-vct {
    display: block !important
}

.child ul li {
    padding: 8px 0;
}

.child ul li a {
    color: black;
    padding: 8px 15px;
}

.child ul li a:hover {
    background-color: var(--primary-green);
    color: var(--white);
}

@media(max-width:990px) {
    .menu-toggle:hover .child-menu, 
    .san-pham-toggle:hover .child-menu-sp, 
    .vct-toggle:hover .child-menu-vct {
    display: none;
}


}
</style>