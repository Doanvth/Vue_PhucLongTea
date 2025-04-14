<template>
    <div class="container mt-4">
        <h3 class="text-center my-4">Thêm sản phẩm mới</h3>

        <form @submit.prevent="addDrink" class="row g-3">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">SKU</label>
                    <input v-model.number="form.SKU" type="text" class="form-control" required />
                </div>

                <div class="mb-3">
                    <label class="form-label">Tên sản phẩm</label>
                    <input v-model="form.name" type="text" class="form-control" required @change="v$.value.name.$touch()" />
                    <span class="text-danger" v-if="v$.name.$error">Tên sản phẩm phải có ít nhất 3 ký tự</span>
                </div>

                <div class="mb-3">
                    <label class="form-label">Giá (mặc định)</label>
                    <input v-model.number="form.price" type="text" class="form-control" required @change="v$.value.price.$touch()" />
                    <span class="text-danger" v-if="v$.price.$error">Giá không hợp lệ</span>
                </div>

                <div class="mb-3">
                    <label class="form-label">Danh mục</label>
                    <select v-model="form.category" class="form-select" required>
                        <option v-for="cat in categories" :key="cat.id" :value="cat.name">{{ cat.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="">
                    <div class="mb-3">
                        <label class="form-label">Hình ảnh</label>
                        <input @change="handleFileUpload" type="file" class="form-control" />
                    </div>
                    <div v-if="form.image" class="">
                        <div v-if="form.image">
                            <div v-if="isImageLoading" class="text-muted text-primary">Loading...</div>

                            <img :src="form.image" @load="isImageLoading = false" alt="Uploaded Image"
                                class="img-thumbnail mt-2" width="200" height="200" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <label class="form-label">Mô tả</label>
                <textarea v-model="form.description" class="form-control" rows="3"></textarea>
            </div>

            <div class="col-md-8">
                <label class="form-label">Size</label>
                <div v-for="(s, index) in form.size" :key="index" class="d-flex gap-2 mb-2 align-items-center">
                    <input v-model="s.label" type="text" class="form-control w-auto"
                        placeholder="Label (VD: M, L, H)" />
                    <input v-model.number="s.adjusted_price" type="number" class="form-control w-auto"
                        placeholder="Giá điều chỉnh" />
                    <button type="button" class="btn btn-danger btn-sm" @click="removeSize(index)">X</button>
                </div>
                <button type="button" class="btn btn-outline-primary btn-sm mt-1 ms-2" @click="addSize">+ Thêm
                    size</button>
            </div>

            <div class="col-12 mt-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="toggleOptions" v-model="hasOption">
                    <label class="form-check-label" for="toggleOptions">Tùy chọn (tea, sugar, ice)</label>
                </div>
            </div>

            <div class="col-md-12" v-if="hasOption">
                <h5 class="mt-3">Tùy chọn</h5>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="tea" v-model="form.option.tea">
                    <label class="form-check-label" for="tea">Tea</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="sugar" v-model="form.option.sugar">
                    <label class="form-check-label" for="sugar">Sugar</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="ice" v-model="form.option.ice">
                    <label class="form-check-label" for="ice">Ice</label>
                </div>
            </div>

            <div class="col-12 mt-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="toggleProductInfo" v-model="hasProductInfo">
                    <label class="form-check-label" for="toggleProductInfo">Thông tin sản phẩm</label>
                </div>
            </div>

            <div class="col-md-12" v-if="hasProductInfo">
                <h5 class="mt-4">Thông tin sản phẩm</h5>

                <label class="form-label">Quy cách</label>
                <input v-model="form.product_information.quy_cach" type="text" class="form-control mb-2"
                    placeholder="VD: 500g, 330ml..." />

                <label class="form-label">Mô tả</label>
                <textarea v-model="form.product_information.mo_ta" class="form-control" rows="3"
                    placeholder="Mô tả chi tiết sản phẩm..."></textarea>
            </div>


            <div class="col-12 mt-4">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="toggleInstructions" v-model="hasInstructions">
                    <label class="form-check-label" for="toggleInstructions">Hướng dẫn sử dụng</label>
                </div>
            </div>

            <div class="col-md-12" v-if="hasInstructions">
                <h5 class="mt-4">Hướng dẫn sử dụng</h5>

                <label class="form-label">Bảo quản</label>
                <input v-model="form.instructions.bao_quan" type="text" class="form-control mb-2"
                    placeholder="VD: Nơi khô ráo, tránh ánh sáng" />

                <label class="form-label">Hạn sử dụng</label>
                <input v-model="form.instructions.han_su_dung" type="text" class="form-control mb-2"
                    placeholder="VD: 12 tháng kể từ NSX" />

                <label class="form-label">Cách pha / sử dụng</label>
                <textarea v-model="form.instructions.cach_pha_tra" class="form-control" rows="4"
                    placeholder="VD: Hướng dẫn pha cà phê hoặc cách dùng sản phẩm..."></textarea>
            </div>

            <div class="col-12 d-flex justify-content-end gap-3">
                <RouterLink to="/admin/product/list" class="btn btn-secondary" >Quay lại</RouterLink>
                <button class="btn btn-success" type="submit">Thêm sản phẩm</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router';
import useVuelidate from '@vuelidate/core'
import { required, minLength, numeric, url } from '@vuelidate/validators'

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

const rules = computed(() => ({
    SKU: { required },
    name: { required, minLength: minLength(3) },
    price: { required, numeric },
    image: { required, url },
    category: { required }
}))

const v$ = useVuelidate(rules, form)

const categories = ref([])

const fetchCategories = async () => {
    try {
        const res = await axios.get('http://localhost:3000/category')
        categories.value = res.data
    } catch (error) {
        console.error('Lỗi khi lấy categories:', error)
    }
}

const hasSize = ref(true)
const hasProductInfo = ref(false)
const hasInstructions = ref(false)
const hasOption = ref(true)

const addSize = () => {
    form.value.size.push({ id: null, label: '', adjusted_price: 0 })
}

const removeSize = (index) => {
    form.value.size.splice(index, 1)
}

const resetForm = () => {
    form.value = {
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
    }
    hasSize.value = true
    hasProductInfo.value = false
    hasInstructions.value = false
}

const addDrink = async () => {
    const isValid = await v$.value.$validate()
    if (!isValid) {
        alert("Vui lòng kiểm tra lại các thông tin!")
        return
    } 
    try {

        if (hasSize.value) {
            form.value.size = form.value.size.map((s, i) => ({ ...s, id: i + 1 }))
        } else {
            form.value.size = []
        }

        if (!hasProductInfo.value) {
            form.value.product_information = {}
        }

        if (!hasInstructions.value) {
            form.value.instructions = {}
        }

        if (!hasOption.value) {
            form.value.option = {}
        }
        const res = await axios.post('http://localhost:3000/products', form.value)
        alert('Thêm sản phẩm thành công!')
        console.log('Đã thêm:', res.data)

        resetForm()
    } catch (error) {
        console.error('Lỗi khi thêm sản phẩm:', error)
    }
}

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnt5lyoes/image/upload";
const UPLOAD_PRESET = "hotel_preset";
const isImageLoading = ref(false)
const handleFileUpload = async (event) => {
    isImageLoading.value = true
    const file = event.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
        const response = await axios.post(CLOUDINARY_URL, formData);
        form.value.image = response.data.secure_url;


    } catch (error) {
        console.log(error);
    }
};

onMounted(fetchCategories)
</script>

<style scoped></style>