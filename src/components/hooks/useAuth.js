import { useContext } from "react";

import { AuthContext } from "../../pages/SignIn/AuthContext";

 export const useAuth = ()=>{
     return useContext(AuthContext)
}
;
