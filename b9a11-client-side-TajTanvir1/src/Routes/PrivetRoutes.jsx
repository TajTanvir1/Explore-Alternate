import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import { AuthContext } from "../Providers/AuthProviders";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <span className="flex mx-auto items-center justify-center h-60">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#e8ac44"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
