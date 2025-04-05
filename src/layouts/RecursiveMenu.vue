<template >
    <ul class="menu-list">
    <li v-for="item in child" class="menu-item">
      <a class="menu-title">{{ item.title }}</a>
      
      <!-- Kiểm tra nếu có menu con thì gọi lại chính component này -->
      <ul v-if="item.child && item.child.length" class="submenu">
        <RecursiveMenu :child="item.child" />
      </ul>
    </li>
  </ul>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  child: {
    type: Object,
    required: true
  }
});
</script>
<style scoped>
.menu-title{
    text-decoration: none;
    color: black;
    padding: 8px 15px;
}
.menu-item{
    padding: 8px 0;
}

.menu-title:hover{
    background-color: var(--primary-green);
    color: var(--white);
}
</style>