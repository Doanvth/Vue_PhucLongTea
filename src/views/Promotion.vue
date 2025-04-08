<template>
    <div class="Promotion">
      <div class="container">
        <img src="../assets/281766778_5107603582642573_3033569044629085363_n-20241001062220.jpg" alt="Promotion" class="img-fluid">
        
        <div class="Breadcrumbs">
          <a class="text-success" href="index.html">Trang chủ</a> / <a class="text-black" href="promotions.html">Khuyến mãi</a>
        </div>
        
        <hr>
  
        <div class="row Promotion-items">
          <div class="col-md-3 d-flex align-items-stretch" v-for="product in currentProducts" :key="product.id">
            <div class="card border-success mb-3 d-flex flex-column w-100">
              <div class="card-body p-0 overflow-hidden d-flex align-items-center justify-content-center">
                <div class="image-container">
                  <img :src="getImage(product.image)" alt="Product" class="card-img">
                </div>
              </div>
              <div class="card-footer Promotion-Views bg-transparent border-success">   
                <i class="bi bi-eye"></i> {{ product.views }}
              </div>
              <div class="card-footer Promotion-title flex-grow-1">
                {{ product.title }}
              </div>
            </div>
          </div>
        </div>
  
        
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item " :class="{ disabled: currentPage === 1 }">
      <a class="page-link shadow-none" href="#" @click.prevent="goToPage(currentPage - 1)">Previous</a>
    </li>
    <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
      <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
    </li>
    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
      <a class="page-link shadow-none" href="#" @click.prevent="goToPage(currentPage + 1)">Next</a>
    </li>
  </ul>
</nav>

      </div>
    </div>
  </template>
  

  <script setup>
  import { ref, onMounted, computed } from 'vue';
  
  const products = ref([]);
  const currentPage = ref(parseInt(new URLSearchParams(window.location.search).get('p')) || 1); // Lấy trang từ URL
  const itemsPerPage = 12;
  
  const getImage = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products?_start=0&_limit=100');
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const totalPages = computed(() => {
    const total = products.value.length;
    return Math.ceil(total / itemsPerPage);
  });
  
  const currentProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.value.slice(startIndex, endIndex);
  });
  

  const goToPage = (page) => {
    if (page < 1 || page > totalPages.value) return;
    currentPage.value = page;
    
  
    const url = new URL(window.location);
    url.searchParams.set('p', page);
    window.history.pushState({}, '', url); 
  };
  
  onMounted(() => {
    fetchProducts();
  });
  </script>
  

  

<style scoped>
.Promotion {
    img {
        width: 100%;
    }

    a {
        font-size: 14px;
        text-decoration: none;
        margin-bottom: 30px;
    }

    .Breadcrumbs {
        margin-top: 40px;
    }
}

.card {
    max-height: fit-content;
    max-width: fit-content;
}
.Promotion-Views{
display: flex;
justify-content: end;
}





.image-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    object-position: center;
}


.Promotion-title {
    font-size: 17px;
    max-height: 55px;
    margin-bottom: 20px;
  text-transform: uppercase;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; 
  white-space: normal;
 
}
.pagination {
  margin-top: 20px;
}

.page-item.disabled .page-link {
  pointer-events: none;
}

.page-item.active .page-link {
  background-color: #28a745;
  border-color: #28a745;
}


</style>