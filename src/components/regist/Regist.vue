<script setup lang="ts">
import { ref, watch } from 'vue'
import { PianoType, rangeType } from '../../common/type'

const rangeValue = ref<rangeType>('hi');
const pianoValue = ref<PianoType>('A');

const toggleRange = (value: rangeType) => {
    rangeValue.value = value
}

const changePiano = (value: PianoType) => {
    pianoValue.value = value
}

</script>

<template>
    <div class="bg-gray-700 h-screen">
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
                        <button @click="toggleRange('mid2')"
                            class="w-full py-1 my-1 text-white border border-gray-400 rounded"
                            :class="{ 'bg-gray-500': rangeValue === 'mid2' }">mid2</button>
                        <button @click="toggleRange('hi')"
                            class="w-full py-1 my-1 text-white border border-gray-400 rounded"
                            :class="{ 'bg-gray-500': rangeValue === 'hi' }">hi</button>
                        <button @click="toggleRange('hihi')"
                            class="w-full py-1 my-1 text-white border border-gray-400 rounded"
                            :class="{ 'bg-gray-500': rangeValue === 'hihi' }">hihi</button>
                    </div>
                    <div class="w-9/12 h-40 my-auto relative">
                        <div class="absolute left-0 top-0 w-screen h-40 flex ml-6">
                            <div @click="changePiano('A')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'A', 'bg-white': pianoValue !== 'A' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'A', 'text-black': pianoValue !== 'A' }">A
                                </div>
                            </div>
                            <div @click="changePiano('B')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'B', 'bg-white': pianoValue !== 'B' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'B', 'text-black': pianoValue !== 'B' }">B
                                </div>
                            </div>
                            <div @click="changePiano('C')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'C', 'bg-white': pianoValue !== 'C' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'C', 'text-black': pianoValue !== 'C' }">C
                                </div>
                            </div>
                            <div @click="changePiano('D')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'D', 'bg-white': pianoValue !== 'D' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'D', 'text-black': pianoValue !== 'D' }">D
                                </div>
                            </div>
                            <div @click="changePiano('E')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'E', 'bg-white': pianoValue !== 'E' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'E', 'text-black': pianoValue !== 'E' }">E
                                </div>
                            </div>
                            <div @click="changePiano('F')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'F', 'bg-white': pianoValue !== 'F' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'F', 'text-black': pianoValue !== 'F' }">F
                                </div>
                            </div>
                            <div @click="changePiano('G')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'G', 'bg-white': pianoValue !== 'G' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'G', 'text-black': pianoValue !== 'G' }">G
                                </div>
                            </div>
                            <div @click="changePiano('A')" class="relative w-6 h-full mx-0.5 rounded"
                                :class="{ 'bg-blue-600': pianoValue === 'A', 'bg-white': pianoValue !== 'A' }">
                                <div class="absolute bottom-0 text-xl left-1.5"
                                    :class="{ 'text-white': pianoValue === 'A', 'text-black': pianoValue !== 'A' }">A
                                </div>
                            </div>
                        </div>
                        <div class="absolute left-0 top-0 w-screen h-24 flex ml-6">
                            <div @click="changePiano('A#')" class="w-6 h-full z-10 translate-x-4"
                                :class="{ 'bg-blue-600': pianoValue === 'A#', 'bg-black': pianoValue !== 'A#' }">
                                <div class="absolute bottom-0 text-base left-0.5 text-white">A#</div>
                            </div>
                            <div class="w-6 mx-1"></div>
                            <div @click="changePiano('C#')" class="h-full w-6 z-10 translate-x-4"
                                :class="{ 'bg-blue-600': pianoValue === 'C#', 'bg-black': pianoValue !== 'C#' }">
                                <div class="absolute bottom-0 text-base left-0.5 text-white">C#</div>
                            </div>
                            <div @click="changePiano('D#')" class="h-full w-6 z-10 mx-0.5 translate-x-4"
                                :class="{ 'bg-blue-600': pianoValue === 'D#', 'bg-black': pianoValue !== 'D#' }">
                                <div class="absolute bottom-0 text-base left-0.5 text-white">D#</div>
                            </div>
                            <div class="w-6 mx-1"></div>
                            <div @click="changePiano('F#')" class="h-full w-6 z-10 translate-x-4"
                                :class="{ 'bg-blue-600': pianoValue === 'F#', 'bg-black': pianoValue !== 'F#' }">
                                <div class="absolute bottom-0 text-base left-0.5 text-white">F#</div>
                            </div>
                            <div @click="changePiano('G#')" class="h-full w-6 mx-0.5 translate-x-4 z-10"
                                :class="{ 'bg-blue-600': pianoValue === 'G#', 'bg-black': pianoValue !== 'G#' }">
                                <div class="absolute bottom-0 text-base left-0.5 text-white">G#</div>
                            </div>
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
