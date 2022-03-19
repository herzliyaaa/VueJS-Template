<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="flex justify-end items-center bg-indigo-500 w-screen h-14">
    <div class="flex p-2 text-md text-white font-bold ">
      <RouterLink to="/">HOME</RouterLink>
    </div>

<div class="flex p-2 text-md text-white font-bold ">
      <RouterLink to="/">LINK</RouterLink>
    </div>

    <div class="flex p-2 text-md text-white font-bold ">
      <RouterLink to="/about">ABOUT</RouterLink>
    </div>
  </nav>
</template>

