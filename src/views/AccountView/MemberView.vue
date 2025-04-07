<template>
    <div>
        <div class="container-md mt-5">
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
                <div class="col px-4">
                    <div class="row">
                        <div class="card card-bg-member">
                            <div class="card card-detail px-3 py-2">
                                <div class="text-success mb-2">Hạng thành viên: <span class="fw-bold">Member</span>
                                </div>
                                <div class="row d-flex">
                                    <div class="col-4 text-uppercase text-success">member</div>
                                    <div class="col-2 text-uppercase text-center text-secondary">vip</div>
                                    <div class="col-6 text-uppercase text-end text-secondary">diamond</div>
                                </div>
                                <div class="progress-wrapper my-3">
                                    <div class="progress" role="progressbar" aria-label="Success example"
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar bg-success"></div>
                                    </div>
                                    <i class="bi bi-circle-fill icon-dot start"></i>
                                    <i class="bi bi-circle-fill icon-dot middle"></i>
                                    <i class="bi bi-circle-fill icon-dot end"></i>
                                </div>
                                <div>
                                    <div>Tích thêm <span class="fw-bold text-success">400</span> điểm nữa để lên hạng
                                        <span class="fw-bold text-success">Vip</span>
                                    </div>
                                    <div>Ngày xét hạng: <span class="fw-bold text-success">02-04-2026</span></div>
                                </div>
                            </div>
                            <div class="rounded-circle card-logo">
                                <img :src="ImgLogo" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 p-md-0">
                            <div class="card p-3">
                                <div class="d-inline-flex gap-1">
                                    <a class="btn border-0 p-0 w-100 d-flex justify-content-between"
                                        data-bs-toggle="collapse" href="#promotion-member" role="button"
                                        aria-expanded="false" aria-controls="promotion-member">
                                        <h5 class="text-success m-0">Ưu đãi thành viên</h5>
                                        <i class="bi bi-chevron-down fw-bolder text-success icon-active"></i>
                                    </a>
                                </div>
                                <div class="collapse" id="promotion-member">
                                    <div class="card border-0 mt-1">
                                        <!-- Nav tabs -->
                                        <ul class="nav nav-tabs nav-tabs-custom">
                                            <li class="nav-item nav-item-custom">
                                                <a class="nav-link nav-link-custom active" data-bs-toggle="tab"
                                                    href="#member">member</a>
                                            </li>
                                            <li class="nav-item nav-item-custom">
                                                <a class="nav-link nav-link-custom" data-bs-toggle="tab"
                                                    href="#vip">vip</a>
                                            </li>
                                            <li class="nav-item nav-item-custom">
                                                <a class="nav-link nav-link-custom" data-bs-toggle="tab"
                                                    href="#diamond">diamond</a>
                                            </li>
                                        </ul>

                                        <!-- Tab panes -->
                                        <div class="tab-content mt-2">
                                            <div class="tab-pane container active" id="member">
                                                <div class="">
                                                    <ul class="mt-2 list-unstyled">
                                                        <li>- Đổi 100 điểm đổi quà lấy ly nước size M</li>
                                                        <li>- Tặng 1 phần bánh trong tháng sinh nhật, quà sẽ được cập
                                                            nhật
                                                            vào ngày đầu tiên của tháng sinh nhật và hết hạn khi tháng
                                                            sinh
                                                            nhật kết thúc. Để nhận quà sinh nhật, tài khoản thành viên
                                                            phải
                                                            có phát sinh giao dịch và tổng điểm tối thiểu >= 100 điểm.
                                                        </li>
                                                        <li><a href="#" class="text-decoration-none text-success">Điều
                                                                khoản
                                                                & Điều kiện</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="tab-pane container" id="vip">
                                                <div class="">
                                                    <ul class="mt-2 list-unstyled">
                                                        <li>- Giảm giá 10% Thức uống và 3% Sản phẩm (trà & cà phê)</li>
                                                        <li>- Đổi 100 điểm đổi quà lấy ly nước size M</li>
                                                        <li>- Tặng 1 phần bánh trong tháng sinh nhật, quà sinh nhật được
                                                            cập
                                                            nhật vào ngày đầu tiên của tháng sinh nhật và hết hạn khi
                                                            tháng
                                                            sinh nhật kết thúc.</li>
                                                        <li><a href="#" class="text-decoration-none text-success">Điều
                                                                khoản
                                                                & Điều kiện</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="tab-pane container" id="diamond">
                                                <div class="">
                                                    <ul class="mt-2 list-unstyled">
                                                        <li>- Giảm giá 15% Thức uống và 5% Sản phẩm (trà & cà phê)</li>
                                                        <li>- Đổi 100 điểm đổi quà lấy ly nước size M</li>
                                                        <li>- Tặng 1 phần bánh trong tháng sinh nhật, quà sinh nhật được
                                                            cập
                                                            nhật vào ngày đầu tiên của tháng sinh nhật và hết hạn khi
                                                            tháng
                                                            sinh nhật kết thúc.</li>
                                                        <li><a href="#" class="text-decoration-none text-success">Điều
                                                                khoản
                                                                & Điều kiện</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex mb-3">
                        <div class="col-md-6 ps-md-0 mb-3">
                            <div class="card p-3">
                                <div class="d-inline-flex gap-1">
                                    <a class="btn border-0 p-0 w-100 d-flex justify-content-between"
                                        data-bs-toggle="collapse" href="#point" role="button" aria-expanded="false"
                                        aria-controls="point">
                                        <h5 class="text-success m-0">Điểm đổi quà</h5>
                                        <i class="bi bi-chevron-down fw-bolder text-success icon-active"></i>
                                    </a>
                                </div>
                                <div class="collapse mt-3" id="point">
                                    <div class="text-success fw-bold">Bạn có <span>0</span> điểm</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 pe-md-0 mb-3">
                            <div class="card p-3">
                                <div class="d-inline-flex gap-1">
                                    <a class="btn border-0 p-0 w-100 d-flex justify-content-between"
                                        data-bs-toggle="collapse" href="#history" role="button" aria-expanded="false"
                                        aria-controls="history">
                                        <h5 class="text-success m-0">Lịch sử giao dịch</h5>
                                        <i class="bi bi-chevron-down fw-bolder text-success icon-active"></i>
                                    </a>
                                </div>
                                <div class="collapse mt-3" id="history">
                                    <form class="row g-3">
                                        <div class="col-md-6">
                                            <label for="transaction" class="form-label">Loại giao dịch</label>
                                            <select id="transaction" class="form-select">
                                                <option selected>Tất cả</option>
                                                <option>Tích điểm</option>
                                                <option>Tiêu điểm</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="transactionDate" class="form-label">Thời gian</label>
                                            <input type="date" class="form-control" id="transactionDate">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 ps-md-0 mb-3">
                            <div class="card p-3">
                                <div class="d-inline-flex gap-1">
                                    <a class="btn border-0 p-0 w-100 d-flex justify-content-between"
                                        data-bs-toggle="collapse" href="#history-member" role="button"
                                        aria-expanded="false" aria-controls="history-member">
                                        <h5 class="text-success m-0">Lịch sử hạng thành viên</h5>
                                        <i class="bi bi-chevron-down fw-bolder text-success icon-active"></i>
                                    </a>
                                </div>
                                <div class="collapse mt-3" id="history-member">
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col"></th>
                                                <th scope="col">Hạng</th>
                                                <th scope="col">Điểm đầu kỳ</th>
                                                <th scope="col">Điểm cuối kỳ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td scope="row">02-04-2025</td>
                                                <td><i class="bi bi-record-circle-fill text-success"></i></td>
                                                <th class="text-success">Member</th>
                                                <td class="text-end">0</td>
                                                <td class="text-end">0</td>
                                            </tr>
                                            <tr>
                                                <td scope="row" class="text-danger">02-04-2026</td>
                                                <td><i class="bi bi-record-circle-fill text-danger"></i></td>
                                                <td class="text-danger"></td>
                                                <td class="text-center text-danger">Xét hạng</td>
                                                <td class="text-danger"></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                   


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
import SideBarAccount from '../../layouts/SideBarAccount.vue';
import ImgLogo from '../../assets/images/logo.png';
</script>

