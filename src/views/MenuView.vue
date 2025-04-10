<template>
    <div class="row">
      <div class="col-lg-3 sidebar">
        <a class="fw-semibold d-block mb-2">Tất cả</a>
  
        <div v-for="(item, index) in menuData.child" >
          <a class="menu-title mb-2 d-block cursor-pointer" @click="toggleMenu(index)">
            {{ item.title }}
          </a>
          <div v-if="expandedIndex === index && item.child?.length">
            <RecursiveSideBar :child="item.child" />
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <!-- Sản phẩm ở đây -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import RecursiveSideBar from '../components/RecursiveSideBar.vue'
  
  const API_URL_MENU = 'http://localhost:3000/menu'
  const menuData = ref([])
  const expandedIndex = ref(null)
  
  function toggleMenu(index) {
    expandedIndex.value = expandedIndex.value === index ? null : index
  }
  
  const getMenu = async () => {
    try {
      const response = await axios.get(API_URL_MENU)
      menuData.value = response.data
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu menu:', error)
    }
  }
  
  onMounted(getMenu)
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
  }
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  