<script setup lang="ts">
import { StreamResponce, ModelType } from '../../common/type'
import { getJoyData, isLoading, responce, error } from '../../api/getStreamData'
import Card from './StreamCard.vue'
import { ref, watch } from 'vue'
import {
    MagnifyingGlassIcon,
} from '@heroicons/vue/24/solid'

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
        <div class="flex pt-4 mx-4 mb-3">
            <div class="bg-white w-5/6 rounded p-1 mr-2 flex">
                <MagnifyingGlassIcon class="h-6 w-6 text-gray-700" />
                <input class="w-full mx-1" v-model="input" />
            </div>
            <div class="w-1/6">
                <button @click="getDataOfStream" class="w-full h-full text-white border border-gray-400 rounded">検索</button>
            </div>
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

        <div v-if="toggleModel === 'Joy' && !isLoading" className="h-4/5 pb-16">
            <div v-if="responce?.joyResponce" class="mt-4 overflow-scroll h-full">
                <Card v-for="data in responce.joyResponce" :props-data="data" />
            </div>
            <div v-else class="mt-4">
                <p className="text-white text-center text-xl">配信されている曲がありません</p>
            </div>
        </div>

        <div v-if="toggleModel === 'DAM' && !isLoading" className="h-4/5 pb-16">
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
