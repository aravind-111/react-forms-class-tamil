import { Formik } from Formik;

function app_formik() {
    return (
        <formik 
            initialValues = {{
                full_name: "",
                email_id: "",
            }}
            validate = {() => {
                return{};
            }}
            onSubmit = {() => {
                console.log("form Submited")
            }}
        />
    )
}

export default app_formik