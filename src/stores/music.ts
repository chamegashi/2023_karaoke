import { defineStore } from 'pinia';
import { Music } from '../common/type'

export const useStoreMusics = defineStore('musics', {
  state: () => ({
    musics: [] as Music[],
  }),
  actions: {
    updateMusic(data: Music[]) {
      this.musics = data
    }
  }
});