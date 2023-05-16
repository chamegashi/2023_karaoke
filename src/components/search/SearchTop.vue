<script setup lang="ts">
import { ref, watch } from 'vue'
import {
    MagnifyingGlassIcon,
} from '@heroicons/vue/24/solid'
import { Music } from '../../common/type'
import { getMusic, isLoading, responce, error } from '../../api/AccessDatabase'
import Card from './SearchCard.vue'
import { useStoreMusics } from '../../stores/music'

const musicData = ref<Music[]>([])
const storeMusic = useStoreMusics();
const filterWord = ref<string>("")

if (storeMusic.musics.length > 0) {
    musicData.value = storeMusic.musics
} else {
    getMusic()
}


watch(responce, () => {
    if (!responce.value) {
        return
    }
    musicData.value = responce.value;
    storeMusic.musics = musicData.value
})

const testArray = ref([1, 2, 3])

</script>

<template>
    <div class="bg-gray-700 h-screen">

        <div class="flex pt-4 mx-4 mb-3">
            <div class="bg-white w-5/6 rounded p-1 mr-2 flex">
                <MagnifyingGlassIcon class="h-6 w-6 text-gray-700" />
                <input class="w-full mx-1" v-model="filterWord" />
            </div>
            <div class="w-1/6">
                <!-- <FilterPopover @update="(data) => updateFilterAvailable(data)" /> -->
            </div>
        </div>

        <h1 class="bold text-center pt-2 text-2xl text-white">検索結果</h1>

        <div v-if="isLoading" class="my-8">
            <div className="flex justify-center">
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full mx-4"></div>
                <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
            </div>
        </div>

        <div v-if="!isLoading" class="my-2">
            <Card v-for="music in musicData" :props-data="music" />
        </div>

    </div>
</template>

<style scoped></style>
