<script setup lang="ts">
import { ref, watch } from 'vue'
import { PianoType, rangeType } from '../../common/type'

const range_button = ref<rangeType>('hi');
const piano_data = ref<PianoType>('A');

</script>

<template>
    <div class="bg-gray-700 h-screen">
        <h1 class="bold text-center pt-10 text-6xl text-white">曲登録</h1>

        <div class="pt-10">
            <div class="w-5/6 mx-auto">
                <p class="text-white">曲タイトル</p>
                <input class="w-full p-1 rounded">
            </div>
            <div class="w-5/6 mx-auto mt-2">
                <p class="text-white">曲ひらがなタイトル</p>
                <input class="w-full p-1 rounded">
            </div>
            <div class="w-5/6 mx-auto mt-2">
                <p class="text-white">アーティスト</p>
                <input class="w-full p-1 rounded">
            </div>

            <div class="w-5/6 mx-auto mt-2">
                <p class="text-white">キー</p>
                <p class="text-white text-center">0</p>
                <input type="range" min="-6" max="6" value="0"
                    class="w-full h-2 mt-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-500">
            </div>

            <div class="mt-4">
                <p class="text-white text-center">曲の最高音</p>

                <div class="mt-2 mx-4 flex">
                    <div class="w-3/12">
                        <p class="text-white text-center">音域帯</p>
                        <button class="w-full py-1 my-1 text-white border border-gray-400 rounded">mid2</button>
                        <button class="w-full py-1 my-1 text-white border border-gray-400 rounded">hi</button>
                        <button class="w-full py-1 my-1 text-white border border-gray-400 rounded">hihi</button>
                    </div>
                    <div class="w-9/12 h-40 flex justify-center">
                        <div class="bg-white w-7 h-full mx-0.5 rounded"></div>
                        <div class="bg-white w-7 h-full mx-0.5 rounded">
                            <div class="bg-black h-3/5 -translate-x-4"></div>
                        </div>
                        <div class="bg-white w-7 h-full mx-0.5 rounded">
                            <div class="bg-black h-3/5 -translate-x-4"></div>
                        </div>
                        <div class="bg-white w-7 h-full mx-0.5 rounded"></div>
                        <div class="bg-white w-7 h-full mx-0.5 rounded">
                            <div class="bg-black h-3/5 -translate-x-4"></div>
                        </div>
                        <div class="bg-white w-7 h-full mx-0.5 rounded">
                            <div class="bg-black h-3/5 -translate-x-4"></div>
                        </div>
                        <div class="bg-white w-7 h-full mx-0.5 rounded">
                            <div class="bg-black h-3/5 -translate-x-4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-5/6 mx-auto mt-4 flex">
                <div class="w-1/2">
                    <p class="text-white">スコア</p>
                    <input class="w-3/4 p-1 rounded">
                </div>

                <div class="w-1/2">
                    <p class="text-white">お気に入り</p>
                    <div>
                        <button class="w-3/12 p-1 border rounded">0</button>
                        <button class="w-3/12 p-1 border rounded">1</button>
                        <button class="w-3/12 p-1 border rounded">2</button>
                        <button class="w-3/12 p-1 border rounded">3</button>
                    </div>
                </div>
            </div>

            <div class="mt-6 text-center">
                <button class="w-1/4 py-2 text-white bg-blue-600 border border-blue-800 rounded">ほぞん</button>
            </div>

        </div>

    </div>
</template>

<style scoped></style>
