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
                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="text-success">Lịch sử đơn hàng</h5>
                            </div>
                            <div class="col-md-6">
                                <form action="">
                                    <div class="input-group mb-3">
                                        <button
                                            class="btn btn-outline-secondary border-0 bg-secondary-subtle rounded-start-pill text-black ps-3"
                                            type="button" id="button-addon2"><i class="bi bi-search"></i></button>
                                        <input type="text"
                                            class="form-control rounded-end-pill shadow-none border-0 bg-secondary-subtle pe-3"
                                            placeholder="Tìm kiếm theo mã đơn hàng" aria-label="Recipient's username"
                                            aria-describedby="button-addon2">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="card border-0">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs nav-tabs-custom">
                                    <li class="nav-item nav-item-custom">
                                        <a class="nav-link nav-link-custom active" data-bs-toggle="tab"
                                            href="#chothanhtoan">chờ thanh toán</a>
                                    </li>
                                    <li class="nav-item nav-item-custom">
                                        <a class="nav-link nav-link-custom" data-bs-toggle="tab" href="#donhangmoi">đơn
                                            hàng mới</a>
                                    </li>
                                    <li class="nav-item nav-item-custom">
                                        <a class="nav-link nav-link-custom" data-bs-toggle="tab" href="#dangxuly">đang
                                            xử lý</a>
                                    </li>
                                    <li class="nav-item nav-item-custom">
                                        <a class="nav-link nav-link-custom" data-bs-toggle="tab" href="#danggiao">đang
                                            giao</a>
                                    </li>
                                    <li class="nav-item nav-item-custom">
                                        <a class="nav-link nav-link-custom" data-bs-toggle="tab" href="#hoanthanh">hoàn
                                            thành</a>
                                    </li>
                                    <li class="nav-item nav-item-custom">
                                        <a class="nav-link nav-link-custom" data-bs-toggle="tab" href="#huy">huỷ</a>
                                    </li>
                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content mt-2">
                                    <!-- tab chờ thanh toán -->
                                    <div class="tab-pane container active" id="chothanhtoan">
                                        <div class="py-5 text-center">
                                            <h4 class="text-success">Không có đơn hàng nào</h4>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination rounded-circle gap-2">
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Previous">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-left"></i></span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item active"><a
                                                            class="page-link shadow-none rounded-circle" href="#">1</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">2</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-right"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <!-- tab đơn hàng mới -->
                                    <div class="tab-pane container" id="donhangmoi">
                                        <div class="py-5 text-center">
                                            <h4 class="text-success">Không có đơn hàng nào</h4>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination rounded-circle gap-2">
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Previous">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-left"></i></span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item active"><a
                                                            class="page-link shadow-none rounded-circle" href="#">1</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">2</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-right"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <!-- tab đang xử lý -->
                                    <div class="tab-pane container" id="dangxuly">
                                        <div class="py-5 text-center">
                                            <h4 class="text-success">Không có đơn hàng nào</h4>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination rounded-circle gap-2">
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Previous">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-left"></i></span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item active"><a
                                                            class="page-link shadow-none rounded-circle" href="#">1</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">2</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-right"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <!-- tab đang giao -->
                                    <div class="tab-pane container" id="danggiao">
                                        <div class="py-5 text-center">
                                            <h4 class="text-success">Không có đơn hàng nào</h4>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination rounded-circle gap-2">
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Previous">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-left"></i></span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item active"><a
                                                            class="page-link shadow-none rounded-circle" href="#">1</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">2</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-right"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <!-- tab hoàn thành -->
                                    <div class="tab-pane container" id="hoanthanh">
                                        <div class="py-5 text-center">
                                            <h4 class="text-success">Không có đơn hàng nào</h4>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination rounded-circle gap-2">
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Previous">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-left"></i></span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item active"><a
                                                            class="page-link shadow-none rounded-circle" href="#">1</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">2</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-right"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <!-- tab huỷ -->
                                    <div class="tab-pane container" id="huy">
                                        <div class="py-5 text-center">
                                            <h4 class="text-success">Không có đơn hàng nào</h4>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination rounded-circle gap-2">
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Previous">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-left"></i></span>
                                                        </a>
                                                    </li>
                                                    <li class="page-item active"><a
                                                            class="page-link shadow-none rounded-circle" href="#">1</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">2</a>
                                                    </li>
                                                    <li class="page-item"><a
                                                            class="page-link shadow-none rounded-circle" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link shadow-none rounded-circle" href="#"
                                                            aria-label="Next">
                                                            <span aria-hidden="true"><i
                                                                    class="bi bi-chevron-right"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
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

<style scoped>
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
    font-size: 0.8rem;
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
</style>