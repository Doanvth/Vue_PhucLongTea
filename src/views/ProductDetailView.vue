<template>
    <div>
        <div class="container-lg mt-3">
            <Breadcrumb title="Sản phẩm" />
            <div class="row g-4">
                <div class="col-md-6 d-flex justify-content-center justify-content-md-end">
                    <div class="card card-product-detail bg-secondary-subtle border-0 rounded-4">
                        <img :src="form.image" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-xl-5">
                    <h4 class="text-success">{{ form.name }}</h4>
                    <div>SKU: {{ form.SKU }} </div>
                    <div class="badge text-bg-danger text-uppercase">{{ form.description }}</div>
                    <div class="d-flex justify-content-between mt-3">
                        <h4 class="text-success">{{ formatCurrency(form.price) }}</h4>
                        <QuantityButton :quantity="quantity" @updateQuantity="quantity = $event" />
                    </div>
                    <div  class="row mb-3">
                        <div v-if="hasSize" class="col-12 mb-2">
                            <div class="text-success mb-2 fw-bold">Chọn kích cỡ</div>
                            <div class="btn-group gap-3" role="group" aria-label="Basic radio toggle button group">
                               <div v-for="size in form.size">
                                   <input type="radio" class="btn-check" name="size" :id="size.label" autocomplete="off" :value="`Size ${size.lable}`" checked>
                                   <label class="btn btn-outline-success rounded-2 p-0" :for="size.label"  >
                                       <div class="border-bottom py-2 px-4">Size {{ size.label }}</div>
                                       <div class="border-top" id="price" value="size.adjusted_price"  @click="getPrice(), giam_gia = size.adjusted_price" >{{ formatCurrency(size.adjusted_price) }}</div>
                                   </label>
                               </div>

                

                                <!-- <input type="radio" class="btn-check" name="size" id="sizeL" autocomplete="off" value="Size L" checked>
                                <label class="btn btn-outline-success rounded-2 p-0" for="sizeL">
                                    <div class="border-bottom py-2 px-4">Size L</div>
                                    <div class="border-top">0 đ</div>
                                </label> -->
                            </div>
                        </div>
                        <div v-if="hasOption">
                            <div v-if="form.option.tea" class="col-12 mb-2">
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
                            <div v-if="form.option.sugar" class="col-12 mb-2">
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
                            <div v-if="form.option.ice" class="col-12 mb-2">
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
                    </div>
                    <div class="d-flex justify-content-center my-3">
                        <button class="btn btn-success px-5" @click="addToCart"><i class="bi bi-cart-plus-fill me-2"></i>Thêm vào giỏ hàng:
                            <span>{{ formatCurrency((form.price+ giam_gia) * quantity) }}</span></button>
                    </div>
                    <div >
                        <div v-if="hasProductInfo" class="infomation mb-3">
                            <h3 class="text-success">Thông tin sản phẩm</h3>
                            <div class="">
                                <p>Quy cách: {{ form.product_information.quy_cach }}</p>
                                <div> 
                                    Mô tả:
                                    {{ form.product_information.mo_ta }}
                                </div>
                            </div>
                        </div>
                        <div v-if="hasInstructions" class="mb-3">
                            <h3 class="text-success">Hướng dẫn sử dụng</h3>
                            <div class="">
                                <p>Bảo quản: {{ form.instructions.bao_quan }}</p>
                                <p>Hạn sử dụng: {{ form.instructions.han_su_dung }}</p>
                                <p>Cách pha trà: <br>  <p v-html="form.instructions.cach_pha_tra"></p></p>
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
import { useRoute, useRouter } from 'vue-router'

const quantity = ref(1);
const cartQuantity = ref(0); 
const user = ref(null);
const form = ref({
    SKU: '',
    image: '',
    name: '',
    price: null,
    category: '',
    description: '',
    size: [],
    option: {
        tea: false,
        sugar: false,
        ice: false
    },
    product_information: {
        quy_cach: '',
        mo_ta: ''
    },
    instructions: {
        bao_quan: '',
        han_su_dung: '',
        cach_pha_tra: ''
    }
})

const hasSize = ref(true)
const hasOption = ref(true)
const hasProductInfo = ref(false)
const hasInstructions = ref(false)
const categories = ref([])
const route = useRoute()
const router = useRouter()

const giam_gia = ref('');
const getPrice = () => {
    console.log(giam_gia.value);  
}

const fetchProduct = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/products/${route.params.id}`)
        const product = res.data

        form.value = {
            ...form.value,
            ...product,
            option: product.option || { tea: false, sugar: false, ice: false },
            size: product.size || [],
            product_information: product.product_information || {
                quy_cach: '',
                mo_ta: ''
            },
            instructions: product.instructions || {
                bao_quan: '',
                han_su_dung: '',
                cach_pha_tra: ''
            }
        }

        console.log(form.value)

        hasOption.value = !!(product.option && Object.keys(product.option).length > 0)
        hasSize.value = !!(product.size && product.size.length > 0)
        hasProductInfo.value = !!(product.product_information && Object.keys(product.product_information).length > 0)
        hasInstructions.value = !!(product.instructions && Object.keys(product.instructions).length > 0)

    } catch (error) {
        console.error('Lỗi khi lấy chi tiết sản phẩm:', error)
    }
}

onMounted(fetchProduct)

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};

const checkLogin = () => {
    user.value = sessionStorage.getItem('user');
    console.log(user.value);
    
    if (!user.value) {
        alert("Vui lòng đăng nhập!");
        window.location.href = "/auth/login";
        return false;
    }
    return true;
};


const addToCart = async () => {
   if (!checkLogin()) return;

    const sizeElement = document.querySelector('input[name="size"]:checked');
    const teaElement = document.querySelector('input[name="tra"]:checked');
    const sugarElement = document.querySelector('input[name="ngot"]:checked');
    const iceElement = document.querySelector('input[name="da"]:checked');

    const newItem = { 
        id: form.value.id, 
        name: form.value.name, 
        image: form.value.image,
        price: form.value.price + giam_gia.value,
        quantity: quantity.value,
        size: sizeElement?.closest('.d-none') ? "M" : sizeElement?.value || "Size L",
        tea: teaElement?.closest('.d-none') ? "" : teaElement?.value || "Bình thường",
        sugar: sugarElement?.closest('.d-none') ? "" : sugarElement?.value || "Bình thường",
        ice: iceElement?.closest('.d-none') ? "" : iceElement?.value || "Bình thường",
        totalPrice: quantity.value * ( form.value.price + giam_gia.value)
    };

    try {
        const response = await axios.get('http://localhost:3000/orders');
        let existingOrders = response.data;
        let userOrder = existingOrders.find(order => order.userId === user.value && order.status === "pending");
        // let userOrder = existingOrders.find(order => order.userId === "bd13" && order.status === "pending");

        if (!userOrder|| userOrder.status !== 'pending') {
            // Nếu chưa có đơn hàng nào của user, tạo mới đơn hàng
            userOrder = {
                id: `ORDER${Date.now()}`,
                userId: user.value,
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