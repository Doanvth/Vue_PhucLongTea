<template>
    <div class="row">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-success text-decoration-none link-danger">Trang chủ</RouterLink>
                </li>
                <li class="breadcrumb-item active">{{ title }}</li>
            </ol>
        </nav>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    title: String
  });
  </script>
  
  <style scoped>

  </style>
  