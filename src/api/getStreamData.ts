import axios from 'axios';
import { StreamResponce } from '../common/type';
import { ref } from 'vue';

const VITE_API_URL = import.meta.env.VITE_API_URL

export const responce = ref<StreamResponce | null>()
export const error = ref("")
export const isLoading = ref(false)

export const getJoyData = (keyword: string) => {
    isLoading.value = true
    axios.get(VITE_API_URL + 'search?keyword=' + keyword)
        .then(function (res) {
            responce.value = res.data
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            isLoading.value = false
        })
}