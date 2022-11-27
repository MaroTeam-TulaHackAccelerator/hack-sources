import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const usePrivateGuard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token");
  
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [navigate, token]);
};
