import { useState, useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../Authentication/authConfig";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import TokenContext from "../../Contexts/TokenContextProvider";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../../utils/helpers";
import UserContext from "../../Contexts/UserContextProvider";

const useLoginHandler = (onLoginSuccess: () => void) => {
  const { instance } = useMsal();
  const [loading, setLoading] = useState(false);

  const {setUser} = useContext(UserContext)

  const {setToken} = useContext(TokenContext)

  const navigate = useNavigate();

  const handleLogin = async (loginType: string) => {
    setLoading(true);
    if (loginType === "popup") {
      try {
        localStorage.clear();
        const response = await instance.loginPopup(loginRequest);
        if (response.account.name && response.account.name ) {
          localStorage.setItem('user',JSON.stringify({'username':response.account.name,'usermail':response.account.username}));
          setUser({'username':response.account.name,'usermail':response.account.username})
      } else {
          console.error('Username is undefined');
      }
        const token = await getAccessToken();
        console.log("isTokenExpired",isTokenExpired(token))
        console.log("acquired token", token)
        setToken(token);

        if (token !== null) {
          storeToken(token);
        }
        

        navigate('/home')

        onLoginSuccess();
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false); // Disable loading regardless of outcome
      }
    }
  };

  const getAccessToken = async () => {
    try {
      const accounts = instance.getAllAccounts();
      if (accounts.length === 0) throw new Error("No accounts found!");

      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0], // Assuming there's at least one account
      });

      return response.accessToken;
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        // Fallback to interactive method if silent token acquisition fails
        const response = await instance.loginPopup(loginRequest);
        return response.accessToken;
      } else {
        console.error(error);
        return null;
      }
    }
  };

  return { handleLogin, getAccessToken, loading }; // Return getAccessToken to use in API requests
};

export default useLoginHandler;

const isTokenExpired = (token: string | null): boolean => {
  if(token != null){
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const exp = decodedToken.exp; // Expiration time in seconds since Unix epoch
    console.log(exp)
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds since Unix epoch

    return currentTime > exp;
  }
  return true;
};

