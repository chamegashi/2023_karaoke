<script setup lang="ts">
import { StreamCardType } from '../../common/type'
import { getJoyData, isLoading, responce, error } from '../../api/getStreamData'
import Card from './StreamCard.vue'
import { ref, watch } from 'vue'

const input = ref<string>("")

const getDataOfStream = () => {
    getJoyData(input.value)
}

watch(responce, () => {
    if (!responce) return

    console.log(responce)
})

const testArray = ref([1, 2, 3])
const test = ref<StreamCardType>({
    title: "少年少女カメレオンシンプトム",
    artist: "neru",
})

</script>

<template>
    <div class="bg-gray-700 h-screen">
        <h1 class="bold text-center pt-10 text-6xl text-white">配信検索</h1>

        <div class="pt-10">
            <div class="w-2/3 mx-auto">
                <p class="text-white">単語検索</p>
                <input v-model="input" class="w-full p-1 rounded">
            </div>
        </div>

        <div class="mt-6 text-center">
            <button @click="getDataOfStream" class="w-1/4 py-2 text-white border border-gray-400 rounded">検索</button>
        </div>

        <div class="mt-4 text-center">
            <button class="py-2 w-1/3 border-b-2 border-gray-400 text-white">Joy</button>
            <button class="py-2 w-1/3 border-b-2 border-gray-400 text-white">DAM</button>
        </div>

        <div v-if="isLoading" class="my-8">
            <div className="flex justify-center">
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full mx-4"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
            </div>
        </div>

        <div v-if="!isLoading" class="mt-4">
            <Card v-for="i in testArray" :props-data="test" />
        </div>

    </div>
</template>

<style scoped></style>
