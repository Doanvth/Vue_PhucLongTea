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
        <div class="col" v-for="(product, index) in products" :key="index">
            <CardProduct :url="product.url" :image="product.image" :title="product.title" :price="product.price" :seller="product.seller" />
        </div>
      </div>
    </section>
    <section class="main__product">
      <h3>BEST SELLERS - TRÀ THƠM CHẤT LƯỢNG</h3>
      <div class="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        <div class="col" v-for="(product, index) in products" :key="index">
            <CardProduct :url="product.url" :image="product.image" :title="product.title" :price="product.price" :seller="product.seller" />
        </div>
      </div>
      <div class="more-product">
        <div class="view-more">
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
        <div class="col" v-for="(product, index) in products" :key="index">
            <CardProduct :url="product.url" :image="product.image" :title="product.title" :price="product.price" :seller="product.seller" />
        </div>
      </div>
      <div class="more-product">
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
          <div v-for="(sale, index) in sales" :key="index" class="col-lg-3 col-md-6 mb-3">
            <CardShale :title="sale.title" :image="sale.image" :url="sale.url" :view="sale.view" :time="sale.time"/>
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
              <iframe src="https://maps.google.com/maps?hl=vi&amp;q=17,%20Ng%C3%B4%20quy%E1%BB%81n,%20Ho%C3%A0n%20Ki%E1%BA%BFm,%20H%C3%A0%20N%E1%BB%99i&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="841px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
          </div>
          <div class="col-lg-6">
              <div class="search">
                <form action="">
                  <button>
                    <i class="bi bi-search"></i>
                  </button>
                  <input type="text" placeholder="Tìm kiếm cửa hàng Phúc Long">
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
                    <input type="text">
                    <button type="reset">
                      <i class="bi bi-x"></i>
                    </button>
                    <button>
                      <i class="bi bi-caret-down-fill"></i>
                    </button>
                    <select class="form-select" size="8" aria-label="size 3 select example">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="search-field">
                    <label for="">Quận huyện</label>
                    <input type="text">
                    <button type="reset">
                      <i class="bi bi-x"></i>
                    </button>
                    <button>
                      <i class="bi bi-caret-down-fill"></i>
                    </button>
                  </div>
                  <div class="search-field">
                    <label for="">Phường xã</label>
                    <input type="text">
                    <button type="reset">
                      <i class="bi bi-x"></i>
                    </button>
                    <button>
                      <i class="bi bi-caret-down-fill"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="current-location">
                <h5><i class="bi bi-crosshair me-1"></i>Vị trí hiện tại của quý khách</h5>
              </div>
              <div class="current-location-content">
                <h5>Danh sách cửa hàng</h5>
                <div class="content overflow-auto">
                    <div v-for="(store, index) in stores" :key="index" class="store_content">
                      <StoreAddress :title="store.title" :image="store.image" :address="store.address" :phone="store.phone" :timeActive="store.timeActive" :active="store.acvive"/>
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
    const image = "https://hcm.fstorage.vn/images/2025/03/may-20250305102251.png"
    const products = [
      {
        title: 'tieu de',
        image: 'https://hcm.fstorage.vn/images/2025/03/may-20250305102251.png',
        price: 495999,
        url: '#',
      },
      {
        title: 'tieu de',
        image: 'https://hcm.fstorage.vn/images/2025/03/may-20250305102251.png',
        price: 495999,
        url: '#',
      },
      {
        title: 'tieu de',
        image: 'https://hcm.fstorage.vn/images/2025/03/may-20250305102251.png',
        price: 495999,
        url: '#',
        seller: 'sale'
      },
      {
        title: 'tieu de',
        image: 'https://hcm.fstorage.vn/images/2025/03/may-20250305102251.png',
        price: 495999,
        url: '#',
        seller: 'sale'
      },
      {
        title: 'tra sua so mot the gioi',
        image: 'https://hcm.fstorage.vn/images/2025/03/may-20250305102251.png',
        price: 495999,
        url: '#',
      },
    ]
    const sales = [
      {
        title: "sale gia re aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        image: "https://hcm.fstorage.vn/phuclong/2025/02/lsm_dine-in_valentine_2025_combo-01-20250214063834.jpg",
        time: "12-03 24-02-2026",
        view: 1999,
        url: "#"
      },
      {
        title: "sale gia re",
        image: "https://hcm.fstorage.vn/phuclong/2025/02/lsm_dine-in_valentine_2025_combo-01-20250214063834.jpg",
        time: "12-03 24-02-2026",
        view: 1999,
        url: "#"
      },
      {
        title: "sale gia re",
        image: "https://hcm.fstorage.vn/phuclong/2025/02/lsm_dine-in_valentine_2025_combo-01-20250214063834.jpg",
        time: "12-03 24-02-2026",
        view: 1999,
        url: "#"
      },
      {
        title: "sale gia re",
        image: "https://hcm.fstorage.vn/phuclong/2025/02/lsm_dine-in_valentine_2025_combo-01-20250214063834.jpg",
        time: "12-03 24-02-2026",
        view: 1999,
        url: "#"
      }
    ]
    const stores = [
      {
        title: 'BDG-CH 44 Nguyen Dinh Chieu P.PC',
        image: 'https://phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg',
        address: '44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương',
        phone: '(028) 7100 1968',
        timeActive: '07:00 - 22:30',
        acvive: 'Mở cửa',
      },
      {
        title: 'BDG-CH 44 Nguyen Dinh Chieu P.PC',
        image: 'https://phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg',
        address: '44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương',
        phone: '(028) 7100 1968',
        timeActive: '07:00 - 22:30',
        acvive: 'Mở cửa',
      },
      {
        title: 'BDG-CH 44 Nguyen Dinh Chieu P.PC',
        image: 'https://phuclong.com.vn/_next/static/images/phuclong-store-a0cba2f8c91fff15b6138d6d30982396.jpg',
        address: '44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương',
        phone: '(028) 7100 1968',
        timeActive: '07:00 - 22:30',
        acvive: 'Mở cửa',
      },
    ]
