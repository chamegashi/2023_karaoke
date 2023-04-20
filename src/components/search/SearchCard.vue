<script setup lang="ts">
import { Music } from '../../common/type'

defineProps<{ propsData: Music }>()

</script>
<template>
    <div class="w-11/12 rounded my-1 py-3 pl-2 border border-gray-400 mx-auto flex">
        <div class="w-3/4">
            <p class="text-base text-gray-200 truncate">{{ propsData.music_name }}</p>
            <p class="text-sm text-gray-400 truncate">{{ propsData.artist }}</p>
        </div>
        <div class="w-1/4">
            <p class="text-base text-gray-200">key: {{ propsData.key }}</p>
            <p class="text-sm text-gray-400">max: {{ propsData.max_key }}</p>
        </div>
    </div>
</template>
