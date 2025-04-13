<template>
    <div class="store">
        <div class="image">
            <img :src="props.image" alt="img" class="img-fluid">
        </div>
        <div class="store-info">
            <span>Đang cập nhật</span>
            <h5 class="text-truncate">{{ props.title }}</h5>
            <span>
                <u>Địa chỉ:</u>
                {{ props.address }}
            </span>
            <span>
                <u>Số điện thoại: </u>
                {{ props.phone }} (Ext.20028)
            </span>
            <span>
                <u>Giờ hoạt động:</u>
                {{ props.timeActive }}
            </span>
            <span>
                <u>Trạng thái hoạt động:</u>
                {{ props.active }}
            </span>
            <button>
                <i class="bi bi-sign-turn-slight-right-fill"></i>
                Chỉ đường
            </button>

        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String,
        image: String,
        address: String,
        phone: String,
        timeActive: String,
        active: String,
    });
     
</script>

<style scoped>
.store{ 
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(51, 51, 51, 0.3);
  padding-bottom: 10px;
}
.store-info span{
  display: block;
  font-family: Arimo;
  font-size: 14px;
  font-weight: normal;
}
.store .image{
  width: 46px;
  height: 46px;
  margin-right: 12px;
  border-radius: 30px;
  overflow: hidden;
}
.store .image img{
  height: 100%;
}
.store-info button{
  background: var(--primary-green);
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 5px 10px;
  margin-top: 10px;
}
h5{
  font-family: Arimo;
  font-size: 17px;
  font-weight: normal;
  color: var(--primary-green);
}
</style>