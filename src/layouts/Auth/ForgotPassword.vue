<template>
        <div class="login">
            <div class="logo">
                <router-link to="/auth/password">
                    <i class="bi bi-arrow-left-short fs-2"></i>
                </router-link>
                <img src="/src/assets/images/logo.png" alt="">
                <router-link to="/" ><i class="bi bi-house-door"></i></router-link>
            </div>
            <h6 class="title">Phục hồi mật khẩu</h6>
            <span class="text-center d-block">Nhập mật khẩu mới cho số điện thoại</span>
            <span class="sub-title">{{ phone }}</span>
            <div class="form-login">
                <form action="" @submit.prevent="forgot">
                    <div class="mb-3 ">
                        <div class="position-relative">
                            <input v-model="pass.password" type="password" :class="{'border border-danger': $v.password.$error}" class="form-control form-control-lg h-100 pe-5" placeholder="Mật khẩu mới*">
                            <i @click="getClass"class="bi bi-eye-slash-fill position-absolute end-0 me-3 fs-4 top-50 translate-middle-y"></i>
                        </div>
                        <small v-if="$v.password.$error" class="text-danger">{{ $v.password.$errors[0].$message }}</small>
                    </div>  
                    <div class="mb-3 ">
                        <div class="position-relative">
                            <input v-model="pass.confirmPass" type="password" :class="{'border border-danger': $v.confirmPass.$error}" class="form-control form-control-lg h-100 pe-5" placeholder="Nhập lại mật khẩu*">
                            <i @click="getClass" class="bi bi-eye-slash-fill position-absolute end-0 me-3 fs-4 top-50 translate-middle-y"></i>
                        </div>
                        <small v-if="$v.confirmPass.$error" class="text-danger">{{ $v.confirmPass.$errors[0].$message }}</small>
                    </div> 
                    <button>Xác nhận</button>
                </form>
            </div>
        </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
const phone = sessionStorage.getItem('phone');
import useVuelidate from "@vuelidate/core";
import { helpers, minLength, required  } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
const user = ref({});
const router = useRouter();
const pass = reactive({
    password: '',
    confirmPass: ''
});
const confirmPass = (value)=>{
    return pass.password === value.trim();
}
const rules = {
    password: {
        require: helpers.withMessage('Mật khẩu được bỏ trống!', required),
        min: helpers.withMessage("Mật khẩu tối thiểu 6 kí tự!", minLength(6))
    },
    confirmPass:{
        require: helpers.withMessage('Xác nhận mật khẩu được bỏ trống!', required),
        confirm: helpers.withMessage('Xác nhận mật khẩu không đúng!', confirmPass)
    }
}
const $v = useVuelidate(rules, pass);
const forgot = async ()=>{
    $v.value.$touch();
    const isValid = await $v.value.$validate();
    if(!isValid){
        return;
    }
    try {
        user.value.password = pass.password;
        await axios.put(`http://localhost:3000/users/${user.value.id}`, user.value);
        router.push('/auth/login');
    } catch (error) {
        console.log(error);
    }
}
const fetchUsers = async ()=>{
    try {
        const res = await axios.get('http://localhost:3000/users');
        user.value = res.data.find(u => u.phone == phone);
    } catch (error) {
        console.log(error);
    }
}
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

</style>