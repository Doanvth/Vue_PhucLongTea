<template>
    <div>
        <div class="container-lg mt-3">
            <Breadcrumb title="Sản phẩm" />
            <div class="row g-4">
                <div class="col-md-6 d-flex justify-content-center justify-content-md-end">
                    <div class="card card-product-detail bg-secondary-subtle border-0 rounded-4">
                        <img :src="ImgTraDau" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-xl-5">
                    <h4 class="text-success">Trà Ô Long Dâu (<span>L</span>)</h4>
                    <div>SKU: 65000107</div>
                    <div class="badge text-bg-danger text-uppercase">MỚI - BST TEARAMISU</div>
                    <div class="d-flex justify-content-between mt-3">
                        <h4 class="text-success">65.000 đ</h4>
                        <QuantityButton :quantity="quantity" @updateQuantity="quantity = $event" />
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 mb-2">
                            <div class="text-success mb-2 fw-bold">Chọn kích cỡ</div>
                            <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="size" id="sizeM" autocomplete="off" value="Size M">
                                <label class="btn btn-outline-success rounded-2 p-0" for="sizeM">
                                    <div class="border-bottom py-2 px-4">Size M</div>
                                    <div class="border-top">-10.000 đ</div>
                                </label>

                                <input type="radio" class="btn-check" name="size" id="sizeL" autocomplete="off" value="Size L" checked>
                                <label class="btn btn-outline-success rounded-2 p-0" for="sizeL">
                                    <div class="border-bottom py-2 px-4">Size L</div>
                                    <div class="border-top">0 đ</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="text-success mb-2 fw-bold">Trà</div>
                            <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="tra" id="tra-it" autocomplete="off" 
                                    value="Trà: Ít">
                                <label class="btn btn-outline-success rounded-2" for="tra-it">Ít</label>

                                <input type="radio" class="btn-check" name="tra" id="tra-binhthuong"
                                    value="Trà: Bình Thường" autocomplete="off" checked>
                                <label class="btn btn-outline-success rounded-2" for="tra-binhthuong">Bình
                                    thường</label>

                                <input type="radio" class="btn-check" name="tra" id="tra-nhieu" autocomplete="off"
                                    value="Trà: Nhiều">
                                <label class="btn btn-outline-success rounded-2" for="tra-nhieu">Nhiều</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="text-success mb-2 fw-bold">Ngọt</div>
                            <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="ngot" id="ngot-it" autocomplete="off"
                                    value="Ngọt: Ít">
                                <label class="btn btn-outline-success rounded-2" for="ngot-it">Ít</label>

                                <input type="radio" class="btn-check" name="ngot" id="ngot-binhthuong"
                                    autocomplete="off" value="Ngọt: Bình Thường" checked>
                                <label class="btn btn-outline-success rounded-2" for="ngot-binhthuong">Bình
                                    thường</label>

                                <input type="radio" class="btn-check" name="ngot" id="ngot-nhieu" autocomplete="off"
                                    value="Ngọt: Nhiều">
                                <label class="btn btn-outline-success rounded-2" for="ngot-nhieu">Nhiều</label>
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="text-success mb-2 fw-bold">Đá</div>
                            <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="da" id="da-it" autocomplete="off"
                                    value="Đá: Ít">
                                <label class="btn btn-outline-success rounded-2" for="da-it">Ít</label>

                                <input type="radio" class="btn-check" name="da" id="da-binhthuong" autocomplete="off"
                                    value="Đá: Bình Thường" checked>
                                <label class="btn btn-outline-success rounded-2" for="da-binhthuong">Bình thường</label>

                                <input type="radio" class="btn-check" name="da" id="da-nhieu" autocomplete="off"
                                    value="Đá; Nhiều">
                                <label class="btn btn-outline-success rounded-2" for="da-nhieu">Nhiều</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-3">
                        <button class="btn btn-success px-5" @click="addToCart"><i class="bi bi-cart-plus-fill me-2"></i>Thêm vào giỏ hàng:
                            <span>{{ formatCurrency(65000 * quantity) }}</span></button>
                    </div>
                    <div class="d-none">
                        <div class="infomation mb-3">
                            <h3 class="text-success">Thông tin sản phẩm</h3>
                            <div class="">
                                - Quy cách: 150 g <br>
                                - Mô tả: Trà lài là sự kết hợp hoàn hảo giữa lá trà xanh chất lượng cao và hoa lài.
                                Trà được lên men và pha trộn với hoa lài,
                                quá trình này được lặp lại nhiều lần giúp cho trà có mùi thơm tự nhiên của hoa lài,
                                trà lài khi pha có màu vàng đẹp,
                                vị ngọt của hoa lài và vị đắng nhẹ của trà tạo nên cảm giác khoan khoái và thư giãn cho
                                người dùng.
                            </div>
                        </div>
                        <div class="mb-3">
                            <h3 class="text-success">Hướng dẫn sử dụng</h3>
                            <div class="">
                                - Bảo quản: Nơi khô thoáng <br>
                                - Hạn sử dụng: Xem trên bao bì <br>
                                - Cách pha trà: <br>
                                + Tráng ấm trà và tách trà bằng nước nóng <br>
                                + Dùng 100ml nước sôi rót vào ấm trà cùng với 5g trà. <br>
                                + Đợi khoảng 2 - 3 phút là có thể dùng được với hương vị tự nhiên của trà Phúc Long <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ButtonShoppingCard v-model:cartQuantity="cartQuantity" />

    </div>
