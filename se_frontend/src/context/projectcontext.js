import React,{useState,createContext} from 'react'

export const projectContext = createContext();

function ProjectProvider(props) {
  // we store the organization data here from the response data
  // we also need a way to query all the organizations a user has registered
  const [projectId, setprojectId] = useState({});
  const [projectName, setprojectName] = useState({});

  return (
    <projectContext.Provider
      value={{
        // values passed here will be accessed in other components
        // anywhere in the application
        projectId,
        setprojectId,
        projectName,
        setprojectName,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}
export default ProjectProvider;
