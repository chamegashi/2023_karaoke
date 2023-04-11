<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div class="bg-gray-700 h-screen">
        <h1 class="bold text-center pt-20 text-6xl text-white">カラオケ検索</h1>

        <div class="pt-10">
            <div class="w-2/3 mx-auto">
                <p class="text-white">単語検索</p>
                <input class="w-full p-1 rounded">
            </div>
        </div>

        <div class="pt-10 text-center">
            <button class="text-xl border border-gray-400 rounded bg-blue-500 py-2 px-5">検索</button>
        </div>
    </div>
</template>

<style scoped></style>
