import React,{useState,createContext} from 'react'

export const userContext = createContext();

function UserProvider(props) {
  // we store the organization data here from the response data
  // we also need a way to query all the organizations a user has registered
  const [userId, setuserId] = useState({});

  return (
    <userContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        userId,
        setuserId,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}
export default UserProvider;
