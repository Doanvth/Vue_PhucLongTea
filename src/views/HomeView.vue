<template>
  <main class="main container-xl">
    <section class="main__banner">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <a href="" class="carousel-item active">
            <img src="../assets/images/banner_1.png" class="d-block w-100" alt="...">
          </a>
          <a href="" class="carousel-item">
            <img src="../assets/images/banner_2.jpg" class="d-block w-100" alt="...">
          </a>
          <a href="" class="carousel-item">
            <img src="../assets/images/banner_3.jpg" class="d-block w-100" alt="...">
          </a>
        </div>
      </div>
    </section>
    <section class="main__product">
      <h3>BST Tea Latte - Bánh Banaberry mới!</h3>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        <div class="col" v-for="(tea) in listTea.slice(0, 3)" :key="tea.SKU">
          <CardProduct  :url="'#'" :image="tea.image" :title="tea.name" :price="tea.price" />
        </div>
        <div class="col" v-for="(cake) in listCake.slice(0, 2)" :key="cake.SKU">
          <CardProduct  :url="'#'" :image="cake.image" :title="cake.name" :price="cake.price" />
        </div>
      </div>
    </section>
    <section class="main__product">
      <h3>BEST SELLERS - TRÀ THƠM CHẤT LƯỢNG</h3>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        <div class="col" v-for="(tea,) in listTea.slice(0, moreTea)" :key="tea.SKU">
          <CardProduct :url="'#'" :image="tea.image" :title="tea.name" :price="tea.price" />
        </div>
      </div>
      <div class="more-product" v-if="moreTea != 10" @click="moreTea = 10">
        <div class="view-more" >
          <span>Xem thêm 5 sản phẩm
            <strong>BEST SELLERS - TRÀ THƠM CHẤT LƯỢNG</strong>
            <i class="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
    </section>
    <section class="main__product">
      <h3>BEST SELLERS - TRÀ SỮA ĐẬM VỊ</h3>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        <div class="col" v-for="(teaMilk) in listMilkTea.slice(0, moreMilkTea)" :key="teaMilk.SKU">
          <CardProduct :url="'#'" :image="teaMilk.image" :title="teaMilk.name" :price="teaMilk.price"/>
        </div>
      </div>
      <div class="more-product" v-if="moreMilkTea != 10" @click="moreMilkTea = 10">
        <div class="view-more">
          <span>Xem thêm 5 sản phẩm
            <strong>BEST SELLERS - TRÀ SỮA ĐẬM VỊ</strong>
            <i class="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>
    </section>
    <section class="main__sale">
      <div class="title">
        <h3>Tin tức & Khuyến mãi</h3>
        <span>Tin tức & Khuyến mãi của Phúc Long</span>
      </div>
      <div class="row">
        <div v-for="(sale) in sales.slice(0, 8)" :key="sale.id" class="col-lg-3 col-md-6 mb-3">
          <CardShale :title="sale.title" :image="sale.img" :url="'#'" :view="sale.view" :time="sale.time_active" />
        </div>
      </div>
      <div class="view-more">
        <a href="">Xem thêm</a>
      </div>
    </section>
    <section class="main__address">
      <div class="title">
        <h3>Danh sách cửa hàng</h3>
        <span>Danh sách cửa hàng Phúc Long</span>
      </div>
      <div class="row">
        <div class="col-lg-6 mb-sm-3">
          <div class="map">
            <iframe
              src="https://maps.google.com/maps?hl=vi&amp;q=17,%20Ng%C3%B4%20quy%E1%BB%81n,%20Ho%C3%A0n%20Ki%E1%BA%BFm,%20H%C3%A0%20N%E1%BB%99i&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%" height="841px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="search">
            <form action="">
              <button>
                <i class="bi bi-search"></i>
              </button>
              <input v-model="searchAddress" type="text" placeholder="Tìm kiếm cửa hàng Phúc Long">
              <button type="reset">
                <i class="bi bi-x"></i>
              </button>
            </form>
          </div>
          <div class="address-search">
            <h5>Tìm kiếm theo khu vực</h5>
            <form action="">
              <div class="search-field">
                <label for="">Tỉnh thành</label>
                <input v-model="searchProvince" @focus="showProvince = true"  type="text">
                <button v-show="showProvince" type="button" @click="searchProvince = '', selectedProvince= {}, showWard = false, showDistric = false" class="delete">
                  <i class="bi bi-x"></i>
                </button>
                <button type="button" @click="showProvince = !showProvince">
                  <i :class="['bi', showProvince ? 'bi-caret-up-fill' : 'bi-caret-down-fill']"></i>
                </button>
                <select v-show="showProvince" @click="showProvince = !showProvince" v-model="selectedProvince" @change="fetchDistricts" class="form-select" size="8"
                  aria-label="size 3 select example">
                  <option disabled v-if="provinces.length == 0" value="">Không tìm thấy !</option>
                  <option v-for="province in provinces" :key="province.code" :value="province">{{ province.name }}
                  </option>
                </select>
              </div>
              <div class="search-field">
                <label for="">Quận huyện</label>
                <input @focus="showDistric = true" :disabled="selectedProvince.code == null" v-model="searchDistric" type="text">
                <button v-show="showDistric" type="button" @click="searchDistric = '', selectedDistrict = {}, showWard = false" class="delete">
                  <i class="bi bi-x"></i>
                </button>
                <button @click="showDistric = !showDistric" type="button" :disabled="selectedProvince.name == null">
                  <i :class="['bi', showDistric ? 'bi-caret-up-fill' : 'bi-caret-down-fill']"></i>
                </button>
                <select v-show="showDistric" v-model="selectedDistrict" @click="showDistric = false"  @change="fetchWards"  class="form-select" size="8"
                  aria-label="size 3 select example">
                  <option disabled v-if="districts.length == 0" value="">Không tìm thấy !</option>
                  <option v-for="district in districts" :key="district.code" :value="district">{{ district.name }}
                  </option>
                </select>
              </div>
              <div class="search-field">
                <label for="">Phường xã</label>
                <input @focus="showWard = true" :disabled="selectedDistrict.code == null" v-model="searchWard" type="text">
                <button v-show="showWard" type="button" @click="searchWard = ''" class="delete">
                  <i class="bi bi-x"></i>
                </button>
                <button @click="showWard = !showWard"  type="button" :disabled="selectedDistrict.code == null">
                  <i :class="['bi', showWard ? 'bi-caret-up-fill' : 'bi-caret-down-fill']"></i>
                </button>
                <select v-show="showWard" @click="showWard = false"  v-model="selectedWard"  class="form-select" size="8"
                  aria-label="size 3 select example">
                  <option disabled v-if="wards.length == 0" value="">Không tìm thấy !</option>
                  <option v-for="ward in wards" :key="ward.code" :value="ward">{{ ward.name }}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="current-location">
            <h5><i class="bi bi-crosshair me-1"></i>Vị trí hiện tại của quý khách</h5>
          </div>
          <div class="current-location-content">
            <h5>Danh sách cửa hàng</h5>
            <div class="content overflow-auto">
              <div v-for="store in addresses" :key="store.id" class="store_content">
                  <div class="content" @click="map(store.map)">
                    <StoreAddress  :title="store.store_name" :image="store.img" :address="store.address" :phone="store.phone_number"
                  :timeActive="store.opening_hours" :active="store.status" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import CardProduct from '../components/CardProduct.vue';
