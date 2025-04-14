<template>
    <div class="login mt-3">
        <div class="logo">
            <img src="/src/assets/images/logo.png" alt="img">
            <router-link to="/"><i class="bi bi-house-door"></i></router-link>
        </div>
        <h6 class="title">Phúc Long Xin Chào</h6>
        <span class="sub-title">Đăng nhập/ Đăng ký</span>
        <div class="form-login">
            <form action="" @submit.prevent="login">
                <div class="mb-3">
                    <input @focus="v$.$reset()" v-model="phone_number.phone" :class="{'border border-danger': v$.phone.$error}" type="text" class="form-control form-control-lg" placeholder="Số điện thoại*">
                    <small v-if="v$.phone.$error" class="text-danger">{{ v$.phone.$errors[0].$message }}</small>
                </div>
                <button type="submit">Tiếp tục</button>
            </form>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import useVuelidate from "@vuelidate/core";
import { helpers, required  } from '@vuelidate/validators';

const users = ref([]);
const router = useRouter();
const phone_number = reactive({
    phone:''
});

const isPhone = (value) =>{
    const regex = /^(\+84|0)[3|5|7|8|9][0-9]{8}$/;
    return regex.test(value);
};
const rules={
    phone: {
        required: helpers.withMessage("Số điện thoại không được bỏ trống!", required),
        phone: helpers.withMessage("Số điện thoại sai định dạng!", isPhone)
    }
}
const v$ = useVuelidate(rules, phone_number);

const login = async() =>{
    v$.value.$touch();
    const isValid = await v$.value.$validate();
    if(!isValid){
        return;
    }
    let user;
    if(phone_number.phone != '' && !isNaN(phone_number.phone)){
        user = users.value.find(u => u.phone == phone_number.phone.trim());
    }
    if(user){   
        router.push(`/auth/password`);
    }else{
        router.push(`/auth/register`);
    }
    sessionStorage.setItem('phone', phone_number.phone);
}
const fetchUsers = async () => {
    try {
        const res = await axios.get('http://localhost:3000/users');
        users.value = res.data;
    } catch (error) {
        console.error("Lỗi user:", error);
    }
};
onMounted(fetchUsers);

</script>

<style scoped>
.login {
    width: 420px;
    background: rgba(255, 255, 255);
    padding: 0 32px;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
}

.logo a {
    position: absolute;
    top: 17px;
    right: 0;
    font-size: 22px;
    color: gray;
}

.title {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    font-family: Arimo;
}

.sub-title {
    display: block;
    text-align: center;
    margin-bottom: 24px;
    font-size: 14px;
}

.form-login input {
    font-size: 14px;
    background: none;
    -webkit-tap-highlight-color: transparent;
    display: block;
    width: 100%;
    padding: 16.5px 14px;
}

.form-login button {
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