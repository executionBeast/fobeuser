export const userBackendUrl  = "https://random-data-api.com/api/users/random_user" 


// const getUser = async () => {
//     try{
//         let userdata = await axios.get(`${userBackendUrl}?size=80`) 
//         if(!userdata.data){
//             setSuccess(false)
//             return false
//         }
//         console.log("RES : ", userdata)
//         console.log("USER : ", userdata.data[currentIndex])
//         setSuccess(true)
//     }
//     catch(err) {
//         console.log("Axios Error: ", err.message)
//         return false
//     }
// }