</script>

<style scoped>
    
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
.main__sale .title h3{
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
.main__product .view-more{
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
.more-product i{
  font-size: 10px;
  margin-left: 5px;
}
/* sale  */
.main__sale .title{
  text-align: center;
  color: var(--primary-green);
  margin-bottom: 30px;
  padding-top: 15px;
}
.main__sale .title h3{
  font-family: Arimo;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  height: auto;
}
.main__sale .title span{
  color: #000;
  font-size: 14px;
}
.view-date span, svg{
  font-size: 14px;
}
.main__sale .view-more{
  padding: 5px 0 0 0;
  color: var(--primary-green);
  font-size: 14px;
  text-align: center;
}
.main__sale .view-more a{
  color: var(--primary-green);
}
/* address */
.main__address .title{
  text-align: center;
  padding: 20px 0;
  color: var(--primary-green);
}
.main__address .title span{
  color: #000;
  font-size: 14px;
}

.main__address .map{
  width: 100%;
  height: 100%;
}
.main__address .search{
  margin-bottom: 16px;
}
.main__address .search form{
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
.main__address .search form button{
  border: none;
  background-color: transparent;
}
.main__address .search form button[type="reset"]{
  background-color: var(--primary-green);
  border-radius: 50%;
  display: flex;
  width: 13px;
  height: 13px;
  justify-content: center;
  align-items: center;
  opacity: 0;
}
.main__address .search form button[type="reset"] i{
  color: #fff;
  font-size: 8px;
}
.main__address .search form i{
  color: #333;
  font-size: 15px;
}
.main__address .search input{
  font-size: 13px;
  padding: 8px 0;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background-color: #00000001;
}
.main__address .search input:focus + button[type="reset"]{
  opacity: 1;
}
.address-search h5{
  font-family: Arimo;
  font-size: 17px;
  font-weight: normal;
  color: var(--primary-green);
  margin-bottom: 16px;
}
.address-search form{
  display: flex;

}
.address-search .search-field{
  position: relative;
  padding: 14px 60px 14px 14px;
  border: 1px solid rgb(51, 51, 51, 0.3);
  border-radius: 5px;
  margin-right: 21px;

}
.address-search .search-field label{ 
  position: absolute;
  top: -6px;
  left: 13px;
  color: rgb(51, 51, 51);
  font-size: 10px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  background: #fff;
}
.address-search .search-field input{ 
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 14px;
}
.address-search .search-field input:focus + button[type="reset"]{ 
  opacity: 1;
}
.address-search .search-field button{
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
}
.address-search .search-field button[type="reset"]{
  position: absolute;
  right: 27px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  opacity: 0;
}
.address-search .search-field i{
  font-size: 15px;
  color: rgb(51, 51, 51, 0.7);
}
.address-search .search-field button[type="reset"] i{
  font-size: 22px;
  color: rgb(51, 51, 51, 0.7);
}

.address-search .form-select{
  position: absolute;
  top: 53px;
  left: 0;
  width: 100%;
  box-shadow: none;
  display: none;
}
.current-location{
  padding: 10px 0 ;
}
.current-location h5{
  font-family: Arimo;
  font-size: 17px;
  font-weight: normal;
  color: var(--primary-green);
}
.current-location-content h5{
  font-family: Arimo;
  font-size: 17px;
  font-weight: normal;
  color: var(--primary-green);
}
.content{
  padding-left: 27px;
  max-height: 500px;
  width: 100%;
} 
</style>