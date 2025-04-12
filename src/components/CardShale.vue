<template>
    <div class="card h-100">
        <img :src="props.image" class="card-img-top rounded-1" alt="img">
        <div class="view-date">
            <span>{{ props.time }}</span>
            <span class="view">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"
                    class="bi bi-eye">
                    <path
                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z">
                    </path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0">
                    </path>
                </svg>
                {{ props.view }}
            </span>
        </div>
        <div class="card-body">
            <router-link :to="props.url"class="card-title text-decoration-none">{{ props.title }}</router-link>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
      title: String,
      image: String,
      time: String,
      view: Number,
      url: String
    });
    
</script>

<style scoped>
.card{
  border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    overflow: hidden;
}
.main__sale .title{
  text-align: center;
  color: var(--primary-green);
  margin-bottom: 30px;
}
.main__sale .title h3{
  font-family: Arimo;
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  height: auto;
}
.title span{
  color: #000;
  font-size: 14px;
}
.view-date{
  display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px;
    color: rgb(155, 155, 155);
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid rgb(155, 155, 155);
}

.view-date span, svg{
  font-size: 14px;
}
.card-body a{
  margin: 0;
  text-transform: uppercase;
  line-height: 24px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden !important;
}
.card:hover {
  box-shadow: rgba(153, 153, 153, 0.6) 0px 0px 10px 0px;
}
</style>