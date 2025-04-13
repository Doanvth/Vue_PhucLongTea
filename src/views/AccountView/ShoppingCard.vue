<template>
    <div class="container-lg mt-3">
        <Breadcrumb title="Thanh toán" />
        <div class="row g-3 flex-lg-row-reverse">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header bg-white">
                        <div class="text-success fs-4 fw-bold">
                            <i class="bi bi-bag-check-fill me-2"></i>
                            <span>Giỏ hàng của bạn ({{ totalProductTypes }} món)</span>
                        </div>
                    </div>
                    <div class="card-body py-0">
                        <ol class="list-group list-group-flush border-0">
                            <template v-for="order in orders" :key="order.id">
                                <template v-for="item in order.cartItems" :key="item.id">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-start p-0 gap-3 py-3">
                                        <div class="col-auto">
                                            <div class="card card-product bg-secondary-subtle border-0">
                                                <img src="" alt="">
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="text-success fw-bold">{{ item.name }}</div>
                                            <div>{{ item.size }}, {{ item.tea }}, {{ item.sugar }}, {{ item.ice }}</div>
                                            <div class="text-success fw-bold">{{ formatCurrency(item.totalPrice) }}
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="card card-product border-0 d-flex justify-content-between">
                                                <div class="mb-3 justify-content-end d-flex gap-1">
                                                    <!-- <button class="btn btn-outline-success"><i
                                                            class="bi bi-pencil"></i></button> -->
                                                    <button class="btn btn-outline-danger" data-bs-toggle="modal"
                                                        data-bs-target="#deleteProduct"
                                                        @click="confirmDelete(item.id)"><i
                                                            class="bi bi-trash"></i></button>
                                                </div>
                                                <QuantityButton :quantity="item.quantity" :id="item.id"
                                                    @updateQuantity="updateQuantity(item.id, $event)" />
                                            </div>
                                        </div>
                                    </li>
                                </template>
                            </template>
                        </ol>
                    </div>
                    <div class="card-footer bg-white">
                        <ol class="list-group list-group-flush py-3">
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-3">
                                <div class="text-success fs-5">Thông tin thanh toán</div>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-2">
                                <span>Tổng tiền tạm tính</span>
                                <span>{{ formatCurrency(totalAmount) }}</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-2">
                                <span>Phí vận chuyển</span>
                                <span>30.000 đ</span>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-2">
                                <span>Mã giảm giá</span>
                                <a href="" class="text-success icon-link icon-link-hover" data-bs-toggle="modal"
                                    data-bs-target="#code">
                                    <i class="bi bi-chevron-right fs-5"></i></a>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start border-0 p-0">
                                <span>Tổng tiền (Đã có VAT)</span>
                                <span class="text-success fw-bold">{{ formatCurrency(totalAmount + 30000) }}</span>
                            </li>
                        </ol>
                        <ol class="list-group list-group-flush py-3">
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-3">
                                <div class="text-success fs-5">Phương thức thanh toán</div>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-2">
                                <div class="form-check">
                                    <input class="form-check-input check-input-custom" type="radio" name="paymentMethod"
                                        id="bank" checked>
                                    <label class="form-check-label" for="bank">Thẻ ngân hàng / Thẻ tín dụng / Ví điện
                                        tử</label>
                                </div>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-2">
                                <div class="form-check">
                                    <input class="form-check-input check-input-custom" type="radio" name="paymentMethod"
                                        id="momo">
                                    <label class="form-check-label" for="momo">Ví MoMo</label>
                                </div>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-2">
                                <div class="form-check">
                                    <input class="form-check-input check-input-custom" type="radio" name="paymentMethod"
                                        id="zaloPay">
                                    <label class="form-check-label" for="zaloPay">Ví ZaloPay</label>
                                </div>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 mb-2">
                                <div class="form-check">
                                    <input class="form-check-input check-input-custom" type="radio" name="paymentMethod"
                                        id="shopeePay">
                                    <label class="form-check-label" for="shopeePay">Ví ShopeePay</label>
                                </div>
                            </li>
                            <li
                                class="list-group-item d-flex justify-content-between align-items-start border-0 p-0 my-2">
                                <div class="form-check">
                                    <input class="form-check-input check-input-custom" type="checkbox" value=""
                                        id="flexCheckChecked" v-model="isAgreed">
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Tôi đã đọc, hiểu và đồng ý với tất cả các
                                        <a href="" class="text-success fst-italic">
                                            điều khoản, điều kiện và chính sách</a>
                                        liên quan
                                    </label>
                                </div>
                            </li>
                            <button class="btn btn-success text-uppercase fw-bold py-2 mt-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#confirmPayment"
                                    :disabled="isDisabled"
                                    >tiến hành thanh toán</button>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs nav-tabs-custom">
                        <li class="nav-item nav-item-custom">
                            <a class="nav-link nav-link-custom active" data-bs-toggle="tab" href="#home">giao hàng</a>
                        </li>
                        <li class="nav-item nav-item-custom">
                            <a class="nav-link nav-link-custom" data-bs-toggle="tab" href="#menu1">đến lấy</a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane container active" id="home">
                            <ol class="list-group list-group-flush py-3">
                                <li class="list-group-item d-flex justify-content-between align-items-start border-0">
                                    <div class="ms-2 me-auto">
                                        <div class="text-success fs-5"><i class="bi bi-geo-alt me-2"></i>Địa chỉ</div>
                                    </div>
                                    <a href="" class="text-success icon-link icon-link-hover" data-bs-toggle="modal"
                                        data-bs-target="#address">
                                        <i class="bi bi-chevron-right fs-5"></i></a>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start border-0">
                                    <div class="ms-2 me-auto">
                                        <div class="text-success fs-5">Nguyễn Mộc Toàn</div>
                                        <span class="me-1">Số điện thoại :</span><span>0382035448</span>
                                    </div>
                                    <a href="" class="text-success icon-link icon-link-hover" data-bs-toggle="modal"
                                        data-bs-target="#info">
                                        <i class="bi bi-chevron-right fs-5"></i></a>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start border-0">
                                    <div class="ms-2 me-auto">
                                        <div class="text-success fs-5">Thời gian nhận hàng</div>
                                        <span>Hết thời gian giao hàng trong ngày</span>
                                    </div>
                                    <a href="" class="text-success icon-link icon-link-hover" data-bs-toggle="modal"
                                        data-bs-target="#time">
                                        <i class="bi bi-chevron-right fs-5"></i></a>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start border-0">
                                    <div class="ms-2 me-auto">
                                        <div class="text-success fs-5">Ghi chú cho cửa hàng</div>
                                        <span>Ghi chú:</span><span> ... </span>
                                    </div>
                                    <a href="" class="text-success icon-link icon-link-hover" data-bs-toggle="modal"
                                        data-bs-target="#note">
                                        <i class="bi bi-chevron-right fs-5"></i></a>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-start border-0">
                                    <div class="ms-2 me-auto">
                                        <div class="text-success fs-5">Thông tin xuất hóa đơn VAT</div>
                                        <ul class="mt-2 list-unstyled">
                                            <li>- Vui lòng xem hướng dẫn xuất phiếu GTGT (VAT) từ hóa đơn giấy đi kèm
                                                món nước.</li>
                                            <li>- Trường hợp không nhận được hóa đơn giấy, vui lòng liên hệ Hotline
                                                CSKH: 1900234518 (nhấn phím 1) hoặc Fanpage: Phuc Long Coffee & Tea từ
                                                8h00 - 17h45 để được hỗ trợ nhé.</li>
                                        </ul>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div class="tab-pane container fade" id="menu1">...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Address-->
    <div class="modal fade" id="address" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5 text-success" id="staticBackdropLabel">Thay đổi địa chỉ đơn hàng</h1>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body pt-0">
                    <form action="">
                        <div class="input-group mb-3">
                            <button
                                class="btn btn-outline-secondary border-0 bg-secondary-subtle rounded-start-pill text-black ps-3"
                                type="button" id="button-addon2"><i class="bi bi-search"></i></button>
                            <input type="text"
                                class="form-control rounded-end-pill shadow-none border-0 bg-secondary-subtle pe-3"
                                placeholder="Vui lòng nhập địa chỉ" aria-label="Recipient's username"
                                aria-describedby="button-addon2">
                        </div>
                    </form>
                    <a href="#" class="text-success align-items-center d-flex text-decoration-none"><i
                            class="bi bi-crosshair fs-3 me-2"></i>
                        <h6 class="m-0">Vị trí hiện tại của quý khách</h6>
                    </a>
                </div>
                <div class="modal-footer border-5">
                    <p class="fst-italic text-decoration-underline"><strong>Lưu ý: </strong>thay đổi địa chỉ giao hàng
                        có thể thay đổi cước phí giao hàng hoặc không thể giao hàng nếu không có cửa hàng gần địa chỉ đã
                        chọn.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Info-->
    <div class="modal modal-sm fade" id="info" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5 text-success" id="staticBackdropLabel">Thông tin khách hàng</h1>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body pt-0">
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control border-success shadow-none" id="floatingName"
                                placeholder="Họ & tên *">
                            <label for="floatingName">Họ & tên *</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control border-success shadow-none" id="floatingName"
                                placeholder="Số điện thoại *">
                            <label for="floatingName">Số điện thoại *</label>
                        </div>
                        <button class="btn btn-success text-uppercase w-100 py-3">áp dụng</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Delivery time-->
    <div class="modal fade" id="time" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5 text-success" id="staticBackdropLabel">Thời gian nhận hàng</h1>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body pt-0">
                    <form action="" class="row g-3">
                        <div class="col-md-6">
                            <label for="date" class="form-label">Ngày</label>
                            <input type="date" class="form-control" id="date">
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Thời gian</label>
                            <select id="inputState" class="form-select">
                                <option selected>12:00</option>
                                <option>17:00</option>
                                <option>20:00</option>
                            </select>
                        </div>
                        <button class="btn btn-success text-uppercase w-100 py-2">xác nhận</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Note-->
    <div class="modal modal-sm fade" id="note" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5 text-success" id="staticBackdropLabel">Ghi chú cho cửa hàng</h1>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body pt-0">
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control border-success shadow-none" id="floatingName"
                                placeholder="Ghi chú *">
                            <label for="floatingName">Ghi chú *</label>
                        </div>
                        <button class="btn btn-success text-uppercase w-100 py-3">cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Code-->
    <div class="modal modal-sm fade" id="code" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5 text-success" id="staticBackdropLabel">Ghi chú cho cửa hàng</h1>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body pt-0">
                    <form action="">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control border-success shadow-none" id="floatingName"
                                placeholder="Mã giảm giá *">
                            <label for="floatingName">Mã giảm giá *</label>
                        </div>
                        <button class="btn btn-success text-uppercase w-100 py-3">áp dụng</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xác Nhận Xoá -->
    <div class="modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="payment">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-uppercase" id="payment">Xác nhận xoá sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xoá sản phẩm này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        @click="deleteItemById">Xoá</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xác Nhận thanh toán -->
    <div class="modal fade" id="confirmPayment" tabindex="-1" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-uppercase" id="exampleModalLabel">Xác nhận thanh toán</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn thanh toán đơn hàng này?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        @click="Payment">Thanh Toán</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import QuantityButton from '../../components/QuantityButton.vue';
