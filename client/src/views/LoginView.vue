<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <section class="flex items-center justify-center w-screen h-screen bg-gray-200 ">
        <div
            class="flex flex-row items-start justify-start p-2 flex- h-80 w-90 rounded-2xl"
        >
            <div class="w-1/2 h-full bg-blue-400 rounded-l-2xl">
           <img class="h-full rounded-l-2xl" src="@/assets/sun-tornado.svg" alt="bg">
            </div>

            <div class="flex items-center justify-center w-1/2 h-full p-2 bg-white rounded-r-2xl">
                <div class="flex justify-center h-full w-30">
                    <div class="flex flex-col items-center justify-center h-full w-30">
                        <div class="flex flex-col justify-center h-20 w-30 m-2">
                            <label for="username" class="font-bold text-left text-gray-800">USERNAME</label>
                            <input
                                type="text"
                                class="border-0 w-30 focus:outline-none bg-slate-200 rounded-xl p-2"
                            />
                        </div>

                        <div class="flex flex-col justify-center h-20 w-30 m-2">
                            <label for="password" class="font-bold text-left text-gray-800">PASSWORD</label>
                            <input
                                type="password"
                                class="border-0 w-30 focus:outline-none bg-slate-200 rounded-xl p-2"
                            />
                        </div>

                        <div class="flex flex-col items-center justify-center h-20 w-30">
                            <RouterLink to="/home">
                            <button
                                class="h-10 text-center bg-blue-500 text-white w-btn hover:bg-blue-700 rounded-3xl"
                            >  LOGIN</button></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

