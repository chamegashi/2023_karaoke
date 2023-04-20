import axios from 'axios';
import { StreamResponce, Music } from '../common/type';
import { ref } from 'vue';

const VITE_API_URL = import.meta.env.VITE_API_URL

export const responce = ref<Music[] | null>()
export const error = ref("")
export const isLoading = ref(false)

export const getMusic = () => {
    isLoading.value = true
    axios.get(VITE_API_URL + 'music/get')
        .then(function (res) {
            responce.value = res.data.result
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            isLoading.value = false
        })
}