<template>
        <div class="login">
            <div class="logo">
                <router-link to="/auth/login">
                    <i class="bi bi-arrow-left-short fs-2"></i>
                </router-link>
                <img src="/src/assets/images/logo.png" alt="">
                <router-link to="/" ><i class="bi bi-house-door"></i></router-link>
            </div>
            <h6 class="title">Đăng ký tài khoản Phúc Long</h6>
            <span class="text-center d-block">Đăng ký cho số điện thoại</span>
            <span class="sub-title">{{ phone }}</span>
            <div class="form-login">
                <form action="" @submit.prevent="register">
                    <div class="mb-3">
                        <input v-model="$v.fullname.$model" :class="{'border border-danger' : $v.fullname.$error && $v.fullname.$dirty}" type="text" class="form-control form-control-lg" placeholder="Họ & tên*">
                        <small v-if="$v.fullname.$error && $v.fullname.$dirty" class="text-danger">{{ $v.fullname.$errors[0].$message }}</small>
                    </div>
                    <div class="mb-3">
                        <input v-model="$v.email.$model" :class="{'border border-danger' : $v.email.$error && $v.email.$dirty}" type="text" class="form-control form-control-lg" placeholder="Email*">
                        <small v-if="$v.email.$error && $v.email.$dirty" class="text-danger">{{ $v.email.$errors[0].$message }}</small>
                    </div>
                    <div class="mb-3 ">
                        <div class="position-relative">
                            <input v-model="$v.password.$model" :class="{'border border-danger' : $v.password.$error && $v.password.$dirty}" type="password" class="form-control form-control-lg h-100 pe-5" placeholder="Mật khẩu*">
                            <i @click="getClass"class="bi bi-eye-slash-fill position-absolute end-0 me-3 fs-4 top-50 translate-middle-y"></i>
                        </div>
                        <small v-if="$v.password.$error && $v.password.$dirty" class="text-danger">{{ $v.password.$errors[0].$message }}</small>
                    </div>  
                    <div class="mb-3 ">
                        <div class="position-relative">
                            <input v-model="$v.confirmPass.$model":class="{'border border-danger' : $v.confirmPass.$error && $v.confirmPass.$dirty}" type="password" class="form-control form-control-lg h-100 pe-5" placeholder="Nhập lại mật khẩu*">
                            <i @click="getClass" class="bi bi-eye-slash-fill position-absolute end-0 me-3 fs-4 top-50 translate-middle-y"></i>
                        </div>
                        <small v-if="$v.confirmPass.$error && $v.confirmPass.$dirty" class="text-danger">{{ $v.confirmPass.$errors[0].$message }}</small>
                    </div> 
                    <div class="mb-3 ">
                        Khách hàng đăng ký Hội Viên Phúc Long cũng sẽ trở thành
                        <router-link to="" class="text-success">Hội Viên Win.</router-link>
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                        <input type="checkbox" class="form-check me-2" id="clause">
                        <label for="clause">Tôi đồng ý</label>
                    </div>
                    <button>Đăng ký ngay</button>
                </form>
            </div>
        </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import useVuelidate from "@vuelidate/core";
import { email, helpers, minLength, required  } from '@vuelidate/validators';
import { useRouter } from 'vue-router';
const router = useRouter();
const phone = sessionStorage.getItem('phone');
const users = ref([]);
const user = reactive({
    id: undefined,
    fullname: "",
    phone: phone,
    gender: "",
    cccd: "",
    birthday: "",
    email: "",
    password: "",
    confirmPass: "",
    city: "",
    district: "",
    ward: "",
    address: "",
    role: "user",
    isActive: true
})

const isName  = (value) =>{
    const regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸỳỵỷỹ\s]+$/;
    return regex.test(value.trim());
}
const emptyEmail = (value) =>{
    const empty = users.value.some(u => u.email == value.trim());
    return !empty;
}
const confirmPass = (value) =>{
    return user.password === value.trim();
}
const rules = {
    fullname: {
        required: helpers.withMessage('Họ tên không được bỏ trống!', required),
        regex: helpers.withMessage('Họ tên sai định dạng!', isName)
    },
    email: {
        required: helpers.withMessage('Email không được để trống!', required),
        regex: helpers.withMessage('Email sai định dạng!', email),
        isEmpty: helpers.withMessage('Email đã tồn tại!', emptyEmail) 
    },
    password: {
        required: helpers.withMessage('Mật khẩu không được để trống!', required),
        min: helpers.withMessage('Mật khẩu tối thiểu 6 ký tự!', minLength(6)),
    },
    confirmPass: {
        required: helpers.withMessage('Xác nhận khẩu không được để trống!', required),
        confirm: helpers.withMessage('Xác nhân mật khẩu không đúng', confirmPass)
    }
}
const $v = useVuelidate(rules, user);

const register = async () =>{
    $v.value.$touch();
    const isValid = await $v.value.$validate();
    if(!isValid){
        return;
    }
    try {
        delete user.confirmPass;
        await axios.post('http://localhost:3000/users',user);
        router.push('/auth/login');
    } catch (error) {
        console.log(error);
    }
}

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

const fetchUsers = async() =>{
    try {
        const res = await axios.get('http://localhost:3000/users');
        users.value = res.data;
    } catch (error) {
        console.log(error);
    }
}
onMounted(fetchUsers);

</script>

<style scoped>
i{ 
    color: gray;
    cursor: pointer;
}
.auth{
    background-color: rgb(240, 248, 255);
    min-height: 100vh;
    height: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
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