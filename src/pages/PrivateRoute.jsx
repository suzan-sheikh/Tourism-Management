import { Navigate, useLocation } from "react-router-dom";
import Loader from "./Loader";
import PropTypes from "prop-types";
import UseAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
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