import axios from "axios";


// axios.interceptors.request
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response,'aaaaa')
    if(response.status===401){

    }
    return response;
}, (rejected)=>{
    if(rejected.response.status===404){
        console.log(rejected.message)
        alert(rejected.message)
    }
});