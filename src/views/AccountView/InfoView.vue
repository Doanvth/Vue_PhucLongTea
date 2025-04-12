<template>
    <div>
        <div class="container mt-3">
            <Breadcrumb title="Tài khoản" />
            <div class="row">
                <!-- Sidebar account -->
                <SideBarAccount />
                <!-- Main content -->
                <div class="col">
                    <div class="card p-4">
                        <h3 class="text-success mb-3">Thông tin cá nhân</h3>
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Họ & Tên</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="col-md-6">
                                <label for="phone" class="form-label">Số điện thoại</label>
                                <input type="text" class="form-control" id="phone">
                            </div>
                            <div class="col-md-6">
                                <label for="gender" class="form-label">Giới tính</label>
                                <select id="gender" class="form-select">
                                    <option selected>Chọn...</option>
                                    <option value="Male">Nam</option>
                                    <option value="Female">Nữ</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="cccd" class="form-label">Số CMND/CCCD</label>
                                <input type="text" class="form-control" id="cccd" placeholder="">
                            </div>
                            <div class="col-md-6">
                                <label for="birthday" class="form-label">Ngày sinh</label>
                                <input type="date" class="form-control" id="birthday">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email">
                            </div>
                            <div class="col-md-6">
                                <label for="city" class="form-label">Tỉnh/Thành phố</label>
                                <input v-model="searchProvince" @focus="showProvince = true" type="search" class="form-control">
                                <select v-show="showProvince" @click="showProvince = !showProvince"
                                    v-model="selectedProvince" @change="fetchDistricts" class="form-select" size="8"
                                    aria-label="size 3 select example">
                                    <option disabled v-if="provinces.length == 0" value="">Không tìm thấy !</option>
                                    <option v-for="province in provinces" :key="province.code" :value="province">{{
                                        province.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="district" class="form-label">Quận/Huyện</label>
                                <input @focus="showDistric = true" :disabled="selectedProvince.code == null" v-model="searchDistric" type="text" class="form-control">
                                <select v-show="showDistric" v-model="selectedDistrict" @click="showDistric = false"
                                    @change="fetchWards" class="form-select" size="8"
                                    aria-label="size 3 select example">
                                    <option disabled v-if="districts.length == 0" value="">Không tìm thấy !</option>
                                    <option v-for="district in districts" :key="district.code" :value="district">
                                        {{ district.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="ward" class="form-label">Phường/Xã</label>
                                <input @focus="showWard = true" :disabled="selectedDistrict.code == null" v-model="searchWard" type="text" class="form-control">
                                <select v-show="showWard" @click="showWard = false" v-model="selectedWard"
                                    class="form-select" size="8" aria-label="size 3 select example">
                                    <option disabled v-if="wards.length == 0" value="">Không tìm thấy !</option>
                                    <option v-for="ward in wards" :key="ward.code" :value="ward">{{ ward.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="address" class="form-label">Địa chỉ</label>
                                <input type="text" class="form-control" id="address">
                            </div>
                            <div class="col-12 d-flex justify-content-end">
                                <button type="submit" class="btn btn-success">Lưu thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcrumb from '../../components/Breadcrumb.vue';
import SideBarAccount from '../../layouts/SideBarAccount.vue';
import axios from 'axios';
import { ref, watch, onMounted } from 'vue';

const provinces = ref([]);
const districts = ref([]);
const wards = ref([]);
const selectedProvince = ref({});
const selectedDistrict = ref({});
const selectedWard = ref({});
const searchProvince = ref('');
const searchDistric = ref('');
const searchWard = ref('');
const addresses = ref([]);
const showProvince = ref(false);
const showDistric = ref(false);
const showWard = ref(false);

//theo dỗi tỉnh
watch(selectedProvince, (newValue) => {
    searchProvince.value = newValue.name;

    if (newValue.name) {
        addresses.value = originalAddresses.value.filter(a =>
            a.address.toLowerCase().includes(newValue.name.trim().toLowerCase())
        )
    } else {
        addresses.value = originalAddresses.value;
    }

})
//theo doi quận huyện 
watch(selectedDistrict, (newValue) => {
    searchDistric.value = newValue.name;
    if (newValue.name) {
        addresses.value = addresses.value.filter(a =>
            a.address.toLowerCase().includes(newValue.name.trim().toLowerCase())
        )
    } else if (selectedProvince.value.name) {
        addresses.value = originalAddresses.value.filter(a =>
            a.address.toLowerCase().includes(selectedProvince.value.name.trim().toLowerCase())
        )
    }
})
//theo doi phuong xa
watch(selectedWard, (newValue) => {
    searchWard.value = newValue.name;
    if (newValue.name) {
        addresses.value = addresses.value.filter(a =>
            a.address.toLowerCase().includes(newValue.name.trim().toLowerCase())
        )
    } else if (selectedDistrict.value.name && selectedProvince.value.name) {
        addresses.value = originalAddresses.value.filter(a =>
            a.address.toLowerCase().includes(selectedProvince.value.name.trim().toLowerCase())
            && a.address.toLowerCase().includes(selectedDistrict.value.name.trim().toLowerCase())
        )
    }
})

// Gọi API lấy tỉnh
const fetchProvinces = async () => {
    try {
        const res = await axios.get('https://provinces.open-api.vn/api/?depth=1');

        provinces.value = res.data;
    } catch (error) {
        console.error('Lỗi khi tải tỉnh:', error);
    }
}

// Gọi API lấy quận
const fetchDistricts = async () => {
    try {
        selectedDistrict.value = '';
        selectedWard.value = '';
        wards.value = [];
        console.log('Selected district code:', selectedDistrict.value.code);
        const res = await axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince.value.code}?depth=2`)

        districts.value = res.data.districts || [];
    } catch (error) {
        console.error('Lỗi khi tải quận:', error);
    }
}
// Gọi API lấy phường
const fetchWards = async () => {
    try {
        selectedWard.value = '';
        const res = await axios.get(`https://provinces.open-api.vn/api/d/${selectedDistrict.value.code}?depth=2`);
        wards.value = res.data.wards || [];
    } catch (error) {
        console.error('Lỗi khi tải phường:', error);
    }
}
//tim kiem tinh
watch(searchProvince, (newValue) => {
    districts.value = [];
    selectedDistrict.value = {};
    searchDistric.value = "";
    if (newValue != '' && newValue != undefined) {
        const list = provinces.value.filter(p =>
            p.name.toLowerCase().includes(newValue.trim().toLowerCase())
        )
        provinces.value = list
    } else {
        fetchProvinces();
    }
})

//tim kiem quan huyen
watch(searchDistric, (newValue) => {
    wards.value = [];
    selectedWard.value = {};
    searchWard.value = '';
    if (newValue != '' && newValue != undefined) {
        const list = districts.value.filter(d =>
            d.name.toLowerCase().includes(newValue.trim().toLowerCase())
        )
        districts.value = list;
    } else if (selectedProvince.value.code != null) {
        fetchDistricts();
    }
})

//tim kiem phuong xa
watch(searchWard, (newValue) => {
    if (newValue != '' && newValue != undefined) {
        const list = wards.value.filter(w =>
            w.name.toLowerCase().includes(newValue.trim().toLowerCase())
        )
        wards.value = list;
    } else if (selectedDistrict.value.code != null) {
        fetchWards();
    }
})

onMounted(() => {
    fetchProvinces();
});
</script>

<style scoped></style>