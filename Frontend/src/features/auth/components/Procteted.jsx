import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const Procteted = ({ children }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();


  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default Procteted;
