<script setup lang="ts">
import { ViewType } from './common/type'
import Search from './components/search/SearchTop.vue'
import StreamSearch from './components/streamSearch/StreamSearchTop.vue'
import { ref } from 'vue'

const viewType = ref<ViewType>('search')
</script>

<template>
  <div class="static">
    <div class="">
      <Search v-if="viewType === 'search'" />
      <StreamSearch v-if="viewType === 'stream'" />
      <!-- <StreamSearch /> -->
    </div>
    <div id="footer" class="absolute bottom-0 w-full">
      <button class="w-1/3 py-5 bg-blue-500">配信検索</button>
      <button class="w-1/3 py-5 bg-green-500">検索</button>
      <button class="w-1/3 py-5 bg-orange-500">登録</button>
    </div>
  </div>
</template>

<style scoped></style>
