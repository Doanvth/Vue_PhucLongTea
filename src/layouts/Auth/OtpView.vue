<template>
  <div class="login">
    <div class="logo">
      <router-link to="/auth/password">
        <i class="bi bi-arrow-left-short fs-2"></i>
      </router-link>
      <img src="/src/assets/images/logo.png" alt="">
      <router-link to="/"><i class="bi bi-house-door"></i></router-link>
    </div>
    <h6 class="title">Xác minh tài khoản</h6>
    <span class="text-center d-block">Nhập OTP vừa gửi đến email </span>
    <span class="sub-title">{{ user.email }}</span>
    <div class="form-login">
      <form action="" @submit.prevent="authentic">
        <div class="otp mb-2  d-flex">
          <input  type="number" min="0" max="9"
            class="form-control form-control-sm me-2 text-center">
          <input  type="number" min="0" max="9"
            class="form-control form-control-sm me-2 text-center">
          <input  type="number" min="0" max="9"
            class="form-control form-control-sm me-2 text-center">
          <input  type="number" min="0" max="9"
            class="form-control form-control-sm me-2 text-center">
          <input  type="number" min="0" max="9"
            class="form-control form-control-sm me-2 text-center">
          <input  type="number" min="0" max="9" class="form-control form-control-sm text-center">
        </div>
        <div class="mb-3">
          <small v-if="check && otp != null"class="text-danger ">Mã xác nhận không chính xác</small>
          <small v-if="otp == null" class="text-danger">Mã xác nhận hết hiệu lực</small>
        </div>
        <button :disabled="otp == null" :class="{'opacity-50' : otp==null}">Xác minh tài khoản</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import emailjs from 'emailjs-com'
import axios from 'axios';
import { useRouter } from 'vue-router';
const check = ref(false); 
const router = useRouter();
const user = ref({});
const phone = sessionStorage.getItem('phone');
let code = '';
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
let otp = generateOTP();
setTimeout(() => {
  otp = null;
}, 1000*60);
const authentic = () =>{
    code = '';
    const list = document.querySelectorAll('input');
    list.forEach(e => {
      code = code + e.value;      
    });
    if(code == otp){
      router.push('/auth/forgot');
    }else{
      check.value = true;
    }
}
const sendOTP = () => {
  // Tham số truyền vào email template
  const params = {
    to_email: user.value.email,
    otp_code: otp
  }

  console.log("email:" + user.value.email);
  
  // Gửi email qua EmailJS
  emailjs.send(
    'service_aleerha',    
    'template_vk0macv',   
    params,                
    'oiAsEKIi-UkrB6_II'     
  ).then(() => {
    otpSent.value = true;
  }).catch(err => {
    console.log(err);
  })
}

const fetchUsers = async () =>{
  try {
    const res = await axios.get('http://localhost:3000/users');
    user.value = res.data.find(u => u.phone == phone);

    sendOTP();
  } catch (error) {
    console.log(error);
  }
}

// const focusInput = (e) => {
//   check.value = false;
//   const value = e.target.value;
//   e.target.value = value.slice(0, 1);
//   if (value != '' && e.target.nextElementSibling) {
//     e.target.nextElementSibling.focus();
//   }
// }
onMounted(fetchUsers);
</script>

<style scoped>
i {
  color: gray;
  cursor: pointer;
}

.login {
  width: 420px;
  background: rgba(255, 255, 255);
  padding: 0 32px;
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
}

.logo a {
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
  font-weight: bold;
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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>