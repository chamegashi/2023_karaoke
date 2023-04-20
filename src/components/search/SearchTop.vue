<script setup lang="ts">
import { ref, watch } from 'vue'

import { Music } from '../../common/type'
import { getMusic, isLoading, responce, error } from '../../api/AccessDatabase'
import Card from './SearchCard.vue'
import { useStoreMusics } from '../../stores/music'

const musicData = ref<Music[]>([])
const storeMusic = useStoreMusics();

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
        <h1 class="bold text-center pt-10 text-6xl text-white">カラオケ検索</h1>

        <div class="pt-10">
            <div class="w-2/3 mx-auto">
                <p class="text-white">単語検索</p>
                <input class="w-full p-1 rounded">
            </div>
        </div>

        <h1 class="bold text-center pt-5 text-2xl text-white">検索結果</h1>

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
