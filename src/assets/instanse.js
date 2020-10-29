import axios from "axios"

const instanse = axios.create({
    baseURL: "https://for-test-48a0e.firebaseio.com"
})
export default instanse;