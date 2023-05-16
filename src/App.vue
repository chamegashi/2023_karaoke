<script setup lang="ts">
import { ViewType } from './common/type'
import Search from './components/search/SearchTop.vue'
import StreamSearch from './components/streamSearch/StreamSearchTop.vue'
import Regist from './components/regist/Regist.vue'
import { ref } from 'vue'

const viewType = ref<ViewType>('search')

const updateViewType = (value: ViewType) => {
  viewType.value = value;
}

</script>

<template>
  <div class="static main-view">
    <div class="">
      <Search v-if="viewType === 'search'" />
      <StreamSearch v-if="viewType === 'stream'" />
      <Regist v-if="viewType === 'register'" />
    </div>
    <div id="footer" class="absolute bottom-0 w-full border-t-2 border-gray-500">
      <button @click="updateViewType('stream')" class="w-1/3 py-5 text-white border-r-2 border-gray-500"
        :class="{ 'bg-gray-500': viewType === 'stream' }">配信検索</button>
      <button @click="updateViewType('search')" class="w-1/3 py-5 text-white"
        :class="{ 'bg-gray-500': viewType === 'search' }">検索</button>
      <button @click="updateViewType('register')" class="w-1/3 py-5 text-white border-l-2 border-gray-500"
        :class="{ 'bg-gray-500': viewType === 'register' }">登録</button>
    </div>
  </div>
</template>

<style>
.main-view {
  height: 100svh
}
</style>