<script setup lang="ts">
import { SearchCardType } from '../../common/type'
import { ref } from 'vue'

const test = ref<SearchCardType>({
    title: "少年少女カメレオンシンプトム",
    artist: "neru",
    key: 0,
    maxKey: "hihib"
})

const testArray = ref([1, 2, 3])

</script>

<template>
    <div class="bg-gray-700 h-screen">
        <h1 class="bold text-center pt-10 text-6xl text-white">配信検索</h1>

        <div class="pt-10">
            <div class="w-2/3 mx-auto">
                <p class="text-white">単語検索</p>
                <input class="w-full p-1 rounded">
            </div>
        </div>

        <h1 class="bold text-center pt-5 text-2xl text-white">検索結果</h1>

    </div>
</template>

<style scoped></style>
