<template>
    <div class="card">
            <div class="box-img">
              <router-link :to="props.url">
                <img :src="props.image" alt="img">
              </router-link>
              <div v-if="props.seller" class="seller">
                  {{ props.seller }}
              </div>
            </div>
            <div class="box-detail">
              <div class="title">
                <router-link :to="props.url" >{{ props.title }}</router-link>
                <div v-if="props.title" class="tooltip_title">
                  {{ props.title }}
                </div>
              </div>  
              <router-link :to="props.url">
                  {{ formatCurrency(props.price) }}
              </router-link>
              <button>
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon css-vubbuv" focusable="false"
                  aria-hidden="true" viewBox="0 0 24 24" data-testid="AddShoppingCartIcon">
                  <path
                    d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z">
                  </path>
                </svg>
                Đặt mua
              </button>
            </div>
          </div>
</template>

<script setup>
    const props = defineProps({
      title: String,
      image: String,
      seller: String,
      price: Number, 
      url: String
    });
  const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(value);
}
    
</script>

<style scoped>

.card {
  padding-bottom: 16px;
  background-color: var(--white);
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 26px;
  border: none !important;
}

.card:hover {
  box-shadow: rgba(153, 153, 153, 0.6) 0px 0px 10px 0px;
}

.box-img {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  overflow: hidden;
  min-height: 140px;
  background: #eceff1;
  height: 180px;
  border-radius: 8px;
}

.box-img img {
  max-width: 100px;
  max-height: 100px;
  height: auto;
}


.seller {
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: rgb(183, 28, 28);
  color: rgb(255, 255, 255);
  overflow: hidden;
  padding: 4px;
  font-size: 12px;
  pointer-events: none;
  width: 100%;
  text-align: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

}

.box-detail {
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
}

.box-detail .title:hover>.tooltip_title {
  display: block;
}

.box-detail .title {
  position: relative;
}

.box-detail .title .tooltip_title {
  position: absolute;
  top: -31px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #616161eb;
  border-radius: 4px;
  color: var(--white);
  font-size: 11px;
  font-weight: 500;
  line-height: 16.5px;
  margin: 2px 2px 14px;
  padding: 4px 8px;
  text-shadow: #00000001 1px 1px 1px;
  display: none;
}

.box-detail .title .tooltip_title::after {
  content: "";
  width: 100%;
  height: 54px;
  position: absolute;
  top: 24px;
  left: 0;
  background-color: transparent;
}

.box-detail .title a {
  width: 100%;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  font-family: Arimo;
  color: var(--primary-green);
  line-height: 20px;
  margin-top: 8px;
  height: 18px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden !important;
}


.box-detail a:nth-child(2) {
  text-decoration: none;
  font-weight: bold;
  padding: 10px 0;
  line-height: 1;
  font-size: 14px;
  color: var(--primary-green);
}

.card button {
  transition: 0.35s ease-in-out;
  border: 1px solid var(--primary-green);
  cursor: pointer;
  text-transform: inherit;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  background-color: var(--primary-green);
  padding: 5px 0px;
  color: var(--white);
  overflow: hidden;
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
.view-more{
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
}
</style>