import CardShale from '../components/CardShale.vue';
import StoreAddress from '../components/StoreAddress.vue';
import axios from 'axios';
import { ref, onMounted, watch } from 'vue'
import { fetchData } from '../utils/apiUtils';

const products = ref([]);
const sales = ref([]);
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
const searchAddress = ref('');
const showProvince = ref(false);
const showDistric = ref(false);
const showWard = ref(false);
const originalAddresses = ref([]);
const listTea = ref([]);
const listCake = ref([]);
const listMilkTea = ref([]);
const moreTea = ref(5);
const moreMilkTea = ref(5);
const map = (url) =>{
  const iframe = document.querySelector('.map iframe');
  iframe.src = url;
};
//theo dỗi tỉnh
watch(selectedProvince, (newValue)=>{
  searchProvince.value = newValue.name;
  
  if(newValue.name){
    addresses.value = originalAddresses.value.filter(a => 
      a.address.toLowerCase().includes(newValue.name.trim().toLowerCase())
    )
  }else{
    addresses.value = originalAddresses.value;
  }
  
})
//theo doi quận huyện 
watch(selectedDistrict, (newValue)=>{ 
  searchDistric.value = newValue.name;
  if(newValue.name){
    addresses.value = addresses.value.filter(a => 
      a.address.toLowerCase().includes(newValue.name.trim().toLowerCase())
    )
  }else if(selectedProvince.value.name){
    addresses.value = originalAddresses.value.filter(a => 
      a.address.toLowerCase().includes(selectedProvince.value.name.trim().toLowerCase())
    )
  }
})
//theo doi phuong xa
watch(selectedWard, (newValue)=>{
  searchWard.value = newValue.name;
  if(newValue.name){
    addresses.value = addresses.value.filter(a =>
      a.address.toLowerCase().includes(newValue.name.trim().toLowerCase())
    )
  }else if(selectedDistrict.value.name && selectedProvince.value.name){
    addresses.value = originalAddresses.value.filter(a =>
      a.address.toLowerCase().includes(selectedProvince.value.name.trim().toLowerCase()) 
      &&  a.address.toLowerCase().includes(selectedDistrict.value.name.trim().toLowerCase()) 
    )
  }
})
//Goi api news 
const fetchNews = async ()=>{
  const res = await fetchData('http://localhost:3000/news');
  sales.value = res.reverse();
}
//Goi api lay products
const fetchProducts = async() =>{
   products.value = await fetchData('http://localhost:3000/products');
   listTea.value = products.value.filter(p => p.name.toLowerCase().includes('trà') && !p.name.toLowerCase().includes('sữa') && p.size).reverse();
   listCake.value = products.value.filter(p => p.name.toLowerCase().includes('bánh')).reverse();
   listMilkTea.value = products.value.filter(p => p.name.toLowerCase().includes('trà sữa')).reverse();
}
//Goi api lay dia chi
const fetchAddresses = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/addresses`);
    addresses.value = res.data;
    originalAddresses.value = res.data;
  } catch (error) {
    console.error('Lỗi khi tải quận:', error);
  }
}
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
    const res = await axios.get(`https://provinces.open-api.vn/api/p/${selectedProvince.value.code}?depth=2`)
    districts.value = res.data.districts || [];
  } catch (error) {
    console.error('Lỗi khi tải quận:', error);
  }``
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
watch(searchProvince, (newValue)=>{
  districts.value = [];
  selectedDistrict.value = {};
  searchDistric.value = "";
  if(newValue != '' && newValue != undefined ){
    const list = provinces.value.filter(p =>
      p.name.toLowerCase().includes(newValue.trim().toLowerCase())
    )
    provinces.value = list
  }else{
    fetchProvinces();
  }
})
//tim kiem quan huyen
watch(searchDistric, (newValue)=>{
  wards.value = [];
  selectedWard.value = {};
  searchWard.value = '';
  if(newValue != '' && newValue != undefined){
      const list = districts.value.filter(d =>
      d.name.toLowerCase().includes(newValue.trim().toLowerCase())
    )
    districts.value = list;
  }else if(selectedProvince.value.code != null){
    fetchDistricts();
  }
})
//tim kiem phuong xa
watch(searchWard, (newValue)=>{
  if(newValue != '' && newValue != undefined){
      const list = wards.value.filter(w =>
      w.name.toLowerCase().includes(newValue.trim().toLowerCase())
    )
    wards.value = list;
  }else if(selectedDistrict.value.code != null){
    fetchWards();
  }
})
//tim kiem dia chi
watch(searchAddress, (newValue)=>{
  if(newValue != "" && newValue != undefined){
    const list = addresses.value.filter(a => 
      a.address.toLowerCase().includes(newValue.trim().toLowerCase())
    )
    addresses.value = list;
  }else{
    fetchAddresses();
  }
})
onMounted(async() =>{
  await fetchProvinces(),
  await fetchAddresses(),
  await fetchProducts(),
  await fetchNews();
})
</script>

