import axios from "axios";
import { useState } from "react"

const useFetch = () => {

    const [apiData,setApiData] = useState();
    const getApi = (url) => {
        axios.get(url)
            .then(resp => setApiData(resp.data))
            .catch(error => console.log(error));
    }
    return [ apiData, getApi];
}

export default useFetch;
