<template>
    <ul class="menu-list">
    <li v-for="item in child" class="menu-item">
      <a v-if="item.title" class="menu-title" >{{ item.title }}</a>
      <!-- Kiểm tra nếu có menu con thì gọi lại chính component này -->
      <ul v-if="item.child && item.child.length" class="submenu">
        <RecursiveMenu :child="item.child" />
      </ul>
    </li>
  </ul>
</template>
<script setup>
import { defineProps, ref } from 'vue';

defineProps({
  child: {
    type: Object,
    required: true
  }
});

</script>
<style scoped>
.menu-list>li{
  cursor: pointer;
}
.menu-list>li>a{
  list-style:circle;
  text-decoration: none;
  color: black;
}

.menu-list>li:hover a{
  color: var(--primary-green);
}
</style>