<style scoped>
.content{
  cursor: pointer;
  z-index: 1;
}
/* slider  */
.carousel-indicators button {
  display: inline-block;
  width: 9px !important;
  height: 9px !important;
  border-radius: 50%;
  opacity: 1 !important;
  box-shadow: none;
  background: #fff !important;
  border: 2px solid grey !important;
  padding: 0 !important;
  margin: 0 6px 0 0 !important;
  outline: 0;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: #000 !important;
  opacity: 1 !important;
}

.main__product h3 {
  text-align: center;
  font-family: Arimo;
  color: var(--primary-green);
  font-size: 24px;
  line-height: 55px;
  font-weight: 600;
  padding: 13px 0;
  margin-bottom: 10px;
}

.main__sale .title h3 {
  font-family: Arimo;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  height: auto;
}

.css-vubbuv {
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 16px;
  margin-right: 5px;
}

.more-product {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__product .view-more {
  background: var(--white);
  color: var(--primary-green);
  font-size: 14px;
  padding: 10px 12px;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  border-radius: 4px;
  border: 1px solid var(--primary-green);
  overflow: hidden;
  cursor: pointer;
}

.more-product i {
  font-size: 10px;
  margin-left: 5px;
}

/* sale  */
.main__sale .title {
  text-align: center;
  color: var(--primary-green);
  margin-bottom: 30px;
  padding-top: 15px;
}

.main__sale .title h3 {
  font-family: Arimo;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  height: auto;
}

.main__sale .title span {
  color: #000;
  font-size: 14px;
}

.view-date span,
svg {
  font-size: 14px;
}

.main__sale .view-more {
  padding: 5px 0 0 0;
  color: var(--primary-green);
  font-size: 14px;
  text-align: center;
}

.main__sale .view-more a {
  color: var(--primary-green);
}

/* address */
.main__address .title {
  text-align: center;
  padding: 20px 0;
  color: var(--primary-green);
}

.main__address .title span {
  color: #000;
  font-size: 14px;
}

.main__address .map {
  width: 100%;
  height: 100%;
}

.main__address .search {
  margin-bottom: 16px;
}

.main__address .search form {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 0px 10px;
  overflow: hidden;
  width: 100%;
  color: rgb(51, 51, 51);
  background-color: rgb(236, 239, 241);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 241, 241);
}

