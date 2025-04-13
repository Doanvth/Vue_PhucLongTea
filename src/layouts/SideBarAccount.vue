<template>
    <div class="col-auto d-none d-lg-block">
        <div class="card p-3 sidebar-account">
            <ol class="list-group list-group-flush border-0 rounded-0">
                <li class="list-group-item gap-3 border-top-0" :class="{ 'active': isActive('/account/info') }">
                    <RouterLink to="/account/info" class="text-decoration-none text-black">
                        <img :src="ImgAccount" alt="">
                        <span class="ms-2">Thông tin cá nhân</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3" :class="{ 'active': isActive('/account/member') }">
                    <RouterLink to="/account/member" class="text-decoration-none text-black">
                        <img :src="ImgAccount" alt="">
                        <span class="ms-2">Khách hàng thành viên</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3" :class="{ 'active': isActive('/account/voucher') }">
                    <RouterLink to="/account/voucher" class="text-decoration-none text-black">
                        <img :src="ImgPromotion" alt="">
                        <span class="ms-2">Ưu đãi của tôi</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3" :class="{ 'active': isActive('/account/address') }">
                    <RouterLink to="/account/address" class="text-decoration-none text-black">
                        <img :src="ImgAddress" alt="">
                        <span class="ms-2">Sổ địa chỉ</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3" :class="{ 'active': isActive('/account/customer-order') }">
                    <RouterLink to="/account/customer-order" class="text-decoration-none text-black">
                        <img :src="ImgOrder" alt="">
                        <span class="ms-2">Đơn hàng</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3" :class="{ 'active': isActive('/account/product-favorite') }">
                    <RouterLink to="/account/product-favorite" class="text-decoration-none text-black">
                        <img :src="ImgLike" alt="">
                        <span class="ms-2">Sản phẩm yêu thích</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3" :class="{ 'active': isActive('/account/ordered-product') }">
                    <RouterLink to="/account/ordered-product" class="text-decoration-none text-black">
                        <img :src="ImgProduct" alt="">
                        <span class="ms-2">Sản phẩm đã đặt</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3" :class="{ 'active': isActive('/account/help-center') }">
                    <RouterLink to="/account/help-center" class="text-decoration-none text-black">
                        <img :src="ImgSupport" alt="">
                        <span class="ms-2">Trung tâm trợ giúp</span>
                    </RouterLink>
                </li>
                <li class="list-group-item gap-3">
                    <RouterLink to="" class="text-decoration-none text-black">
                        <img :src="ImgLogout" alt="">
                        <span class="ms-2">Đăng xuất</span>
                    </RouterLink>
                </li>
            </ol>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import ImgAccount from '../assets/images/account.png'
import ImgAddress from '../assets/images/address.png'
import ImgPromotion from '../assets/images/promotion.png'
import ImgLike from '../assets/images/like.png'
import ImgProduct from '../assets/images/product.png'
import ImgOrder from '../assets/images/order.png'
import ImgSupport from '../assets/images/support.png'
import ImgLogout from '../assets/images/logout.png'

const route = useRoute();

const isActive = (path) => route.path === path;
</script>

<style scoped>
.sidebar-account {
    width: 18rem;
}

img {
    width: 24px;
}

li {
    padding-left: 12px !important;
}

li.active {
    background-color: white !important;
    border-bottom: 1px solid var(--bs-border-color) !important;
    border-top: 1px solid var(--bs-border-color) !important;
    border-left: 2px solid green !important;
    padding-left: 10px !important;
}

li:first-child.active {
    border-top: none !important;
}

li:last-child.active {
    border-bottom: none !important;
}
</style>