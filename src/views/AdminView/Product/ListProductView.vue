<template>
    <main>
        <div class="py-3 mb-2">
            <div>
                <RouterLink to="/admin/product/create" class="btn btn-success px-3">
                    <i class="bi bi-plus-square me-1"></i>
                    Add Product
                </RouterLink>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center gap-4 w-50 mb-3">
            <input type="text" class="form-control w-100" v-model="searchQuery" placeholder="Search by name product">
        </div>
        <div class="list-user">
            <table class="table-design w-100">
                <thead>
                    <tr>
                        <th scope="col">SKU</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col" class="">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in VisiblePagenation">
                        <td>{{ item.SKU }}</td>
                        <td>
                            <div class="py-2">
                                <img :src="item.image" alt="" height="100px">
                            </div>
                        </td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>
                            <div class="action btn d-flex gap-4">
                                <a @click="editProducts(item.id)" class="btn btn-warning text-dark px-2 py-1 rounded"><i
                                        class="bi bi-pencil"></i></a>
                                <a @click="deleteProduct(item.id)"
                                    class="btn btn-danger text-light px-2 py-1 rounded"><i class="bi bi-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div v-if="VisiblePagenation.length <= 0">
                <p class="text-danger text-center py-2">There are no products yet</p>
            </div>

            <nav aria-label="Page navigation" class="d-flex justify-content-center mt-3"
                v-if="VisiblePagenation.length > 0">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" @click="changePage(currentPage - 1)"
                            :disabled="currentPage == 1">&laquo;</button>
                    </li>
                    <li class="page-item" v-for="pageNumber in VisiblePageNumbers"
                        :class="{ active: currentPage == pageNumber || currentPage == '...' }">
                        <button class="page-link" @click=" changePage(pageNumber)"> {{ pageNumber }}</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="changePage(currentPage + 1)"
                            :disabled='currentPage === totalPage.value'>&raquo;</button>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const products = ref([]);
const searchQuery = ref("");
const router = useRouter();

const API = "http://localhost:3000/products"

const productList = async () => {
    try {
        const response = await axios.get(API);
        products.value = response.data
    } catch (error) {
        console.log(error);
    }
}
onMounted(productList)

const filteredProduct = computed(() => {
    return products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const editProducts = (id) => {
    router.push(`/admin/product/edit/${id}`);
}

const deleteProduct = async (id) => {
    try {
        await axios.delete(API + `${id}`);
        await productList();
    } catch (error) {
        console.error("Lỗi!", error);
    }
}

//pagination 
const itemPerPage = ref(4);
const currentPage = ref(1);

const changePage = (page) => {
    if (page >= 1 && page <= totalPage.value) {
        currentPage.value = page
    }
}

const VisiblePagenation = computed(() => {
    const startPage = (currentPage.value - 1) * itemPerPage.value;
    const endPage = startPage + itemPerPage.value;
    return filteredProduct.value.slice(startPage, endPage)
})

const totalPage = computed(() => {
    return Math.ceil(filteredProduct.value.length / itemPerPage.value);
})

const VisiblePageNumbers = computed(() => {
    let pageNumbers = [];
    const total = totalPage.value;
    const current = currentPage.value;

    if (total <= 7) {
        for (let i = 1; i <= total; i++) {
            pageNumbers.push(i);
        }
    } else {
        if (current <= 4) {
            pageNumbers = [1, 2, 3, 4, 5, '...', total];
        } else if (current >= total - 3) {
            pageNumbers = [1, '...', total - 4, total - 3, total - 2, total - 1, total];
        } else {
            pageNumbers = [1, '...', current - 1, current, current + 1, '...', total];
        }
    }

    return pageNumbers;
});

</script>
<style></style>