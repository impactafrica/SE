import React,{useState,createContext,useEffect} from 'react'
import axios from 'axios'
import { useJwt } from "react-jwt";

export const userContext = createContext();

function UserProvider(props) {

  //declare the states we will need for the user.to check whether they are authenticated.
  const [userId, setuserId] = useState({});
  const [accessToken, setAccessToken] = useState({});
  const [theRefreshToken, setRefreshToken] = useState({});
  const [authenticated,setAuthenticated] = useState([false]);

  //check whether the user is authenticated by checking the tokens status(both refresh and access),
  //  if it is expired, prompt them to login, 
  // if not,automatically sign them in and take them to the landing page.

  if(!localStorage.getItem('access')){
    localStorage.setItem('access',accessToken)
  }

  if(!localStorage.getItem('refresh')){
    localStorage.setItem('refresh',theRefreshToken)
  }
  
  const { decodedToken, isExpired, refreshToken } = useJwt(JSON.stringify(localStorage.getItem('refresh')));
  console.log("has the token expired?",isExpired)
  console.log("heres the decode",decodedToken)

  //if refresh token exists, request for new access token for user
   

  //axios: interceptor to include the token in every request as an Authorization header
  
  console.log("has the token expired?",isExpired)

  function setToken(){
    if ( (accessToken == null) || (accessToken == '"[object Object]"' )) {
      const settings = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
      };
  
      const body = JSON.stringify({ refresh: localStorage.getItem('refresh') });
      axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`, body, settings)
      .then(res=> {
        console.log("heres the updated token",res.data.access);
        localStorage.setItem('access',res.data.access)
        // refreshToken(res.data.access); // decodedToken and isExpired will be updated
        console.log("access token after update",decodedToken)
      })
    }
    // axios.interceptors.request.use(
    //   function(config) {
    //     const token = JSON.stringify(accessToken);
    //     console.log("token in interceptor",token)

    //     if ( (token != null) || (token != '"[object Object]"')) {
    //       console.log("tokeb un aicwfjk sdcuijwf")
    //       config.headers.Authorization = `JWT ${token}`;
    //     }
    //     else
    //     {
    //       console.log("token in interccep not found")
          
    //     }

    //   return config;
    // }, function(err) {
    //   return Promise.reject(err);
    // });
  }
  
  //function to authenticate user if token is found
  function checkAuth(){
    if (localStorage.getItem('access')) {
      const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
      };

      const body = JSON.stringify({ token: localStorage.getItem('access') });
      axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
        .then(response => 
          console.log("user has been authorized"),
          setAuthenticated(true)
          )
        .catch(errors =>
          console.log("an error occured"),
          setAuthenticated(false))
    }
    else
    {
      console.log("no user token found")
      setAuthenticated(false)
    }
  }

  function load_user () 
  {
    if (localStorage.getItem('access')) {
      const config = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `JWT ${localStorage.getItem('access')}`,
              'Accept': 'application/json',
          }
      };
      axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
        .then(response =>
          console.log("user loaded successfully",response.data),
          setuserId())
        .catch(errors =>
          console.log("an error occured fetching user"),
          setAuthenticated(false))
    }
    else
    {
      console.log("user not found")
      setAuthenticated(false);
    }

  }
  useEffect(() => {
    setToken();
    checkAuth() ;
    load_user();
  },[])
  
  return (
    <userContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        userId,
        setuserId,
        accessToken,
        setAccessToken,
        theRefreshToken,
        setRefreshToken,
        authenticated,
        setAuthenticated,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
export default UserProvider;






//   if(!localStorage.getItem('access')){
//     localStorage.setItem('access',accessToken)
//   }

//   if(!localStorage.getItem('refresh')){
//     localStorage.setItem('refresh',theRefreshToken)
//   }

//   console.log("here's the token on loading",accessToken)