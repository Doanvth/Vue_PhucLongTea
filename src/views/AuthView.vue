<template>
    <div class="auth">
        <RouterView/>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router';


</script>

<style scoped>
.auth{
    background-color: rgb(240, 248, 255);
    min-height: 100vh;
    height: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
</style>