import axios from "axios";

export default class Repository {

    constructor(uri) {
        this.uri = uri
    }

    getUri() {
        return this.uri
    }

    async getAxios() {
        try {
            const response = await axios.get(this.uri)
            return response.data
        } catch (error) {
            throw new Error("Algo pasó")
        }
    }

}