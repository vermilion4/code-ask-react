import * as yup from "yup";

let validationSchema = yup.object().shape({
    username: yup.string().required().min(4).max(20),
    email: yup.string().email().required(),
    password: yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required(),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Must match "password" field value').required("Confirm Password is a required field")
})

export default validationSchema