.main__address .search form button {
  border: none;
  background-color: transparent;
}

.main__address .search form button[type="reset"] {
  background-color: var(--primary-green);
  border-radius: 50%;
  display: flex;
  width: 13px;
  height: 13px;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.main__address .search form button[type="reset"] i {
  color: #fff;
  font-size: 8px;
}

.main__address .search form i {
  color: #333;
  font-size: 15px;
}

.main__address .search input {
  font-size: 13px;
  padding: 8px 0;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: #00000001;
}

.main__address .search input:focus+button[type="reset"] {
  opacity: 1;
}

.address-search h5 {
  font-family: Arimo;
  font-size: 17px;
  font-weight: normal;
  color: var(--primary-green);
  margin-bottom: 16px;
}

.address-search form {
  display: flex;

}

.address-search .search-field {
  position: relative;
  padding: 14px 60px 14px 14px;
  border: 1px solid rgb(51, 51, 51, 0.3);
  border-radius: 5px;
  margin-right: 21px;

}

.address-search .search-field label {
  position: absolute;
  top: -6px;
  left: 13px;
  color: rgb(51, 51, 51);
  font-size: 10px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  background: #fff;
}

.address-search .search-field input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 14px;
}


.address-search .search-field button {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
}

.address-search .search-field .delete {
  position: absolute;
  right: 27px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
}

.address-search .search-field i {
  font-size: 15px;
  color: rgb(51, 51, 51, 0.7);
}

.address-search .search-field .delete i {
  font-size: 22px;
  color: rgb(51, 51, 51, 0.7);
}

.address-search .form-select {
  position: absolute;
  top: 53px;
  left: 0;
  width: 100%;
  box-shadow: none;
}
.current-location {
  padding: 10px 0;
}

.current-location h5 {
  font-family: Arimo;
  font-size: 17px;
  font-weight: normal;
  color: var(--primary-green);
}

.current-location-content h5 {
  font-family: Arimo;
  font-size: 17px;
  font-weight: normal;
  color: var(--primary-green);
}

.content {
  padding-left: 27px;
  max-height: 500px;
  width: 100%;
}
</style>  