<style scoped>
/* banner + logo +card member */
.card-bg-member {
    height: 10rem;
    border-radius: 10px;
    background-image: url("../../assets/images/banner_member.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 7rem;
}

.card-bg-member img {
    width: 100%;
}

.card-detail {
    position: absolute;
    height: 10rem;
    border-radius: 10px;
    width: 28.5rem;
    box-shadow: 2px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 6px;
}

.card-logo {
    width: 5rem;
    height: 5rem;
    position: absolute;
    background-color: #fff;
    overflow: hidden;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 6px;
    z-index: 1;
}

.card-logo img {
    width: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
/* thanh trạng thái member */
.progress-wrapper {
    position: relative;
}

.progress {
    position: absolute;
    top: 50%;
    transform: translateY(-35%);
    height: 0.4rem;
    width: 100%;
    background-color: #e9ecef;
    border-radius: 10px;
}

.progress-bar {
    height: 100%;
    background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity));
    border-radius: 10px;
    width: 10%;
}

.icon-dot {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}

.icon-dot.start {
    left: 0%;
    color: green;
}

.icon-dot.middle {
    left: 40%;
    color: gray;
}

.icon-dot.end {
    left: 100%;
    color: gray;
}
/* nút mở các  */
.icon-active {
    transition: transform 0.3s ease;
}

a[aria-expanded="true"] .icon-active {
    transform: rotate(180deg);
}
/* tabs */
.nav-tabs-custom {
    margin: 0;
}

.nav-tabs-custom .nav-item-custom {
    flex: 1;
    text-align: center;
    margin: 5px 0 5px 0;
}

.nav-tabs-custom .nav-link-custom {
    color: gray;
    font-weight: bold;
    border: none;
    width: 100%;
    position: relative;
    text-transform: uppercase;
}

.nav-tabs-custom .nav-link-custom.active {
    color: green;
}

.nav-tabs-custom .nav-link-custom.active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: green;
}
/*  */


</style>