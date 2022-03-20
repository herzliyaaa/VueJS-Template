<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="flex items-center justify-end w-screen bg-indigo-700 h-14">
    <div class="flex p-2 font-bold text-white text-md">
      <RouterLink to="/home">HOME</RouterLink>
    </div>
    <div class="flex p-2 font-bold text-white text-md">
      <RouterLink to="/about">ABOUT</RouterLink>
    </div>

    <div class="flex p-2 font-bold text-white text-md">
      <RouterLink to="/">LOGOUT</RouterLink>
    </div>
  </nav>
</template>

<style>
 nav .nav-active-link {
 font-weight: 600;
 background-color: rgb(197, 198, 245);
 color: rgb(53, 52, 52);
 display: flex;
 justify-content:center;
 align-items: center;
 height: 50px;
 padding: 15px;
 border-radius: 15px;
}
</style>