import Breadcrumb from '../../components/Breadcrumb.vue';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const orders = ref([]);
const user = localStorage.getItem('user');
const isAgreed = ref(false);

const hasProduct = computed(() => {
    return orders.value.some(order => order.cartItems.length > 0);
});

const isDisabled = computed(() => {
    return !isAgreed.value || !hasProduct.value;
});

const totalProductTypes = computed(() => {
    const allItems = orders.value.flatMap(order => order.cartItems || []);
    const uniqueIds = new Set(allItems.map(item => item.id));
    return uniqueIds.size;
});

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const fetchOrders = async () => {
    try {
        const response = await axios.get('http://localhost:3000/orders');

        // Lọc đơn hàng của user đăng nhập 
        orders.value = response.data.filter(order => order.userId === "bd13" && order.status === "pending");

    } catch (error) {
        console.error("Lỗi khi tải đơn hàng:", error);
    }
};

onMounted(fetchOrders);

const updateQuantity = (id, newQuantity) => {
    // Tìm đơn hàng của user
    const order = orders.value.find(order => order.cartItems.some(item => item.id === id));

    if (order) {
        // Tìm sản phẩm theo id
        const itemIndex = order.cartItems.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            order.cartItems[itemIndex].quantity = newQuantity;
            order.cartItems[itemIndex].totalPrice = order.cartItems[itemIndex].quantity * order.cartItems[itemIndex].price;
        }

        axios.put(`http://localhost:3000/orders/${order.id}`, order)
            .then(() => console.log("Đã cập nhật số lượng sản phẩm!"))
            .catch(error => console.error("Lỗi khi cập nhật số lượng:", error));
    }
};

