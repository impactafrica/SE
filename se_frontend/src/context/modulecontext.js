import React,{useState,createContext} from 'react'

export const moduleContext = createContext();

function ModuleProvider(props) {
  // we store the organization data here from the response data
  // we also need a way to query all the organizations a user has registered
  const [moduleId, setModuleId] = useState({});

  return (
    <moduleContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        moduleId,
        setModuleId,
      }}
    >
      {props.children}
    </moduleContext.Provider>
  );
}
export default ModuleProvider;
