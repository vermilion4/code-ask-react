import { useContext } from "react";

import { AuthContext } from "../../Helpers/AuthContext";

 export const useAuth = ()=>{
     return useContext(AuthContext)
}
;