</template>

<script setup>
import Breadcrumb from '../components/Breadcrumb.vue';
import ImgTraDau from '../assets/images/tra-o-long-dau.png'
import QuantityButton from '../components/QuantityButton.vue';
import ButtonShoppingCard from '../components/ButtonShoppingCard.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const quantity = ref(1);
const cartQuantity = ref(0); 
const user = ref(null);

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

// const checkLogin = () => {
//     user.value = JSON.parse(localStorage.getItem('user'));
//     if (!user.value) {
//         alert("Vui lòng đăng nhập!");
//         window.location.href = "/login";
//         return false;
//     }
//     return true;
// };


const addToCart = async () => {
   // if (!checkLogin()) return;

    const sizeElement = document.querySelector('input[name="size"]:checked');
    const teaElement = document.querySelector('input[name="tra"]:checked');
    const sugarElement = document.querySelector('input[name="ngot"]:checked');
    const iceElement = document.querySelector('input[name="da"]:checked');

    const newItem = { 
        id: crypto.randomUUID(), 
        name: "Trà Ô Long Dâu (L)", 
        price: 65000,
        quantity: quantity.value,
        size: sizeElement?.closest('.d-none') ? "" : sizeElement?.value || "Size L",
        tea: teaElement?.closest('.d-none') ? "" : teaElement?.value || "Bình thường",
        sugar: sugarElement?.closest('.d-none') ? "" : sugarElement?.value || "Bình thường",
        ice: iceElement?.closest('.d-none') ? "" : iceElement?.value || "Bình thường",
        totalPrice: quantity.value * 65000
    };

    try {
        const response = await axios.get('http://localhost:3000/orders');
        let existingOrders = response.data;
        // let userOrder = existingOrders.find(order => order.userId === user.value.id && order.status === "pending");
        let userOrder = existingOrders.find(order => order.userId === "bd13" && order.status === "pending");

        if (!userOrder|| userOrder.status !== 'pending') {
            // Nếu chưa có đơn hàng nào của user, tạo mới đơn hàng
            userOrder = {
                id: `ORDER${Date.now()}`,
                userId: "bd13",
                createdAt: new Date().toISOString(),
                status: "pending",
                cartItems: [newItem]
            };
            existingOrders.push(userOrder);
            
            await axios.post('http://localhost:3000/orders', userOrder);
        } else {
            // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
            const existingItem = userOrder.cartItems.find(item => 
                item.name === newItem.name &&
                item.size === newItem.size &&
                item.tea === newItem.tea &&
                item.sugar === newItem.sugar &&
                item.ice === newItem.ice
            );

            if (existingItem) {
                existingItem.quantity += newItem.quantity; // Nếu đã tồn tại, tăng số lượng
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            } else {
                userOrder.cartItems.push(newItem); // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng
                cartQuantity.value++;
            }
            
            await axios.put(`http://localhost:3000/orders/${userOrder.id}`, userOrder);
        }

        console.log("Đơn hàng đã cập nhật!");
        
    } catch (error) {
        console.error("Lỗi khi lưu giỏ hàng:", error);
    }
};



</script>

<style scoped>
.card-product-detail {
    width: 30rem;
    height: 30rem;
    position: relative;
}

.card-product-detail img {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>