import { Navigate } from "react-router-dom"

const WithDataRedirect = (Component) => {
    return (props) => {
        const {user: {bmr}} = props
    return bmr ? <Component {...props} /> : <Navigate to='/profile' />
}} 
export default WithDataRedirect