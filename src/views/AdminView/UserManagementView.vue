<template>
    <div>
        <div class="container-fluid mt-3">
            <div class="card p-4 w-100 d-flex flex-column overflow-hidden" style="height: 640px;">
                <h2 class="text-uppercase fw-bold mb-3">Quản lý tài khoản</h2>

                <vue-good-table :columns="columns" :rows="users" :pagination-options="{
                    enabled: true,
                    perPage: 6,
                    perPageDropdown: [1, 2, 3, 4, 5, 6],
                    dropdownAllowAll: false
                }" :search-options="{ enabled: true }" theme="polar-bear">
                    <!-- Tuỳ chỉnh -->
                    <template #table-row="props">
                        <span v-if="props.column.field === 'isActive'">
                            <div class="form-check form-switch align-content-center">
                                <input class="form-check-input" type="checkbox" role="switch"
                                    id="flexSwitchCheckChecked" v-model="props.row.isActive"
                                    @change="updateStatus(props.row)">
                            </div>
                        </span>
                    </template>
                </vue-good-table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {ref, onMounted} from 'vue';
import axios from 'axios';
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';

// Dữ liệu sản phẩm
const users = ref([]);
const route = useRoute();

// Cấu hình cột hiển thị
const columns = ref([
  { label: "Mã tài khoản", field: "id", sortable: true,  width: "150px" },
  { label: "Tên tài khoản", field: "fullname", sortable: true },
  { label: "Email", field: "email", sortable: true },
  { label: "Số điện thoại", field: "phone", sortable: true },
  { label: "Hành động", field: "isActive", width: "120px", sortable: true }
]);

const API_URL = "http://localhost:3000";
const userList = async () => {
    try {
        const response = await axios.get(API_URL + "/users");
        users.value = response.data;
        users.value = users.value.slice(1);

    } catch {
        console.log("lỗi");
    }
}

const isActive = ref(false);
const fetchId = async () => {
    if (!route.params.id) return;
    try {
        const response = await axios.get(`http://localhost:3000/users/${route.params.id}`);
        isActive.value = response.data.isActive; 
    } catch (error) {
        console.error("Lỗi khi lấy trạng thái:", error);
    }
}
// cập nhật trạng thái
const updateStatus = async (users) => {
    try {
        await axios.patch(`http://localhost:3000/users/${users.id}`, { isActive: users.isActive });
        console.log("Trạng thái đã cập nhật:", users.isActive);
    } catch (error) {
        console.error("Lỗi khi cập nhật trạng thái:", error);
    }
};

onMounted( async()=> {
    await userList();
    await fetchId();
})
</script>

<style scoped></style>