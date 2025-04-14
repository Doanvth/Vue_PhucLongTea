<template>
  <div>
    <h5 class="my-3 text-success">{{ slugToName(category) }}</h5>
    <div class="row">
      <div v-for="item in products" class="col-lg-3 col-md-6 mb-3">
        <div class="card">
          <div class="bg-light d-flex justify-content-center">
            <img :src="item.image" class="mx-auto my-5" alt="..." height="150px" >
          </div>
          <div class="card-body">
            <RouterLink :to="`/product-detail/${item.id}`" :title="item.name" class="text-success text-decoration-none fw-semibold text-truncate d-inline-block" style="max-width: 200px;">{{ item.name }}</RouterLink>
            <p class="text-success fw-bold m-0">{{ formatPrice(item.price) }}</p>
          </div>
          <div class="card-button d-flex justify-content-center mb-3">
            <button class="btn btn-success w-75 fw-semibold">
              <i class="bi bi-cart-plus"></i>
              Đặt mua
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import axios from 'axios'

const API_URL = "http://localhost:3000/products"
const route = useRoute()
const category = ref(route.params.category)

const products = ref([])

const getProduct = async () => {
  try {
    const response = await axios.get(API_URL);
    response.data.forEach(item => {
      if (item.category === slugToName(category.value)) {
        products.value.push(item)
      }
    })

  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error)
  }
}

onMounted(getProduct)

const originalNames = [
  'Trà trái cây',
  'Trà sữa',
  'Kem silky',
  'Cà phê',
  'Đá xay',
  'Trà nguyên bản',
  'Bánh lạnh',
  'Bánh cookies - croissant',
  'Bánh mì'
]

function slugToName(slug) {
  return originalNames.find(name => slugify(name) === slug) || slug
}

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

   //format price
   const formatPrice = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

</script>
<style></style>