<template>
        <div class="login">
            <div class="logo">
                <router-link to="/auth/login">
                    <i class="bi bi-arrow-left-short fs-2"></i>
                </router-link>
                <img src="/src/assets/images/logo.png" alt="">
                <router-link to="/" ><i class="bi bi-house-door"></i></router-link>
            </div>
            <h6 class="title">Phúc Long Xin Chào</h6>
            <span class="text-center d-block">Đăng nhập cho số điện thoại</span>
            <span class="sub-title">{{ phone_number }}</span>
            <div class="form-login">
                <form action="" @submit.prevent="login">
                    <div class="mb-3 ">
                        <div class="position-relative">
                            <input @focus="$v.$reset()" v-model="password.password" :class="{'border border-danger': $v.password.$error || !user.isActive}" type="password" class="form-control form-control-lg h-100 pe-5" placeholder="Mật khẩu*">
                            <i @click="getClass"class="bi bi-eye-slash-fill position-absolute end-0 me-3 fs-4 top-50 translate-middle-y"></i>
                        </div>
                        <small v-if="$v.password.$error && $v.password.$dirty && user.isActive" class="text-danger">{{ $v.$errors[0].$message }} </small>
                        <small v-if="!user.isActive " class="text-danger">Tài khoản đã bị khóa!</small>
                    </div>  
                    <div class="mb-3" >
                        <button :disabled="!user.isActive":class="{'opacity-50' : !user.isActive}" >Đăng nhập</button>
                    </div>                    
                    <div class="mb-3 text-center message">
                        <span>*Nhập sai quá 5 lần sẽ bị khóa tài khoản</span><br>
                        <span>Vui lòng ấn "Quên mật khẩu" nếu cần lấy lại mật khẩu</span>
                    </div>
                    <div class="mb-3 text-center">
                        <router-link :to="`/auth/otp`"  class="text-success ">Bạn quên mật khẩu?</router-link>
                    </div>
                </form>
            </div>
        </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import useVuelidate from "@vuelidate/core";
import { helpers, required  } from '@vuelidate/validators';
const router = useRouter();
const phone_number = sessionStorage.getItem('phone');
const password = reactive({
    password: ''
});
const users = ref([]);
let count = 1;
let user = reactive({
    isActive: true
})
const checkPass = (value) =>{
    return user.password === value.trim();
}
const rules = {
    password: {
        required: helpers.withMessage('Mật khẩu không được bỏ trống!', required),
        pass: helpers.withMessage('Mật khẩu không chính xác!', checkPass)
    }
}
const $v = useVuelidate(rules, password);
const login = async() =>{
    if(!user.isActive){
        return;
    }
    count++;
    if(count > 5){
        user.isActive = false;
        try {
            axios.put(`http://localhost:3000/users/${user.id}`, user);
        } catch (error) {
            console.log(error);
        }
    }
    $v.value.$touch();
    const isValid =  await $v.value.$validate();
    if(!isValid){
        return;
    }
    router.push('/');
}
const fetchUsers = async () => {
    try {
        const res = await axios.get('http://localhost:3000/users');
        users.value = res.data;
        user = users.value.find(u => u.phone == phone_number);
    } catch (error) {
        console.error("Lỗi user:", error);
    }
};
onMounted(fetchUsers);



//ẩn hiện password
const getClass = (event)=>{
    const className = event.target.className;
    const input = event.target.previousElementSibling;
    if(className.includes('bi-eye-slash-fill')){
        event.target.classList.remove('bi-eye-slash-fill');
        event.target.classList.add('bi-eye-fill');
        input.type='text';
    }else{
        event.target.classList.remove('bi-eye-fill');
        event.target.classList.add('bi-eye-slash-fill');
        input.type='password';
    }
}
</script>

<style scoped>
i{ 
    color: gray;
    cursor: pointer;
}

.login{
    width: 420px;
    background: rgba(255, 255, 255);
    padding: 0 32px;
}
.logo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
}
.logo a{
    font-size: 22px;
    color: gray;
}
.title{
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    font-family: Arimo;
}
.sub-title{
    display: block;
    text-align: center;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: bold;
}
.form-login input{
    font-size: 14px;
    background: none;
    -webkit-tap-highlight-color: transparent;
    display: block;
    width: 100%;
    padding: 16.5px 14px;
}
.form-login .form-check{
    display: block;
    width: 17px;
    margin-bottom: 0;
    padding: 0;
}
.form-login button{
    border: none;
    width: 100%;
    padding: 16.5px 14px;
    text-transform: uppercase;
    border-radius: 5px;
    background: var(--primary-green);
    color: #fff;
    font-weight: bold;
}
.message{
    color: red;
    font-size: 12px;
}
</style>