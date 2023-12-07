import { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function PrivateRoutes({children}) {
    const {loading,user} = useContext(AuthContext)
    if (loading) {
        return(<div className="w-full h-[400px]"><span className="loading loading-ring loading-lg"></span></div>)
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
}
PrivateRoutes.propTypes={
    children: PropTypes.node
}

export default PrivateRoutes;