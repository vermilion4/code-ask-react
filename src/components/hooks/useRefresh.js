// import axios 
import { useAuth } from "./useAuth"
// import axios from "axios";
import axiosPublic from "../baseURL";


 export const useRefresh =()=>{
    const {auth, setAuth} = useAuth();

    const refresh = async ()=>{

        const response = await axiosPublic.post("/refresh-tokens",{
            refreshToken: auth.refreshToken//this lets us send cookies with our address
        }) 
        
        const accessToken = response.data.access.token;
        const refreshToken = response.data.refresh.token

        setAuth({accessToken, refreshToken})

  
        return accessToken
          
    }
    console.log(refresh) 
    return refresh
 }
        