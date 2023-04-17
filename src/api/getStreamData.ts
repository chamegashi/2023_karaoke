import axios from 'axios';
import { StreamResponce } from '../common/type';
import { ref } from 'vue';

export const responce = ref<StreamResponce | null>()
export const error = ref("")
export const isLoading = ref(false)

export const getJoyData = (keyword: string) => {
    isLoading.value = true
    axios.get('https://pykaraokebackend.onrender.com/api/search?keyword=' + keyword)
        .then(function (res) {
            console.log(res)
            console.log(res.data)
            responce.value = res.data
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            isLoading.value = false
        })
}