const totalAmount = computed(() => {
    return orders.value.reduce((orderTotal, order) => {
        return orderTotal + order.cartItems.reduce((itemTotal, item) => {
            return itemTotal + item.totalPrice;
        }, 0);
    }, 0);
});

const selectedItemId = ref(null);

const confirmDelete = (id) => {
    selectedItemId.value = id;
};

const deleteItemById = async () => {
    const id = selectedItemId.value;

    const order = orders.value.find(order => order.cartItems.some(item => item.id === id));

    if (order) {
        order.cartItems = order.cartItems.filter(item => item.id !== id);

        try {
            await axios.put(`http://localhost:3000/orders/${order.id}`, order);
            console.log("Đã xoá sản phẩm!");

            selectedItemId.value = null;
            fetchOrders();
        } catch (error) {
            console.error("Lỗi khi xoá sản phẩm:", error);
        }
    }
};

const Payment = async () => {
    try {
        const pendingOrders = orders.value.filter(order => order.userId === "bd13" && order.status === "pending");

        for (let order of pendingOrders) {
            const updatedOrder = {
                status: "paid",  
            };

            await axios.patch(`http://localhost:3000/orders/${order.id}`, updatedOrder);
        }

        fetchOrders();

    } catch (error) {
        console.error("Lỗi khi thanh toán:", error);
        alert("Có lỗi xảy ra trong quá trình thanh toán!");
    }
};


</script>

<style scoped>
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

.card-product {
    width: 100px;
    height: 100px;
    position: relative;
}

.card-product img {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.check-input-custom {
    border: 2px solid green;
    accent-color: green;
}

.check-input-custom:focus {
    box-shadow: none;
}

.check-input-custom:checked {
    background-color: green;
    border-color: green;
}

.check-input-custom:not(:checked) {
    border-color: green;
}
</style>