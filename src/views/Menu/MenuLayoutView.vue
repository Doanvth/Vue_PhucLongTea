<template>
  <div class="d-flex gap-1">
      <RouterLink to="/" class="fw-semibold d-block mb-2">Trang chủ</RouterLink>
      <span>/</span>
      <RouterLink class="fw-semibold d-block mb-2">Sản phẩm</RouterLink>
  </div>
  <div class="row">
    <div class="col-lg-2 sidebar mt-2">
      <div>
        <a class="menu-title fw-semibold  mb-2 d-block cursor-pointer" @click="toggleMenu(0)">Thức uống</a>
        <div v-if="expandedIndex === 0">
          <ul class="menu-list" v-for="item in categoriesNuocUong ">
            <li class="menu-item">
              <RouterLink :to="`/menu/${slugify(item)}`" class="menu-link">{{ item }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a class="menu-title mb-2 fw-semibold  d-block cursor-pointer" @click="toggleMenu(1)">Bánh</a>
        <div v-if="expandedIndex === 1">
          <ul class="menu-list" v-for="item in categoriesBanh" >
            <li class="menu-item">
              <RouterLink :to="`/menu/${slugify(item)}`" class="menu-link">{{ item }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-lg-10 product-list">
      <RouterView :key="$route.fullPath" />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref } from 'vue'

const categoriesNuocUong = [
  'Trà trái cây',
  'Trà sữa',
  'Kem silky',
  'Cà phê',
  'Đá xay',
  'Trà nguyên bản'
]

const categoriesBanh = [
  'Bánh lạnh',
  'Bánh cookies - croissant',
  'Bánh mì',
]

function slugify(text) {
  return text
    .normalize('NFD')                  
    .replace(/[\u0300-\u036f]/g, '')   
    .replace(/đ/g, 'd')                
    .replace(/Đ/g, 'D')               
    .replace(/\s+/g, '-')              
    .toLowerCase()
}

const expandedIndex = ref(null)
const route = useRoute();

function toggleMenu(index) {
  expandedIndex.value = expandedIndex.value === index ? null : index
}


</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.menu-title:hover {
  color: var(--primary-green);
}

.sidebar {
  border: 1px solid rgba(195, 193, 193, 0.696);
  border-radius: 10px;
  padding: 15px;
  height: 500px;
}

.menu-item{
  cursor: pointer;
}

.menu-link:hover{
  color: var(--primary-green)
}

</style>