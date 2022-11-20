import axiosPublic from "../baseURL";
import { useAuth } from "./useAuth";

const useRefreshToken = () => {
  const { setAuth, auth } = useAuth();

  const refresh = async () => {
    const response = await axiosPublic.post("auth/refresh-tokens", {
      refreshToken: auth.refreshToken,
    });

    const accessToken = response.data.access.token;
    const refreshToken = response.data.refresh.token;

    setAuth({ accessToken, refreshToken });
    return accessToken;
  };
  return refresh;
};

export default useRefreshToken;
