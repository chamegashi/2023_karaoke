<script setup lang="ts">
import { StreamResponce, ModelType } from '../../common/type'
import { getJoyData, isLoading, responce, error } from '../../api/getStreamData'
import Card from './StreamCard.vue'
import { ref, watch } from 'vue'

const input = ref<string>("")
const result = ref<StreamResponce>()
const toggleModel = ref<ModelType>('Joy')

const getDataOfStream = () => {
    getJoyData(input.value)
}

watch(responce, () => {
    if (!responce.value) {
        return
    }
    result.value = responce.value;
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

        <div v-if="toggleModel == 'Joy'" class="mt-4 text-center">
            <button class="py-2 w-1/3 border-b-2 border-blue-500 text-blue-500">Joy</button>
            <button @click="toggleModel = 'DAM'" class="py-2 w-1/3 border-b-2 border-gray-400 text-white">DAM</button>
        </div>

        <div v-if="toggleModel == 'DAM'" class="mt-4 text-center">
            <button @click="toggleModel = 'Joy'" class="py-2 w-1/3 border-b-2 border-gray-400 text-white">Joy</button>
            <button class="py-2 w-1/3 border-b-2 border-blue-500 text-blue-500">DAM</button>
        </div>

        <div v-if="isLoading" class="my-8">
            <div className="flex justify-center">
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full mx-4"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
            </div>
        </div>

        <div v-if="toggleModel === 'Joy' && !isLoading" className="h-3/5 pb-16">
            <div v-if="responce?.joyResponce" class="mt-4 overflow-scroll h-full">
                <Card v-for="data in responce.joyResponce" :props-data="data" />
            </div>
            <div v-else class="mt-4">
                <p className="text-white text-center text-xl">配信されている曲がありません</p>
            </div>
        </div>

        <div v-if="toggleModel === 'DAM' && !isLoading" className="h-3/5 pb-16">
            <div v-if="responce?.damResponce" class="mt-4 overflow-scroll h-full">
                <Card v-for="data in responce.damResponce" :props-data="data" />
            </div>
            <div v-else class="mt-4">
                <p className="text-white text-center text-xl">配信されている曲がありません</p>
            </div>
        </div>


    </div>
</template>

<style scoped></style>
