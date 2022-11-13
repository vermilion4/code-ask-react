import * as yup from "yup";

let validationSchema = yup.object().shape({
    email: yup.string("email").email().required("Input field cannot be empty"),
    
})

export default validationSchema

