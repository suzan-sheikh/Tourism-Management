import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loader from "./Loader";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <Loader/>
    }
    if(!user) {
        return <Navigate to="/login" state={location?.pathname || "/"} />;
    }
    return <div>{children}</div>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };

export default PrivateRoute;