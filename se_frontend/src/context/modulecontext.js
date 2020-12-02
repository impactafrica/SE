import React,{useState,createContext} from 'react'

export const moduleContext = createContext();

function ModuleProvider(props) {
  
  const [moduleId, setModuleId] = useState({});
  const [moduleName, setModuleName] = useState();
  const [moduleNumber, setmoduleNumber] = useState();
  const [moduleDescription, setmoduleDescription] = useState();

  return (
    <moduleContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        moduleId,
        setModuleId,
        moduleName,
        setModuleName,
        moduleNumber,
        setmoduleNumber,
        moduleDescription,
        setmoduleDescription,
      }}
    >
      {props.children}
    </moduleContext.Provider>
  );
}
export default ModuleProvider;
